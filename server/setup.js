

require('dotenv').config();  // loads environment variables from `.env` file into `process.env` object 
const { MongoClient } = require('mongodb'); 


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// Initialize the MongoDB client outside of the function for reuse
const client = new MongoClient(process.env.MONGO_URI);
let db;

async function connectToMongo() {
    if (!db) {
        try {
            await client.connect();
            db = client.db('personal-website');
            console.log('connected to database'); 
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    return db;
}



function applyCors(req, res) {

    console.log('inside applyCors()'); 

    const prodOrigins = ['https://jmhopkins.vercel.app', 'https://personal-website-client-git-main-jiyaskis-projects.vercel.app']; 
    const localOrigins = ['http://localhost:5173', 'https://localhost:5173']; 
    const allowedOrigins = (process.env.NODE_ENV === 'local') ? localOrigins : prodOrigins; 

    console.log(`allowed origins: ${allowedOrigins}`); 

    // matches all my deployment link URLs 
    const vercelDeploymentRegex = /^https:\/\/personal-website-client-\S+-jiyaskis-projects\.vercel\.app$/;

    const origin = req.headers['Origin'.toLowerCase()];
    
    console.log(`origin: ${origin}`); 

    if (allowedOrigins.includes(origin) || vercelDeploymentRegex.test(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin); 
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', '*');
        console.log('origin was in allowed origins'); 
    }

    // Handle preflight requests for CORS
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        console.log('this was an OPTIONS request'); 
        return;
    }

    return; 
}

module.exports = { connectToMongo, applyCors }; 