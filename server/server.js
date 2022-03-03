const express = require("express");
const cors = require("cors");
const app = express();

require("./config/pets.config");
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyPetsRoutes = require("./routes/pets.routes");
AllMyPetsRoutes(app);

app.listen(8003, () => console.log("The server is all fired up on port 8003"));
