"use strict";
exports.__esModule = true;
var tsconfig_1 = require("./tsconfig");
function checkID(record, key) {
    var a = tsconfig_1.csv.filter(function (b) { return b.type === key; });
    var b = a[0];
    if (b.require == true && record.ID === "")
        record.comment += "this label ID is required!";
    if (record.ID.length < b.minvalue)
        record.comment = "length of this label ID is lower then required ";
    else if (record.ID.length > b.maxvalue)
        record.comment = "length of this label ID is higher then required maxvalue ";
    else
        record.comment = "";
    return record;
}
exports.checkID = checkID;
function checkName(record, key) {
    var a = tsconfig_1.csv.filter(function (b) { return b.name === key; });
    var b = a[0];
    if (b.require == true && record.Name === "")
        record.comment += "this label Name is required! ";
    if (record.Name.length < b.minvalue)
        record.comment += "length of this label Name is lower then required";
    if (record.Name.length > b.maxvalue)
        record.comment += 'length of this label Name is higher then required maxvalue';
    return record;
}
exports.checkName = checkName;
function checkSurname(record, key) {
    var a = tsconfig_1.csv.filter(function (b) { return b.name === key; });
    var b = a[0];
    if (b.require == true && record.Surname === "")
        record.comment += "this label Surname is required! ";
    if (record.Surname.length < b.minvalue)
        record.comment += "length of this label Surname is lower then required ";
    if (record.Surname.length > b.maxvalue)
        record.comment += "length of this label Surname is higher then required ";
    return record;
}
exports.checkSurname = checkSurname;
function checkMail(record, key) {
    var a = tsconfig_1.csv.filter(function (b) { return b.name === key; });
    var b = a[0];
    if (b.require == true && record.Mail === "")
        record.comment += "this label Mail is required! ";
    if (record.Mail.length < b.minvalue)
        record.comment += "length of this label Mail is lower then required ";
    if (record.Mail.length > b.maxvalue)
        record.comment += "length of this label Mail is higher then required ";
    return record;
}
exports.checkMail = checkMail;
function checkPhone(record, key) {
    var a = tsconfig_1.csv.filter(function (b) { return b.name === key; });
    var b = a[0];
    if (b.require == true && record.Phone === "")
        record.comment += "this label Phone is required! ";
    if (record.Phone.length < b.minvalue)
        record.comment += "length of this label Phone is lower then required ";
    if (record.Phone.length > b.maxvalue)
        record.comment += "length of this label Phone is higher then required ";
    return record;
}
exports.checkPhone = checkPhone;
