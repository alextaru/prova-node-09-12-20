import express from "express";
import * as bodyParser from "body-parser";
import userRoutes from "../routes/user.routes";
import '../database/Connection'

const app = express();
app.use(bodyParser.json({
    limit: '50mb',
    verify(req: any, res, buf, encoding) {
        req.rawBody = buf;
    }
}));

app.use('/users', userRoutes);

export {app};