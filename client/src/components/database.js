import React from "react"
 
export const Database = () => {
  return (
    <div>
        <h3>Database CRUD Operations</h3>
        <p>This is an example of connecting to a MongoDB instance with a simple API set up with Express and Node.</p>
        <p>You will need to create your own database on MongoDB Atlas and plug in the connection string before this will work locally for you. I've removed my connection string from the config.env file so that it is not committed to Github.</p>
        <p>Clicking on the MongoDB logo will take you to the tutorial I used to get this up and running quickly. Note: there is a mistake in the tutorial. As written, the update endpoint in your server will not work. I've added the code needed to this project though.</p>
        <a href="https://www.mongodb.com/languages/mern-stack-tutorial"><p>MongoDB/MERN Stack Tutorial</p></a>
    </div>
 )
}
