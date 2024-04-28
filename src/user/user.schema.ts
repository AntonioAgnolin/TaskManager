import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    weight: { type: Number, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true }
}, {
    timestamps: true
})

export default model('User', userSchema)