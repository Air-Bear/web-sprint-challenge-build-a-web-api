const express = require("express");
const router = express.Router();

const db = require("../data/helpers/actionModel");
const projectdb = require("../data/helpers/projectModel");

//get all actions
router.get("/", (req, res) => {
    db.get(req.body.id)
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => {
        console.log("actions get err: ", err);
        res.status(500).json(err);
    });
});

//get specific action
router.get("/:id", (req, res) => {
    const {id} = req.params;

    db.get(id)
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => {
        console.log("actions get err: ", err);
        res.status(500).json(err);
    });
});

//create a action
router.post("/", (req, res) => {

    projectdb.get(req.body.project_id)
    .then(project => {
        if(project){
            db.insert(req.body)
            .then(action => {
                res.status(201).json(action);
            })
            .catch(err => {
                console.log("action create err: ", err);
                res.status(500).json({
                    message: "error creating action"
                });
            });
        }
        else{
            res.status(404).json({
                message: "project id does not exist"
            });
        }
    });


});

//update a action
router.put("/:id", (req, res) => {
    const {id} = req.params;

    db.update(id, req.body)
    .then(action => {
        res.status(200).json(action);
    })
    .catch(err => {
        console.log("action update err: ", err);
        res.status(500).json({
            message: "error updating action"
        });
    });
});

//delete a action
router.delete("/:id", (req, res) => {
    const {id} = req.params;

    db.remove(id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        console.log("action delete err: ", err);
        res.status(500).json({
            message: "error deleting action"
        });
    });
});

module.exports = router;