import React from 'react';
import * as SQLite from "expo-sqlite";
import connect, {sql} from '@databases/expo';


let isDatabaseInstantiated = false;
const db = connect('app-database');

const clearDatabase = async function(){
    await db.query(sql`
        Delete from users
    `)
}

const initDatabase = async function(){
    await db.query(sql`DROP TABLE users;`);
    await db.query(sql`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            firstName varchar(255),
            lastName varchar(255)
        );
    `)
    await db.query(sql`
        INSERT INTO users (firstName, lastName)
        VALUES ('Benjamin', 'Commet');
    `)
}

const open = async function(){
    let isInitializedResult = await db.query(sql`
        SELECT count(*) AS initialized FROM sqlite_master WHERE type='table' AND name='users';"
    `)
    console.log(isInitializedResult);
}

const query = async function(sqlString){
    if(!isDatabaseInstantiated){
        let isInitializedResult = await db.query(sql`
            SELECT count(*) AS initialized FROM sqlite_master WHERE type='table' AND name='users';"
        `);
        console.log("ressy")
        console.log(isInitializedResult[0].initialized);
        const resetDatabase = false;
        if(resetDatabase){
            await clearDatabase();
        }
        if(resetDatabase || !isInitializedResult[0].initialized){
            await initDatabase();
            isDatabaseInstantiated = true;
        }
    }
    let res = await db.query(sql`select * from users`);
    return res;
}

const insertUser = async function(user){

}

const getUser = async function(user){
    console.log('getUser');
    let res = await query('select * from users');
    return res[0];
}

export const Database = {
    insertUser,
    getUser,
}

export interface DatabaseType {
    insertUser: Function,
    getUser: Function,
}