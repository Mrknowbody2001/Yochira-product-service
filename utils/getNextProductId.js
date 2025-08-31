import Counter from "../model/Counter.js";

const getNextProductId = async () => {
  const counter = await Counter.findOneAndUpdate(
    { name: "product" },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  );

  return counter.seq.toString().padStart(4, "0");
};

export default getNextProductId;