const Patient = require("../schema/schema");

module.exports = {
  home: (req, res) => {
    console.log('Inside home route');
    res.status(200).json({
      message: 'Hello from the get patient route12'
    });
  },
  search1: (req, res) => {
    console.log('Inside home route,  got it');
    res.status(200).json({
      message: 'searching'
    });
  },
  sign_up: async (req, res) => {
    console.log('okkkkk'); // Ensure this is being reached
    const { name, email, password } = req.body;
  
    try {
      const newPatient = await Patient.create({ name, email, password });
  
      if (newPatient) {
        return res.status(200).json('Person added');
      } else {
        return res.status(400).json('Could not be added');
      }
    } catch (error) {
      console.error('Error while signing up:', error);  // Print the full error details
      return res.status(500).json({ message: 'Error while signing up', error: error.message });
    }
  },
  
};
