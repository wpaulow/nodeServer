import readlineSync = require('readline-sync');

//var recebeHtml : string ;

var produto: string;
produto = readlineSync.question('Informe o nome do produto: ');


var desc: string;
desc = readlineSync.question('Informe a descrição do produto: ');

console.log(`O produto &eacute; ${produto}`);
console.log(`A descrição &eacute; ${desc}`);

//document.getElementById('titulo').innerHTML = produto;
console.log(produto + " gsdgs" + desc);
//document.getElementById('desc').innerHTML = desc;

var pagina = `<html lang="pt-br"><head><meta charset="UTF-8"><title>.: Meu Site :.</title></head><body><h1>${produto}</h1><p>${desc}</p></body></html>`;

console.log(pagina);


