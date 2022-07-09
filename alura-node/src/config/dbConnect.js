import mongoose from "mongoose";

//mongoose.connect("mongodb+srv://alura:123@alura.dkjed.mongodb.net/alura-node");
mongoose.connect("mongodb+srv://alura:123@cluster0.5smmg.mongodb.net/test");

let db = mongoose.connection;

export default db;
