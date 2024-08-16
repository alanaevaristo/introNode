const express = require ('express');
const cors = require ('cors');
const app = express();
const router = require ('./routes/route');

// const porta = process.env.PORT || 3333;
app.use (cors());
app.use (express.json());
app.use (router);

const porta = 3333;

app.listen(porta, () => {
    console.log ('Servidor iniciando na porta ' + porta);
    // console.log(`Servidor iniciando na porta $(porta)`);
});

app.get('/', (request, response) => {
    response.send('Hello World');
});