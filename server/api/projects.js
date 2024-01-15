

const { connectToMongo, applyCors } = require('../setup'); // Adjust the path as necessary

module.exports = async (req, res) => {

    console.log('inside projects.js fn'); 

    ({ req, res }) = applyCors(req, res);

    // Only proceed for GET requests
    if (req.method !== 'GET') {
        res.setHeader('Allow', 'GET');
        res.status(405).end('Method Not Allowed');
        return;
    }

    try {
        const db = await connectToMongo();
        const collection = db.collection('projects');
        const documents = await collection.find({}).toArray();
        res.status(200).json(documents);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching projects from database');
    }
};