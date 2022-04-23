import mongoose from "mongoose";

const ServiceSchema = mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ServiceModel = mongoose.model("service", ServiceSchema);
export default ServiceModel;
