const Article = require ("../models/article")

module.exports={ 
    getAllArticle:(req,res,next)=>{
        Article.find({})
        .then(articles=>{
            res.json(articles)
        })
        .catch(err=>{
            res.send(err)
        })
    },
    
    addNewArticle:(req,res,next)=>{
        let newArticle = new Article({
            title : req.body.title,
            content : req.body.content,
            pic_url:req.body.pic_url
        })
        newArticle.save()
        .then(article=>{
            res.send(article)
        })
        .catch(err=>{
            res.send(err)
        })

    },

    deleteArticle:(req,res,next)=>{
        Article.findByIdAndRemove(req.params.id)
        .then(article=>{
            res.send("deleted")
        })
        .catch(err=>{
            res.send(err)
        })
    }
}
