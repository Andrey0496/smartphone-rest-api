import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  logo_img: { type: String, required: false },
  website: { type: String, required: false },
}, { timestamps: true })

export default mongoose.model('Manufacturer', schema);
