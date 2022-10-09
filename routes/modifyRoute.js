const route =require('express').Router()
const {findPost}=require('../controllers/posts.js')
const { posts } = require('../db/model.js')

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

route.get('/:id',async (req,res)=>{
    const posts = await findPost(req.params.id)
    if (!posts){
        return res.status(204).send("No posts found")
    }
    res.status(200).send(wordsWitha(posts[0].body,req))
})

async function updatePost(query,postbody){
    const post=await posts.update({ 
        body:  postbody
    }, {
        where: {
            id:query
            }
        });
}

function wordsWitha(text,req){
    var inputArray = text.split(" ");
    var outputArray =[]
    

    for(i=0; i < inputArray.length; i++){
      if(inputArray[i].charAt(0) === 'a'||inputArray[i].charAt(0)==='A'){
            outputArray.push(inputArray[i])
            inputArray[i]=inputArray[i].replaceAt((inputArray[i].length)-1,'*')
            inputArray[i]=inputArray[i].replaceAt((inputArray[i].length)-2,'*')
            inputArray[i]=inputArray[i].replaceAt((inputArray[i].length)-3,'*')
      } 
    }
    console.log(inputArray)
    updatePost(req.params.id,inputArray.join(' '))
    return outputArray
  }



  module.exports={
    modifyRoute:route
}