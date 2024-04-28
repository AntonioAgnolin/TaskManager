import { Schema, model, Types } from 'mongoose';

const taskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    deadline: { type: Date, required: true },
    type: { type: String },
    category: { type: Types.ObjectId, ref: 'Category' },
    status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },
    user: { type: Types.ObjectId, ref: 'User', required: true }
}, {
    timestamps: true
})

export default model('Task', taskSchema)