const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors());
app.use(express.json());

// Establish connection to MongoDB Atlas
const uri = 'mongodb+srv://namburi:rakesh@cluster0.1sj5w0r.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas");

        const database = client.db('councellingSystem'); // Corrected database name
        const collection = database.collection('register');
        
        // Insert sample document on startup
        await collection.insertOne({ 'student': '8080' });
        
        // Route for inserting data
        app.post('/register', async (req, res) => {
            try {
                const result = await collection.insertOne(req.body);
                console.log("Data inserted successfully:", req.body);
                res.send("Data inserted successfully");
            } catch (error) {
                console.error("Error inserting data:", error);
                res.status(500).send("Error inserting data");
            }
        });
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas:", error);
    }
}

// Route for homepage
app.get('/', (req, res) => {
    res.send('<h1>Ore babu jai Balayya ra </h1>');
});

// Route for contact page
app.get('/contact', (req, res) => {
    res.send('<h1>This is about CBN  </h1>');
});

// Start the server after connecting to the database
connectToDatabase().then(() => {
    app.listen(8080, () => {
        console.log('Express server is running on port 8080');
    });
}).catch(error => {
    console.error("Error starting server:", error);
});
