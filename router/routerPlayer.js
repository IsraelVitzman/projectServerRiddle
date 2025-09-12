import express from 'express';

import { LoginPlayer } from "../controlessPlayer/Login.js";
import {NewPlayer} from "../controlessPlayer/newPlayer.js"
const router = express.Router();
export function RouterPlayer() {
    router.post('/login', (req, res) => {
        LoginPlayer(req, res)
    });
    router.post('/newuser', (req, res) => {
        NewPlayer(req, res)
    });


    return router

}