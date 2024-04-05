import mongoose from "mongoose";

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            dbName: 'QUIRKY_ADVENTURES_DB', // Specify the database name here
        });
        console.log("DB CONNECTED");
    } catch (error) {
        console.error("DB NOT CONNECTED", error);
    }
}

export default dbConnection;