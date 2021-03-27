const {blog} = require('../models/index'); 


class blogController {
    async create(req, res){
        try {
            let createBlog = await blog.create({
                nameBlog : req.body.nameBlog,
                descriptionBlog : req.body.descriptionBlog,
                dateBlog : req.body.dateBlog
            })
            let newBlog = await blog.findOne({
                _id: createBlog._id
            }, 'nameBlog descriptionBlog dateBlog');

            return res.status(200).json({
                status: 'success create blog',
                data: newBlog
            })
        } catch (e) {
            return res.status(500).json({
                status:'error'
            })
            
        }
    }

    async update(req, res){
        try {
            let updateBlog = await blog.findOneAndUpdate({
                _id: req.params._id
            },{
                nameBlog : req.body.nameBlog,
                descriptionBlog: req.body.descriptionBlog,
                date: req.body.dateBlog
            },{
                new: true
            });
            
            let newBlog = await blog.findOne({
                _id: updateBlog._id
            }, 'nameBlog descriptionBlog dateBlog')

            return res.status(200).json({
                status: 'success update blog',
                data: newBlog
            })
        } catch (e) {
            return res.status(500).json({
                status: 'error',
                error: e
            });
            
        }
    }

    async getAll(req, res){
        try {
            let newBlog = await blog.find({},
                'nameBlog descriptionBlog dateBlog')

            return res.status(200).json({
                status: 'sucess get all blog',
                data : newBlog
            })
        } catch (e) {
            return res.status(500).json({
                status: 'error',
                error: e
            }) 
        }
    }

    async getOne(req, res){
        try {
            let newBlog = await blog.findOne({
                _id : req.params._id
            },'nameBlog descriptionBlog dateBlog')

            return res.status(200).json({
                status: 'succes get one blog',
                data : newBlog
            })
        } catch (e) {
            return res.status(500).json({
                status: 'error',
                error: e
            })
        }
    }

    async delete(req, res){
       blog.delete({
           _id: req.params._id
       }).then(() => {
           res.json({
               status: 'success delete blog',
               data: null
           })
       })
};
}
module.exports = new blogController