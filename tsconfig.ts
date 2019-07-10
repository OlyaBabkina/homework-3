type ID = string;
type Mail = string;
type Phone = string;

export type UserTypes = ID | Mail | Phone;

export interface ColumnDescriptor {
    name: string,
    type:  UserTypes | string,
    require: boolean;
    minvalue? : number;
    maxvalue? : number;
    }

    export interface records {
        'ID': string,
        'Name': string,
        'Surname': string,
        'Mail': string,
        'Date_of_Registration': string,
        'Phone': string
        'comment': string;
        }

let csv: ColumnDescriptor[] = [
    {
        name: "ID",
        type: "ID",
        require: true,
        minvalue : 1,
        maxvalue : 4},
    {
        name: "Name",
        type: "string",
        require: false,
        minvalue : 1,
        maxvalue : 18
    },
    {
        name: "Surname",
        type: "string",
        require: false,
        minvalue : 1,
        maxvalue : 18
    },
    {
        name: "Mail",
        type: "Mail",
        require: false,
        minvalue : 6,
        maxvalue : 18
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
        minvalue : 14,
        maxvalue : 16
    }
]

export { csv };