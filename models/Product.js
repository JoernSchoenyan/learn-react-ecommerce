import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 60
    },
    desc: {
        type: String,
        required: true,
        maxLength: 600
    },
    prices: {
        type:[Number],
        required: true
    },
    slug: {
        type: String,
        required: true,
        maxLength: 60,
        unique: true
    },
    extraOptions: {
        type: [
            {
                text: { type: String, required: true },
                price: { type: Number, required: true }
            }
        ]
    }
});

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);