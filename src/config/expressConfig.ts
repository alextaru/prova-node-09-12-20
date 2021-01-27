import express from "express";
import * as bodyParser from "body-parser";
import userRoutes from "../routes/user.routes";
import authRoutes from "../routes/auth.routes";

const app = express();
app.use(bodyParser.json({
    limit: '50mb',
    verify(req: any, res, buf, encoding) {
        req.rawBody = buf;
    }
}));

app.use('/users', userRoutes);
app.use('/login', authRoutes);

export {app};