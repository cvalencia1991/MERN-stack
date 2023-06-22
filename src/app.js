import express from "express";
import indexRoutes from "./routes/index.routes";
import { engine } from "express-handlebars";
import  path from "path";
import morgan from "morgan";

const app = express();

app.set("views", path.join(__dirname, "./views"));

app.engine(
  ".hbs",
  engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),	
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");
app.use(express.static(__dirname + '/public'));

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));


// Routes
app.use(indexRoutes);

export default app;
