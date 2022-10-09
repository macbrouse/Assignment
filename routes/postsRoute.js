const route =require('express').Router()
const {createNewPost,getPosts}=require('../controllers/posts.js')

route.post('/', async (req, res) => {
    const { category, title, body } = req.body
    
    if ((!category) || (!title) || (!body)) {
      return res.status(400).send({
        error: 'Need category, title and body to create post'
      })
    }
  
    const post = await createNewPost(category, title, body)
    res.status(201).send(post)
  })

route.get('/',async (req,res)=>{
    const posts = await getPosts()
    if (!posts){
        return res.status(204).send("No posts found")
    }
    res.status(200).send(posts)
})

  module.exports={
    postsRoute:route
}