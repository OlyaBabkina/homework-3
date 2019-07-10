import { csv, records} from './tsconfig'
import {checkID, checkName, checkSurname, checkMail, checkPhone} from './checkFunctions'
const parse = require('csv-parse')
const fs = require('fs')
const correct_output = []
const incorrect_output = []
const content: string = fs.readFileSync('user_1.csv', 'utf8');

parse(content,{
  columns: true,
  trim: true,
  delimiter: ';',
  skip_empty_lines: true
})

.on('readable', function(){
    let record: records;
    let comment: string = "";
    while(record = this.read()){
        for (let key in record) {
            switch (key){
                case "ID":
                    record = checkID(record, key);
                case "Name":
                    record = checkName(record, key);
                case "Surname":
                    record = checkSurname(record, key);
                case "Mail":
                    record = checkMail(record, key);
                case 'Phone': 
                record = checkPhone(record, key);
            } 
        }
        if (record.comment == " ")
            correct_output.push(record)
        else
            incorrect_output.push(record)
    }
    
  })

  .on('end', function(){
      const correct_file = JSON.stringify(correct_output);
      fs.writeFile('./correct_file', correct_file, err =>{if (err) console.log("Error"); else console.log("Success!")})
      const incorrect_file = JSON.stringify(incorrect_output);
      fs.writeFile('./incorrect_file', incorrect_file, err =>{if (err) console.log("Error"); else console.log("Success!")})
  });
