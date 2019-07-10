"use strict";
exports.__esModule = true;
var checkFunctions_1 = require("./checkFunctions");
var parse = require('csv-parse');
var fs = require('fs');
var correct_output = [];
var incorrect_output = [];
var content = fs.readFileSync('user_1.csv', 'utf8');
parse(content, {
    columns: true,
    trim: true,
    delimiter: ';',
    skip_empty_lines: true
})
    .on('readable', function () {
    var record;
    var comment = "";
    while (record = this.read()) {
        for (var key in record) {
            switch (key) {
                case "ID":
                    record = checkFunctions_1.checkID(record, key);
                case "Name":
                    record = checkFunctions_1.checkName(record, key);
                case "Surname":
                    record = checkFunctions_1.checkSurname(record, key);
                case "Mail":
                    record = checkFunctions_1.checkMail(record, key);
                case 'Phone':
                    record = checkFunctions_1.checkPhone(record, key);
            }
        }
        if (record.comment == " ")
            correct_output.push(record);
        else
            incorrect_output.push(record);
    }
})
    .on('end', function () {
    var correct_file = JSON.stringify(correct_output);
    fs.writeFile('./correct_file', correct_file, function (err) { if (err)
        console.log("Error");
    else
        console.log("Success!"); });
    var incorrect_file = JSON.stringify(incorrect_output);
    fs.writeFile('./incorrect_file', incorrect_file, function (err) { if (err)
        console.log("Error");
    else
        console.log("Success!"); });
});
