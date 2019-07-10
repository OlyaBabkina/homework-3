"use strict";
exports.__esModule = true;
var csv = [
    {
        name: "ID",
        type: "ID",
        require: true,
        minvalue: 1,
        maxvalue: 4
    },
    {
        name: "Name",
        type: "string",
        require: false,
        minvalue: 1,
        maxvalue: 18
    },
    {
        name: "Surname",
        type: "string",
        require: false,
        minvalue: 1,
        maxvalue: 18
    },
    {
        name: "Mail",
        type: "Mail",
        require: false,
        minvalue: 6,
        maxvalue: 18
    },
    {
        name: "Date_of_Registration",
        type: "Date of Registration",
        require: false
    },
    {
        name: "Phone",
        type: "Phone",
        require: false,
        minvalue: 14,
        maxvalue: 16
    }
];
exports.csv = csv;
