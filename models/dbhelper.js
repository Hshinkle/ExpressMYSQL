import mysql from 'mysql'

    const getConnection = async() => {
        var conn = mysql.createConnection( {
            "host": "localhost",
            "port": "3306",
            "user": "root",
            "password": "Shinkle0619!",
            "database": "studentdb"
        });
        await conn.connect( err => {
            if (err) {
                console.log('getCOnnection: connection error: ' + err);
                return;
            }
            console.log('getConnection: connection successful');
        })
        return conn;
    }
    export const dbQueryUsers = async () => {
        var users = [];
        var conn = await getConnection();
        const resultHandler = (err, result, fields, resolve) => {
            if (err) {
                console.log('dbQueryUsers: query error');
                return;
            }
            console.log('dbQueryUsers: query sucessful');
            for (let i=0; i< result.length; i++) {
                let row = result[i];
                let user = { 'id': row['id'], 'fname': row['fname'], 'lname': row['lname'] }
                console.log( JSON.stringify(user));
                users = [...users, user];
            }
            resolve( users);
        }
        try {
            return new Promise( (resolve, reject) => {
                let sql = 'SELECT * FROM USERS';
                console.log('dbQueryUsers: sql='+sql);
                conn.query( sql, (err, result, fields) => {
                    resultHandler( err, result, fields, resolve)
                })
            })
        }
        catch (err) {
            console.log('dbQueryUsers: caught error: ' + err);
        }
        finally {
            if (conn) conn.end();
        }
        return new Promise( (resolve, reject) => {resolve([])})
    }
    export const dbQueryUser = async (id) => {
       
        var conn = await getConnection();
        const resultHandler = (err, result, fields, resolve) => {
            if (err) {
                console.log('dbQueryUsers: query error');
                return;
            }
            console.log('dbQueryUsers: query sucessful');
                
            let row = result[0];
            let user = { 'id': row['id'], 'fname': row['fname'], 'lname': row['lname'] }
            console.log( JSON.stringify(user));
               
            resolve( user);
        }
        try {
            return new Promise( (resolve, reject) => {
                let sql = 'SELECT * FROM USERS where id = ' + id;
                console.log('dbQueryUsers: sql='+sql);
                conn.query( sql, (err, result, fields) => {
                    resultHandler( err, result, fields, resolve)
                })
            })
        }
        catch (err) {
            console.log('dbQueryUsers: caught error: ' + err);
        }
        finally {
            if (conn) conn.end();
        }
        return new Promise( (resolve, reject) => {resolve([])})
    }
    export const dbInsertUser = async (user) => {
        var conn = await getConnection();
        const resultHandler = (err, result, fields, resolve) => {
            if (err) {
                console.log('dbInsertUsers: insert error');
                return;
            }
            console.log('dbInsertUsers: query sucessful');                
            resolve( 1);
        }
        try {
            return new Promise( (resolve, reject) => {
                let sql = `INSERT INTO USERS VALUES ('${user.id}', '${user.fname}', '${user.lname}' )`
                console.log('dbInsertUsers: sql='+sql);
                conn.query( sql, (err, result, fields) => {
                    resultHandler( err, result, fields, resolve)
                })
            })
        }
        catch (err) {
            console.log('dbInsertUsers: caught error: ' + err);
        }
        finally {
            if (conn) conn.end();
        }
        return new Promise( (resolve, reject) => {resolve(0)})
    }

