import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";

import { PORT  } from "./configs/index"
import { connectDB  } from "./database/index";
import { routes  } from "./routes/index";

export class Server {
    private app: Express;

    constructor() {
        this.app = express();
        connectDB();
        this.config();
        this.middlewares();
        this.routes();
    }
    config() {
        this.app.set("port", PORT || 3000);

    }
    routes() {
        this.app.get("/", (req, res) => {
            res.status(200).json({
                ok: true
            });
        })
        this.app.use('/api/task', routes.TaskRoute);
    }

    middlewares() {
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(express.json());
    }

    listen() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server on port", this.app.get("port"));
        });


    }
}

