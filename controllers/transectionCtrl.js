const transectionModel = require("../models/transectionModel");
const moment = require("moment");

// get controller
const getAllTransection = async (req, res) => {
  try {
    const { frequency, selectedDate, type } = req.body;
    const transections = await transectionModel.find({
      ...(frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: selectedDate[0],
              $lte: selectedDate[1],
            },
          }),
      userid: req.body.userid,
      ...(type !== "all" && { type }),
    });
    res.status(200).json(transections);
  } catch (error) {
    console.log(error);
    res.status(500).json(erorr);
  }
};


// edit controller
const editTransection = async(req,res) => {

  try {

    // writing query in mongo db 
    await transectionModel.findOneAndUpdate({_id:req.body.transacationId},req.body.payload);
    res.status(200).send('Edit Successfully');
    
  } catch (error) {

    console.log(error);
    res.status(500).json(error)
    
  }

}


// add transaction controller 
const addTransection = async (req, res) => {
  try {
    // const newTransection = new transectionModel(req.body);
    const newTransection = new transectionModel(req.body);
    await newTransection.save();
    res.status(201).send("Transection Created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { getAllTransection, addTransection , editTransection };