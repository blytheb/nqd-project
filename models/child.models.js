import mongoose from 'mongoose';

const childSchema = new mongoose.Schema(
    {
        parentId: {
            type: String,
            required: true,
        },
        name:{
            type: String,
            required: true,
        },
        age: {
            type: Number
        },
        avatarUrl: {
            type: String
        },
    },
    {timestamps: true }
);

export default mongoose.model("Child", childSchema);