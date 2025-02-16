import mongoose from "mongoose";


const reviewSchema = new mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'

  },
name: { type: String, required: true },
rating: { type: Number, required: true },
comment: { type: String, required: true },

},{
  timestamps: true,
}
);

const houseSchema = new mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'

  },
  name: { type: String, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  area: { type: String, required: true },
  availableFrom: { type: Date, required: true },

  
  description: { type: String, required: true },
  available: { type: Boolean, required: true, default: true },
  price: { type: Number, required: true, default: 0 },
  
  rating: { type: Number, required: true , default: 0},
  numReviews: { type: Number, required: true , default: 0},
  reviews: [reviewSchema],


},{
  timestamps: true
});

const House = mongoose.model('Product', houseSchema);

export default House;
