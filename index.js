const service = require("./service");

const config = {
  basicAuth: null,
};

const logger = console;

// Create an express app instance
var express_app = service.init(config);

// Expose at env.port or default port:3000
const server = express_app.listen(process.env.PORT || 3000);

module.exports = server;
