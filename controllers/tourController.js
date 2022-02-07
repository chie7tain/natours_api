const Tour = require('../models/tourModel');

const getAllTours = (req, res) => {
  // console.log(req.requestTime);
  // res.status(200).json({
  //   requestTime: req.requestTime,
  //   status: 'success',
  //   results: tours.length,
  //   data: {
  //     tours,
  //   },
  // });
};

const getTour = (req, res) => {
  // const id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id);
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour,
  //   },
  // });
};

const createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'fail',
      messasge: err,
    });
  }
};

const updateTour = (req, res) => {
  // const id = req.params.id * 1;
  // let tour = tours.find((el) => el.id === id);
  // tours[id] = { ...tour, ...req.body };
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tours,
  //   },
  // });
};
const deleteTour = (req, res) => {
  // const id = req.params.id * 1;
  // tours.splice(id, 1);
  // res.status(204).json({
  //   status: 'success',
  //   data: null,
  // });
};

module.exports = {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
};
