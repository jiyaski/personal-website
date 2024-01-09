require('dotenv').config();  // loads environment variables from `.env` file into `process.env` object 
const express = require('express');
const { MongoClient } = require('mongodb'); 
const cors = require('cors'); 

const app = express();
const port = 3000;


// setup ==================================================================

const allowedOrigins = ['http://localhost:5173']; 
const corsOptions = {
    origin: function(origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) { 
            callback(null, true);  // null -> no error;  true -> request should be allowed 
        } else {
            callback(new Error('Not allowed by CORS policy')); 
        }
    }
}

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


// middleware ============================================================ 

app.use(cors(corsOptions)); 


// routes ================================================================ 

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