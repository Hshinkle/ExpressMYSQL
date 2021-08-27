import express from 'express';
import {v4 as uuidv4} from 'uuid';
import Router from 'express-promise-router'; 
import { dbQueryUsers, dbQueryUser,dbInsertUser } from '../models/dbHelper.js';

const router = Router();

let users = [];
const queryUsers = async (request, response) => {
    users = await dbQueryUsers();
    response.json( {'data' : users})
}
const queryUser = async (request, response) => {
    let {id} = request.params
    let user = await dbQueryUser(id);
    response.json( {'data' : user})
}
const insertUser = async (request, response) => {
    const {id, fname, lname} = request.body;
    let user = {'id': id, 'fname': fname, 'lname': lname}
    let count = await dbInsertUser(user);
    response.json( {'data' : count})
}

router.get( '/', queryUsers)
router.get( '/:id', queryUser)
router.post( '/', insertUser)

export default router
