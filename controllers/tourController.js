
const Tour = require('../models/tourModel');


const checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res
      .status(400)
      .json({ status: 'Bad Request', message: 'Missing name or price' });
  }
  next();
};
const getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    requestTime: req.requestTime,
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
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

const createTour = (req, res) => {

  // res.status(201).json({
  //   status: 'success',
  //   data: {
  //     tour:
  //   },
  // });
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
  checkBody,
};
