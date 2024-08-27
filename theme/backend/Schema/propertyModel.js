import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema(
  { 
    Suburb: {
      type: String,
      required: true
    },
    Rooms: {
      type: Number,
      required: true
    },
    Type: {
      type: String,
      enum: ['h', 'u'],  
      required: true
    },
    Price: {
      type: Number,
      required: true
    },
    Method: {
      type: String,
      enum: ['S', 'SP'], 
      required: true
    },
    Date: {
      type: Date,
      required: true
    },
    Distance: {
      type: Number,
      required: true
    },
    Postcode: {
      type: Number,
      required: true
    },
    Bedroom2: {
      type: Number,
      required: true
    },
    Bathroom: {
      type: Number,
      required: true
    },
    Car: {
      type: Number,
      required: true
    },
    Landsize: {
      type: Number,
      required: true
    },
    BuildingArea: {
      type: Number,
      default: null
    },
    YearBuilt: {
      type: Number,
      default: null
    },
    CouncilArea: {
      type: String,
      required: true
    },
    Regionname: {
      type: String,
      required: true
    }
  },
  { 
    timestamps: true,
  }
);

const Property = mongoose.model('Property', propertySchema);
export default Property;