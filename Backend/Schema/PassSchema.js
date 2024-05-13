import mg from "mongoose";

const passSchema = new mg.Schema({
    index: Number,
    Website: String,
    Uname: String,
    password: String
})

export const pass = mg.model("Pass",passSchema)