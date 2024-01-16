

const { connectToMongo, applyCors } = require('../setup'); 

module.exports = async (req, res) => {

    applyCors(req, res);

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