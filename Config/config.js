import morgan from "morgan";
import * as dotenv from "dotenv";
dotenv.config();

const logger = morgan("combined");

const mongoUrl = process.env.MONGO_URL;

// mongodb+srv://wildbadger:jkhinpiqosq@clusterbankapp.pn7rge3.mongodb.net/?retryWrites=true&w=majority;

// const mongoUrl = `mongodb+srv://${process.env.DB_userName}:${process.env.DB_password}@academy.ilmon77.mongodb.net/${process.env.DB_name}?retryWrites=true&w=majority`;

// ("mongodb+srv://wildbadger:jkhinpiqosq@clusterbankapp.pn7rge3.mongodb.net/?retryWrites=true&w=majority");

// MONGO_URL = mongodb://learnplusplus_admin:oCmxyOOjm@103.180.120.237:27017/learnplusplus_data

export { logger, mongoUrl };
