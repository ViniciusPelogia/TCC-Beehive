import mongoose, { mongo } from "mongoose";

async function conectaNoBanco(){
    await mongoose.connect(process.env.DB_CONNECTION)

    return mongoose.connection;
}

export default conectaNoBanco;