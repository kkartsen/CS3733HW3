import express, {Router, Request, Response} from "express";
import {request, Priority, Status} from "common/src/requestType";
import serviceRequests from "../serviceRequest";

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    const requests: request[] = serviceRequests;
    res.status(200).send(JSON.stringify(requests));
});

router.post("/", async (req: Request, res: Response) => {
    const requestInfo: request = req.body;
    serviceRequests.push(requestInfo);
    res.status(200).send("request added");

});

export default router;