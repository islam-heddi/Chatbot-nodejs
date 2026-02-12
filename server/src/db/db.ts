import mongoose, { connect } from "mongoose";

const connectDB = () => {

    mongoose.connect(process.env.DATABASE_LINK || "").then(() => console.log(`Mongo DB establish`)).catch(err => console.log(`Mongo DB doesnt establish error: ${err}`))
}

export { connectDB }