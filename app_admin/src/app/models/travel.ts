export interface Travel {
    _id: string, // internal primary key in MongoDB
    code: string,
    name: string,
    length: string,
    start: Date,
    resort: string,
    perPerson: string,
    image: string,
    description: string   
}