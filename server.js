const express = require("express");
const app = express();
const distPath = "./dist/hkbp-reformanda";

app.use(express.static(distPath));
app.get("*", (req, res) => res.sendFile("index.html", { root: distPath }));
app.listen(process.env.PORT || 8080);
