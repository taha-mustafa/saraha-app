import mongoose from "mongoose";

const dbConnectionFnc = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Database connected successfully`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

export default dbConnectionFnc;