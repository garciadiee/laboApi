const User = require('../models/user')
const Post = require('../models/post')

exports.getAllUsers = async (req, res) => {

    try {
        const users = await User.findAll();
        res.status(200).json({
            users,
            ok: true
        })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al obtener los usuarios',
        })
    }
}

exports.createUser = async (req, res) => {
    try {
        const { username, password, email } = req.body
        const user = await User.create(req.body);
        res.status(201).json({
            ok: true,
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'server error'
        })

    }
}

exports.getUserPosts = async(req, res)=>{
    try {
        const {id} = req.params
        const user = await User.findAll({
            where: {id: id},
            include: {
                model : Post
            }
        })
        res.status(200).json({
            msg: "posteos del usuario",
            user
        })} catch (error){
        console.log(error)
    }
    
}

exports.updateUser = async (req, res) => {
   
    const {id} = req.params
    const {username, password, email} = req.body

    try {

        const user = await User.findOne({where: {id: id}});

        if(user){
            user.update({username, password, email})
        }
        else{
            res.status(404).json({
                msg: "no existe usurio con ese id"
            })
        }

        res.status(200).json({
            msg: "usuario actualizado",
            user
        })


    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'server error'
        })

    }
}

exports.deleteUser = async (req, res) => {

    const {id} = req.params;


    try {

        const user = await User.destroy({where: {id: id}})

        res.status(201).json({
            ok: true,
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'server error'
        })

    }
}