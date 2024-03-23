import mongoose, {Mongoose} from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

// creating a database connection
interface MongooseConnection{
conn: Mongoose | null;
promise: Promise<Mongoose> | null;
}

// let cache our mongodb connection
let cached: MongooseConnection = (global as any).mongoose

// check if we have a connection
if(!cached) {
    cached = (global as any).mongoose = {
        conn: null, promise: null
    }
}

// if there is no connection let's create a new one 
export const connectToDatabase =  async () => {
    if(cached.conn) return cached.conn;


if(!MONGODB_URL) throw new Error('Missing M0NGODB_URL');

cached.promise = cached.promise || mongoose.connect(MONGODB_URL, {
    dbName: 'Editifyai', bufferCommands: false
})

cached.conn = await cached.promise

return cached.conn;
}

