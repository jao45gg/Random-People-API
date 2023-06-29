import personServices from "../services/person.service";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function getPerson(req: Request, res: Response) {
    try {
        res.send(await personServices.getPerson());
    } catch(err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    }
}

const personController = {
    getPerson
}

export default personController;