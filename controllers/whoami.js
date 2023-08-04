const whoami = (req, res) => {
  const ip = req.ip || req.connection.remoteAddress;
  const language = req.get("accept-language");
  const software = req.get("user-agent");
  res.json({
    ip,
    language,
    software,
  });
};

module.exports = { whoami };
