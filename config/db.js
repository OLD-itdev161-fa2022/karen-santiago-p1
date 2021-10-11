import mongoose from 'mongoose'; //mongoDB handler
import config from 'config'; //nmp package

//Get the connection string
//Gets the mongoURI we created in 'default.json' file
const db = config.get('mongoURI');

//Connect to MongoDB
const connectDatabase = async () => {
    try {
        await mongoose.connect(db, {
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error.message);

        //Exit with failure code
        process.exit(1);
    }
};

export default connectDatabase;