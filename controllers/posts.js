const {posts}=require('../db/model.js')

async function createNewPost(category, title, body) {
    const post = await posts.create({
      title,
      body,
      category
    })
  
    return post
}

async function getPosts() {
    const post = await posts.findAll()
    return post
}

async function findPost(query) {
    const post = await posts.findAll({
        where: {
          id: query
        }
      })
    return post
}

module.exports={createNewPost,getPosts,findPost}