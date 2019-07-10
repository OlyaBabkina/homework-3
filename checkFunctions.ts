import { csv, records, ColumnDescriptor} from './tsconfig'

export function checkID(record: records, key: string):records{
    let a: ColumnDescriptor[] = csv.filter(b => b.type === key);
    let b: ColumnDescriptor = a[0];
    if (b.require == true && record.ID === "")
        record.comment += "this label ID is required!";
    if(record.ID.length < b.minvalue)  
        record.comment = "length of this label ID is lower then required ";
    else if (record.ID.length > b.maxvalue)
        record.comment = "length of this label ID is higher then required maxvalue ";
    else
        record.comment = "";
    return record;
}

export function checkName(record: records, key: string):records{
    let a: ColumnDescriptor[] = csv.filter(b => b.name === key);
    let b: ColumnDescriptor = a[0];
    if (b.require == true && record.Name === "")
        record.comment += "this label Name is required! "
    if(record.Name.length < b.minvalue) 
        record.comment+= "length of this label Name is lower then required";
    if (record.Name.length > b.maxvalue)
        record.comment+= 'length of this label Name is higher then required maxvalue';
    return record;
}

export function checkSurname(record: records, key: string):records{
    let a = csv.filter(b => b.name === key);
    let b = a[0];
    if (b.require == true && record.Surname === "")
        record.comment += "this label Surname is required! "
    if(record.Surname.length < b.minvalue)
        record.comment+= "length of this label Surname is lower then required "
    if(record.Surname.length > b.maxvalue)
        record.comment+= "length of this label Surname is higher then required "
    return record;
}

export function checkMail(record: records, key: string):records{
    let a = csv.filter(b => b.name === key);
    let b = a[0];
    if (b.require == true && record.Mail === "")
        record.comment += "this label Mail is required! "
    if(record.Mail.length < b.minvalue)
        record.comment+= "length of this label Mail is lower then required "
    if(record.Mail.length > b.maxvalue)
        record.comment+= "length of this label Mail is higher then required "
    return record;
}

export function checkPhone(record: records, key: string):records{
    let a = csv.filter(b => b.name === key);
    let b = a[0];
    if (b.require == true && record.Phone === "")
        record.comment += "this label Phone is required! "
    if(record.Phone.length < b.minvalue)
        record.comment+= "length of this label Phone is lower then required "
    if(record.Phone.length > b.maxvalue)
        record.comment+= "length of this label Phone is higher then required "
    return record;
}