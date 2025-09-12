import express from 'express';

import { InsertGameResult } from "../controlessResultGame/add.js";
import { GetBestGameResultByUserName } from "../controlessResultGame/getOne.js";
import { GetBestResultsForAllUsers } from "../controlessResultGame/getAll.js";
import { VerifyToken } from '../token/token.js';
const router = express.Router();

export function RouterResultGame() {

    router.post('/addresultgame',VerifyToken("user"), (req, res) => {
        InsertGameResult(req, res)
    });


    router.get('/resultBestPlayer/:name',VerifyToken("user"), (req, res) => {
        GetBestGameResultByUserName(req, res)

    });

    router.get('/resultBestAllPlayers',VerifyToken("user"), (req, res) => {
        GetBestResultsForAllUsers(req, res)

    });



    return router

}