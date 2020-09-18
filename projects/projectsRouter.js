const express = require("express");
const router = express.Router();

const db = require("../data/helpers/projectModel");

//get all projects
router.get("/", (req, res) => {
    db.get()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        console.log("projects get err: ", err);
        res.status(500).json(err);
    });
});

//get specific project
router.get("/:id", (req, res) => {
    const {id} = req.params;

    db.get(id)
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        console.log("projects get err: ", err);
        res.status(500).json(err);
    });
});

//create a project
router.post("/", (req, res) => {
    db.insert(req.body)
    .then(project => {
        res.status(201).json(project);
    })
    .catch(err => {
        console.log("project create err: ", err);
        res.status(500).json({
            message: "error creating project"
        });
    });
});

//update a project
router.put("/:id", (req, res) => {
    const {id} = req.params;

    db.update(id, req.body)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(err => {
        console.log("project update err: ", err);
        res.status(500).json({
            message: "error updating project"
        });
    });
});

//delete a project
router.delete("/:id", (req, res) => {
    const {id} = req.params;

    db.remove(id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        console.log("project delete err: ", err);
        res.status(500).json({
            message: "error deleting project"
        });
    });
});

//get actions for specific project
router.get("/:id/actions", (req, res) => {
    const {id} = req.params;

    db.getProjectActions(id)
    .then(actions => {
        res.status(200).json(actions);
    })
    .catch(err => {
        console.log("get actions err: ", err);
        res.status(500).json({
            message: "error getting actions for project"
        });
    });
});

module.exports = router;