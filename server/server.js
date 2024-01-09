require('dotenv').config();  // loads environment variables from `.env` file into `process.env` object 
const express = require('express');
const { MongoClient } = require('mongodb'); 

const app = express();
const port = 3000;

const mongoURI = process.env.MONGO_URI; 
const dbName = 'personal-website'; 
const client = new MongoClient(mongoURI); 
let db; 

async function connectToMongo() {
    try {
        await client.connect(); 
        console.log("connected to database"); 
    } catch (err) {
        console.error(err); 
    }
}
connectToMongo(); 
db = client.db(dbName); 



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/projects', async (req, res) => {
    try {
        const collection = db.collection('projects'); 
        const documents = await collection.find({}).toArray(); 
        res.json(documents); 
    } catch (err) {
        res.status(500).send('Error fetching projects from database'); 
    }
})


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});