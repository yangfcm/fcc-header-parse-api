const requestIp = require("request-ip");

const whoami = (req, res) => {
  const ipaddress = requestIp.getClientIp(req);
  const language = req.get("accept-language");
  const software = req.get("user-agent");
  res.json({
    ipaddress,
    language,
    software,
  });
};

module.exports = { whoami };
