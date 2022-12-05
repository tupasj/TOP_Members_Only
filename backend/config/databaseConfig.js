const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        console.log('Connecting to database...');
        const connnectionResponse = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${connnectionResponse.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectToDatabase;
