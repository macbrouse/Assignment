# Assignment

Run the file server.js using the following commands

``node server.js``

The assignmentdb.db file is the database file for sqlite db

- Hit the `localhost:3000/posts` with `POST` method along with title, body and category to insert a new Post
- Hit the `localhost:3000/posts` with `GET` method to get the list of all the posts

- Hit the `localhost:3000/api/:id` with `GET` method where `:id` is the id of the post to get an array of all the words in the post body 
starting letter a or A as API response and Replace the last 3 letters of all the words starting with letter a or A with * in the post
body in the db



