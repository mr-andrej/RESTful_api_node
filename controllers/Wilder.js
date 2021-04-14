
const WilderModel = require("../models/Wilder");

module.exports = {
  create: async (req, res) => {
    try {
      await WilderModel.init();
      const wilder = new WilderModel(req.body);
      const result = await wilder.save();
      res.json({ success: true, result });
    } catch (err) {
      res.json({ success: false, result: err });
    }
  },
  retrieve: (req, res) => {
    WilderModel.find()
    .then(wilder => {
        if (!wilder) res.json({ success: false, result: "No wilders found!"})

        res.json({ success: true, result: result})
    })
    .catch(err => {
        res.json({ success: false, result: "Something went wrong"})
    })
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