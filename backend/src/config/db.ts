import mongoose from "mongoose";
import { config } from "./index";

const connectDB = async () => {
    try {

        mongoose.connection.on('connected', () => {
            console.log('mongodb connection established..');
        })

        mongoose.connection.on('error', (err) => {
            console.error('Error in MongoDB', err);
        })

        await mongoose.connect(`${config.dbConnectionUrl}/auth-mern` as string)

    } catch (error) {
        // only occures on inital connect
        console.error('Connection failed with mongodb', error);
        process.exit(1);
    }
}


export default connectDB;