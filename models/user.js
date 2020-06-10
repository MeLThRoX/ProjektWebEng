const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
    watchlist: { type: Array, default: [] },
    seen: { type: Array, default: [] },
})

module.exports = User = mongoose.model("user", UserSchema);