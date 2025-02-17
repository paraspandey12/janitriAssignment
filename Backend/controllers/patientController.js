const Patient = require('../models/Patient');

const addPatient = async (req, res) => {
  const { name, age, userId } = req.body;

  try {
    const patient = new Patient({ name, age, user: userId });
    await patient.save();
    res.status(201).json(patient);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getPatientDetails = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id).populate('user');
    if (!patient) return res.status(404).json({ message: 'Patient not found' });
    res.status(200).json(patient);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { addPatient, getPatientDetails };
