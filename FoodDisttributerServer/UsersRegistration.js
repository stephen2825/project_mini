import mongoose, { Schema } from "mongoose";

const newUserSchema = new Schema({
    name: String,
    phoneNumber: Number,
    email: String,
    add: String,
    pinCode: Number,
    purchases: [
        {
            totalPrice: Number,
            totalQuantity: Number,
            timestamp: { type: Date, default: Date.now }
        }
    ]
});

export const userdb = mongoose.model("newRegisteration", newUserSchema);
