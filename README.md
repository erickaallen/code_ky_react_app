## Steps to Run this Project

This project was built to demonstrate simple usage of several concepts we've discussed during Code KY Web Development 2 meetups.

- Reading data from a JSON file
- Using Promises to fetch from an external API
- Setting up an Express server to connect to a MongoDB instance
- Performing CRUD operations with a database
- React components

To run the complete project locally requires running both the client and server simultaneously in separate terminal tabs.

When the client starts, a browser tab should automatically open with the front-end. If it does not, you can enter [http://localhost:3000](http://localhost:3000) in your browser address bar.

The front-end was spun up using create-react-app. You can learn more about it here: [Create React App](https://github.com/facebook/create-react-app)

If you are not interested in interacting with DB operations, the client can be run alone.

To interact with the database, you'll need to go to MongoDB Atlas first and set up a db instance. This is quick and fairly simple. Here is a guide for creating this db instance with Atlas: [Get Started with Atlas](https://www.mongodb.com/docs/atlas/getting-started/?_ga=2.246743815.2042502303.1657395664-745055189.1656459975&_gac=1.95085934.1656593107.CjwKCAjwk_WVBhBZEiwAUHQCmbtz8QnAAjjjyRAn-N6RpEXpiXIruXkwh54gwIYNbRPkrM9A76mHahoCH7UQAvD_BwE)

You'll need to get your DB connection string and plug it into the server/config.env file. Note: The port used in the MongoDB tutorial code is 5000, but I've changed it in the project to 4000 to avoid a conflict on my machine.

If you plan to set up a database for your project and want to refer to the same tutorial to get started, it can be found here: [How to Use MERN Stack: A Complete Guide](https://www.mongodb.com/languages/mern-stack-tutorial)

### Client

From the example-react-app/, cd into client/ directory

Then enter `npm start`

### Server

In a second terminal tab, cd into server/ directory

Then enter `node server.js`
