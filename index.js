import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js'

const app = express();
const port = 3000;

app.use( bodyParser.urlencoded({ extended: true}));
app.use( bodyParser.json());

const home = (request, response) => {
    response.send('hi there')
}
app.get('/', home);   // localhost:3000/
app.use('/users', userRoutes); // localhost:3000/users

app.listen( port, () => console.log( 'listening on port ' + port));
