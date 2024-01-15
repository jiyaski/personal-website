

require('dotenv').config();  // loads environment variables from `.env` file into `process.env` object 
const { MongoClient } = require('mongodb'); 


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// Initialize the MongoDB client outside of the function for reuse
const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
let db;

async function connectToMongo() {
    if (!db) {
        try {
            await client.connect();
            db = client.db('personal-website');
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    return db;
}

// correct usage should be:  `({ req, res }) = applyCors(req, res);` 
function applyCors(req, res) {

    const allowedOrigins = [
        'https://jmhopkins.vercel.app',
        'http://localhost:5173',
        'https://personal-website-client-git-main-jiyaskis-projects.vercel.app'
    ];

    // matches all my deployment link URLs 
    const vercelDeploymentRegex = /^https:\/\/personal-website-client-\S+-jiyaskis-projects\.vercel\.app$/;

    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin) || vercelDeploymentRegex.test(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', '*');
    }

    // Handle preflight requests for CORS
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return { req, res };
    }

    return { req, res }; 
}

module.exports = { connectToMongo, applyCors }; 