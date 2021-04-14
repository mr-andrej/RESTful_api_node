
const WilderModel = require("../models/Wilder");

module.exports = {
  create: async (req, res) => {
    await WilderModel.init();
    const wilder = new WilderModel(req.body);
    const result = await wilder.save();
    res.json({ success: true, result });
  },
  read: async (req, res) => {
    const result = await WilderModel.find();
    res.json({ success: true, result });
  },
update: (req, res) => {
  WilderModel.updateOne({_id: req.body._id}, req.body)
  .then(wilder => {
      if (!wilder) res.json({ success: false, result: "No such wilder exists!"})
    
      res.json(wilder)
  })
    .catch(err => {
        res.json({ success: false, result: err})
    })
  },
  delete: (req, res) => {
    WilderModel.remove({ _id: req.body._id})
    .then(wilder => {
        if (!wilder) res.json({ success: false, result: "No wilder with that ID was found!"})
        res.json({ success: true, result: result })
    })
    .catch(err => res.json({success: false, result: err}))
}
};