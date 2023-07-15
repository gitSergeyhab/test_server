import { Request, Response } from "express";
import { sequelize } from "../sequelize";

class DataController {
    getSimpleData(req: Request, res: Response) {
        const simpleData = [
            {id: 1, name: 'Dark Tranquility'},
            {id: 2, name: 'In Flames'},
            {id: 3, name: 'Noumena'},
            {id: 4, name: 'Mors Principium Est'},
        ]
        res.status(200).json(simpleData)
    }

   async getDataFromDB(req: Request, res: Response) {
        try {
            const result = await sequelize.query('SELECT id, name FROM bands;');
            res.status(200).json(result[0])
        } catch {
            return [{id: 666, name: 'The Beatles'}]
        }
    }
}


export const dataController = new DataController();