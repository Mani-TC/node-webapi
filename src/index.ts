// reference : https://developer.okta.com/blog/2018/11/15/node-express-typescript

import express from 'express';

const app = express();
const port = 8080;

app.get('/', (req,res)=>{
    res.send('hello world');
});

app.listen(port, ()=>{
    // tslint:disable-next-line:no-console
    console.log(`server started listening to port ${port}`)
});