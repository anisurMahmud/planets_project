const parse = require('csv-parse');
const fs = require('fs');   //this is filesystem module to be used to read the csv file

const results = [];

fs.createReadStream('kepler_data.csv')  //here we are streaming the data from csv file
.on('data', (data) => {     //here on data 
    results.push(data);
    })
.on('error', (err)=>{
    console.log(err);
})
.on('end', ()=>{
    console.log(results);
    console.log('done');
});