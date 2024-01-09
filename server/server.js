require('dotenv').config();  // loads environment variables from `.env` file into `process.env` object 
const express = require('express');
const { MongoClient } = require('mongodb'); 

const app = express();
const port = 3000;
const mongoURI = process.env.MONGO_URI; 
const client = new MongoClient(mongoURI); 


async function connectToMongo() {
    try {
        await client.connect(); 
        console.log("connected to mongodb"); 
    } catch (err) {
        console.error(err); 
    }
}
connectToMongo(); 




app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/mongotest', (req, res) => {

})

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});