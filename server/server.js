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

app.use(express.json());


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
        console.error(err); 
        res.status(500).send('Error fetching projects from database'); 
    }
})


app.get('/blogpost', async (req, res) => {
    try {
        const collection = db.collection('blog-posts'); 
        const blogPost = await collection.findOne({urlName: req.query.urlName}); 
        res.json(blogPost); 
    } catch(err) {
        console.error(err); 
        res.status(500).send('Error fetching blog post from database'); 
    }
})


app.get('/blogposts', async (req, res) => {
    try {
        const collection = db.collection('blog-posts'); 
        const postSummaries = await collection.find({}, { projection: { _id: 0, content: 0 }}).toArray(); 
        res.json(postSummaries); 
    } catch(err) {
        console.error(err); 
        res.status(500).send('Error fetching blog post summaries from database'); 
    }
})


// admin endpoint that requires client to pass a secret key to access 
app.post('/add-project', async (req, res) => {

    const secretKey = process.env.SECRET_KEY; 
    if (req.body.secretKey !== secretKey) {
        return res.status(401).send("Unauthorized"); 
    }

    delete req.body.secretKey; 

    try {
        const collection = db.collection('projects'); 
        const result = await collection.insertOne(req.body); 
        res.status(201).send("Project successfully added to database"); 
    } catch(error) {
        console.error(`Error adding project to database: ${error}`); 
        res.status(500).send("Error adding project to database"); 
    }
})


app.post('/add-blogpost', async (req, res) => {

    const secretKey = process.env.SECRET_KEY; 
    if (req.body.secretKey !== secretKey) {
        return res.status(401).send("Unauthorized"); 
    }

    delete req.body.secretKey; 

    try {
        const collection = db.collection('blog-posts'); 
        const result = await collection.insertOne(req.body); 
        res.status(201).send("Blog post successfully added to database"); 
    } catch(error) {
        console.error(`Error adding blog post to database: ${error}`); 
        res.status(500).send("Error adding blog post to database"); 
    }
})


// start ================================================================


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});