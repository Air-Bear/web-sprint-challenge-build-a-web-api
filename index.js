const app = require("./server");

const port = 4000;

app.listen(port, () => {
    console.log("server is listening on port: ", port);
});
