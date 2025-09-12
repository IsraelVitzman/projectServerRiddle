import express from 'express';
import { Read } from "../controlessRiddles/read.js";
import { Add } from "../controlessRiddles/add.js";
import { Update } from "../controlessRiddles/update.js";
import { Delete } from "../controlessRiddles/dalete.js";
import { VerifyToken } from '../token/token.js';
const router = express.Router();

export function RouterRiddles() {
  router.post('/addRiddle',VerifyToken('admin'), (req, res) => {
    
    Add(req, res);

  });

  router.delete('/deleteRiddle/:id',VerifyToken('admin'), (req, res) => {
    Delete(req, res);

  });

  router.put('/updateRiddle/:id',VerifyToken('admin'), (req, res) => {
    Update(req, res);

  });

  router.get('/getAllRiddles', (req, res) => {
    Read(req, res);

  });
 
  return router

}

