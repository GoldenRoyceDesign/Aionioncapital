const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();

const form = require('./modals/form.modal')


const app = express();

const url = process.env.ATLAS_URL;


app.use(cors())

app.use(express.json())


// Connect to MongoDB using the connection string from the environment variable
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });



const connection = mongoose.connection;

connection.once('open',() => {
    console.log("database connected!")
})

app.post('/form', async (req, res) => {
  const { name, email, subject, message } = req.body;
  const formData = new form({ name, email, subject, message });

  try {
    await formData.save();
    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'There was an error saving the form data', error });
  }
});


// In your backend code (e.g., server.js)
app.get('/admin/users', async (req, res) => {
  try {
    const users = await User.find(); // Fetch users
    res.json(users); // Send JSON response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
});

app.get('/admin/user/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId); // Fetch specific user by ID
    if (user) {
      res.json(user); // Send JSON response
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error });
  }
});





const port = process.env.PORT || 8001;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});



