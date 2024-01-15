

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


function applyCors(req, res) {

    const allowedOrigins = [
        'https://jmhopkins.vercel.app',
        'https://personal-website-client-eknb82lwg-jiyaskis-projects.vercel.app/', 
        'https://personal-website-client-git-main-jiyaskis-projects.vercel.app/'
    ];


    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Allow preflight requests for all routes
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
}



module.exports = { connectToMongo, applyCors }; 