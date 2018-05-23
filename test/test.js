const chai = require ('chai');
var chaiHttp = require ('chai-http')

var server = require ('../app')
var Article = require ("../models/article")
var {getAllArticle} = require ("../controllers/article-controller")

var should = chai.should()
chai.use(chaiHttp)


describe('model testing',function(){
    it('coba deh',function(){
        var article = new Article()
        article.should.have.property('title')
    })
})

describe('Article',function(){
    beforeEach((done)=>{
        
        Article.remove({},(err)=>{
            done()
        })
    })
})

describe('Get all Article',()=>{
    it('get all articles',(done)=>{
        chai.request(server)
        .get('/articles')
        .end((err,res)=>{
            res.should.have.status(200)
            res.body.should.be.a('object')
        done()
        })
    })
})

describe('Post new articlee',()=>{
    it('it should bingung',(done)=>{
        let article = new Article({
            title : "aaa",
            content :"booo"
        })
        chai.request(server)
        .post('/articles/add')
        .send(article)
        .end((err,res)=>{
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('title')
            done()
        })
    })

})

describe('delete book gajalan',()=>{
    it('should delete article',(done)=>{
        let article = new Article(
            {
            title:"aaaaaaaaa",
            content:"booo"
             }
        )
        article.save((err,article)=>{
            chai.request(server)
            .delete('/articles/delete/'+article.id)
            .end((err,res)=>{
                res.should.have.status(200)
                res.body.should.be.a('object')
                done()
            })
        })
    })
})