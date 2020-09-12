const { eventNames } = require("./data/dbConfig");
const app = require("./server");

const port = 4000 || env.port.PORT;

app.listen(port, () => {
    console.log("server is listening on port: ", port);
});
