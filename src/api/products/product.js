import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  manufacturer: [{ type: Schema.Types.ObjectId, ref: 'Manufacturer' }],
  img: { type: String, required: true },
}, { timestamps: true })

export default mongoose.model('Product', schema);
