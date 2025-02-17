const HeartRate = require('../models/HeartRate');
const Patient = require('../models/Patient');

const recordHeartRate = async (req, res) => {
  const { patientId, heartRate } = req.body;

  try {
    const patient = await Patient.findById(patientId);
    if (!patient) return res.status(404).json({ message: 'Patient not found' });

    const heartRateRecord = new HeartRate({ patient: patientId, heartRate });
    await heartRateRecord.save();
    patient.heartRate.push(heartRate);
    await patient.save();

    res.status(201).json(heartRateRecord);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getHeartRate = async (req, res) => {
  try {
    const heartRates = await HeartRate.find({ patient: req.params.patientId }).sort({ recordedAt: -1 });
    res.status(200).json(heartRates);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { recordHeartRate, getHeartRate };
