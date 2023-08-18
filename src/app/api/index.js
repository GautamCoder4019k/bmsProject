// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

const uri = "mongodb+srv://trial1:123456.@cluster0.nxjxv4k.mongodb.net/?retryWrites=true&w=majority";
app.use(bodyParser.json());

// Connect to MongoDB Atlas (replace 'your-mongodb-uri' with your actual connection string)
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


// Define a mongoose schema and model
const UserSchema = new mongoose.Schema({
    profile: {
        name: {
          type: String,
          required: true,
        },
        contact: {
          type: Number,
          required: true,
        },
        email: {
          type: String,
          required: true,
          unique: true,
          // You can add validation for email format here
        },
        donations: {// number of donations made
            type: Number,
            required: true,
      },
    donations: [{type:String}],//array of donations made
    donationBox:{
        type: {
            type: String,
            required: true,
        },
    },
},
    Notifications: [{type:String}],//array of notifications

      
    
});
const User = mongoose.model('User', UserSchema);

// API endpoint to handle form submission
app.post('/api/donate', async (req, res) => {
  try {
    const { profile } = req.body;
    const user = new User({ 
        profile:{
        name: profile.name,
        contact: profile.contact,
        email: profile.email,
        donations: 0,
        },
        donationBox:[],
        Notifications:[],
    });
    console.log('Saving user:', user);
    await user.save();


    res.status(201).json({ message: 'Donation stored successfully' });
  } catch (error) {
    console.error('Error saving donation:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

