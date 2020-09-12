const { eventNames } = require("./data/dbConfig");
const app = require("./server");

const port = 4000 || eventNames.port.PORT;

app.listen(port, () => {
    console.log("server is listening on port: ", port);
});
