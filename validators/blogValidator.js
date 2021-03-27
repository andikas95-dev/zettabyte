const {
    check,
    validationResult
  } = require('express-validator')
const blog = require('../models').blog

module.exports = {
   create:[
       check('nameBlog', 'must be fill').isString().notEmpty(),
       check('descriptionBlog','must be fill').isString().notEmpty(),
       check('dateBlog','the format is (yyyy-mm-dd)').isDate().notEmpty(),
       (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({
            errors: errors.mapped()
          })
        }
        next();
      }
   ],
   update:[
    check('_id', 'must be fill').custom(async (value, {req}) => {
      try {
        if((value.length != 24) ) {
          throw new Error(`ID must 24 character!`)
        };
        let findBlog = await blog.findOne({
          _id: value
        });

        if(!findBlog) {
          throw new Error(`ID not found`)
        }
      } catch(e) {
        throw new Error(e)
      }
    }),
    check('nameBlog', 'must be fill').isString().notEmpty(),
    check('descriptionBlog','must be fill').isString().notEmpty(),
    check('dateBlog','the format is (yyyy-mm-dd)').isDate().notEmpty(),
    (req, res, next) => {
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(422).json({
         errors: errors.mapped()
       })
     }
     next();
   }
   ],
   getOne:[
    check('_id', 'must be fill').custom(async (value, {req}) => {
      try {
        if((value.length != 24) ) {
          throw new Error(`ID must 24 character!`)
        };
        let findBlog = await blog.findOne({
          _id: value
        });

        if(!findBlog) {
          throw new Error(`ID not found`)
        }
      } catch(e) {
        throw new Error(e)
      }
    }),
    (req, res, next)=>{
      const error = validationResult(req);
      if(!error.isEmpty()){
        return res.status(422).json({
          error: error.mapped()
        })
      }
      next();
    }

   ],
   delete:[
    check('_id', 'must be fill').custom(async (value, {req}) => {
      try {
        if((value.length != 24) ) {
          throw new Error(`ID must 24 character!`)
        };
        let findBlog = await blog.findOne({
          _id: value
        });

        if(!findBlog) {
          throw new Error(`ID not found`)
        }
      } catch(e) {
        throw new Error(e)
      }
    }),
    (req, res, next)=>{
      const error = validationResult(req);
      if(!error.isEmpty()){
        return res.status(422).json({
          error: error.mapped()
        })
      }
      next();
    }
   ] 


}
