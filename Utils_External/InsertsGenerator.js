//npm install csv2sql-stream
var fs = require('fs');
//var csv2sql = require('csv2sql-stream');
//csv2sql.transform("ubicaciones", fs.createReadStream('./ubicaciones.csv')).pipe(process.stdout);
var csv2sql = require('csv2sql-stream');
csv2sql.transform("ubicaciones",fs.createReadStream('./ubicaciones.csv'))
.on('data',function(sql){
    console.log(sql); //INSERT INTO ubicaciones ...
})
.on('end',function(rows){
    console.log(rows); // 5 - Num of rows handled, including header
})
.on('error', function(error){
    console.error(error); //Handle error
})