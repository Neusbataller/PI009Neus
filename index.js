const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

app.set("port", process.env.PORT);

// Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Rutas
app.use(require("./routes/index"));

app.listen(app.get("port"), () => {
  console.log("hola desde el puerto: " + app.get("port"));
});
