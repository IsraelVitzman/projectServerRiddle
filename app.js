import express from 'express'
import { RouterRiddles } from './router/routerRiddles.js'
import { RouterPlayer } from './router/routerPlayer.js';
import { RouterResultGame } from "./router/routerResultGame.js";

import cors from 'cors'


const PORT = process.env.PORT || 3000;
const server = express()

server.use(cors())
server.use(express.json())


server.use('/riddles', RouterRiddles())
server.use('/player', RouterPlayer())
server.use('/resultgame', RouterResultGame())

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});