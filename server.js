const express = require("express");
const app = express();
const helmet = require("helmet");

const projectsRouter = require("./projects/projectsRouter");
const actionsRouter = require("./actions/actionsRouter");

app.use(express.json());
app.use(helmet())

app.use("/api/projects", projectsRouter);
app.use("/api/actions", actionsRouter);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "server online"
    });
});

module.exports = app;