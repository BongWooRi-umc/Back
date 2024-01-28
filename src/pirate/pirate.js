const http = require('http');
const readline = require('readline');

function sendRequest(method, path){
    const options = {
        host: 'localhost',
        port: 3000,
        path: path,

