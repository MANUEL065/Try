const express = require('express')
const mongoose = require("mongoose")
const bodyParser = require("body-paser")
const app = express();


mongoose.connect('mongodb://localhost:27017/healthcare', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const patientSchema = new mongoose.Schema({
    surname: String,
    otherNames: String,
    gender: String,
    phoneNumber: String,
    residentialAddress: String,
    emergencyContact: {
      name: String,
      phoneNumber: String,
      relationship: String,
    },
  });


  const Patient = mongoose.model('Patient', patientSchema);

  app.use(bodyParser.json());


  app.post('/patients', async (req, res) => {
    try {
      const patient = new Patient(req.body);
      await patient.save();
      res.status(201).json(patient);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  

  const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

  