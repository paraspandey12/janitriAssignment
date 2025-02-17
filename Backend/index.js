const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const patientRoutes = require('./routes/patientRoutes');
const heartRateRoutes = require('./routes/heartRateRoutes');

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI,)
.then(()=>{
   console.log("db connected succesfully")
})
.catch((error)=>{
   console.log("Error connecting to MongoDB:", error)
})


app.use('/api/users', userRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/heartRate', heartRateRoutes);


app.get("/",(req,res)=>{
    res.send("janitor")
})

const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
