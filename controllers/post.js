const Post = require('../models/post')


exports.getAllPosts = async (req, res) => {

    try {
        const posts = await Post.findAll();
        res.status(200).json({
            posts,
            ok: true
        })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al obtener las Publicaciones',
        })
    }
}

exports.createPost = async (req, res) => {
    try {
        const { descripcion, fecha, imagen, ubicacion, userId } = req.body
        const post = await Post.create(req.body);
        res.status(201).json({
            ok: true,
            post
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'server error',
            error
        })

    }
}

exports.updatePost = async (req, res) => {
   
    const {id} = req.params
    const {descripcion, fecha, imagen, ubicacion, userId } = req.body

    try {

        const post = await Post.findOne({where: {id: id}});

        if(post){
            post.update({descripcion, fecha, imagen, ubicacion, userId })
        }
        else{
            res.status(404).json({
                msg: "no existe publicacion con ese id"
            })
        }

        res.status(200).json({
            msg: "se actualizo la publicacion",
            post
        })


    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'server error'
        })

    }
}

exports.deletePost = async (req, res) => {

    const {id} = req.params;


    try {

        const post = await Post.destroy({where: {id: id}})

        res.status(201).json({
            ok: true,
            post
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'server error'
        })

    }
}