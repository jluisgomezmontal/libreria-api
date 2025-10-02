import ComponentTrack from "../models/ComponentTrack.js";
import { createObjectCsvWriter } from "csv-writer";

export const trackComponent = async (req, res) => {
  try {
    const track = await ComponentTrack.create(req.body);
    res.status(201).json(track);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getStats = async (req, res) => {
  try {
    const stats = await ComponentTrack.aggregate([
      {
        $group: {
          _id: { name: "$name", variant: "$variant" },
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          name: "$_id.name",
          variant: "$_id.variant",
          count: 1
        }
      }
    ]);

    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const exportCSV = async (req, res) => {
  try {
    const data = await ComponentTrack.find().lean();
    const csvWriter = createObjectCsvWriter({
      path: "components.csv",
      header: Object.keys(data[0] || {}).map(key => ({ id: key, title: key }))
    });
    await csvWriter.writeRecords(data);
    res.download("components.csv");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const healthCheck = (req, res) => {
  res.json({ status: "ok", timestamp: new Date() });
};
