"use strict";

const User = require("../schema/schema");


const createData = (req, res) => {
    User.create(req.body)
        .then((data) => {
            console.log("Data received from rasp [TODO]", data);
            res.status(201).json(data);
        })
        .catch((err) => {
            if (err.name === "ValidationError") {
                console.error("Error Validating", err);
                res.status(422).json(err);
            } else {
                console.error(err);
                res.status(500).json(err);
            }
        });
};

const readDataSamuel = (req, res) => {
    User.find({ state_name: 'samuel' })
        .then((data) => {
            console.log("read")
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
};

const readDataTony = (req, res) => {
    User.find({ state_name: 'tony' })
        .then((data) => {
            console.log("read")
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
};


const updateDataByID = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {
        useFindAndModify: false,
        new: true,
    })
        .then((data) => {
            console.log(data);
            console.log(req.body);
            console.log("User updated!");
            res.status(201).json(data);
        })
        .catch((err) => {
            if (err.name === "ValidationError") {
                console.error("Error Validating!", err);
                res.status(422).json(err);
            } else {
                console.error(err);
                res.status(500).json(err);
            }
        });
};

module.exports = {
    createData,
    readDataSamuel,
    updateDataByID,
    readDataTony,
};
