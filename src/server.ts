import * as express from "express";
import { Application } from "express";
import * as cors from "cors";
import * as dotenv from "dotenv";
import { connect } from "mongoose";

dotenv.config();
const PORT: number = parseInt(process.env.PORT as string, 10) || 8080;
const MONGODB_URI: string = process.env.MONGODB_URI;

const app: Application = express();

//middlewares
app.use(express.json());
app.use(cors({ origin: true }));

//database
connect(
  MONGODB_URI,
  {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      return console.log("Couldn't connect to the db");
    }
    console.log("Connected to the database");
  }
);

app.listen(PORT, () => console.log("Server is running on port " + PORT));
