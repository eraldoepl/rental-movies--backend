const { logger } = require("./startup/logging");
const express = require("express");
const app = express();

require("./startup/logging").winstonHandlers();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();
require("./startup/prod")(app);

const port = process.env.PORT || 3900;
const server = app.listen(port, () => logger.info(`Listening on port ${port}`));

module.exports = server;
