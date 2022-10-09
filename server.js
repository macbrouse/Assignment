const express=require('express')
const { db } = require('./db/model')
const {postsRoute}=require('./routes/postsRoute')
const {modifyRoute}=require('./routes/modifyRoute')

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/posts',postsRoute)
app.use('/api',modifyRoute)

db.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server has started')
    })
  })
  .catch((err) => {
    console.error(new Error('Could not start database'))
    console.error(err)
  })
