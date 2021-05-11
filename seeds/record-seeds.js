
const { Record } = require('../models');

const recordData = [
    {
        artist_id: 1,
        title: "Yeah Man",
        format: ["LP"],
        year: "1977",
        barcode: ["123456789"],
        country: "USA",
        thumb: ""
    },
    {
        artist_id: 2,
        title: "Yeah Bro",
        format: ["LP"],
        year: "1979",
        barcode: ["23456789"],
        country: "USA",
        thumb: ""

    },
    {
        artist_id: 3,
        title: "Yeah Bruh",
        format: ["LP"],
        year: "1980",
        barcode: ["3456789"],
        country: "USA",
        thumb: ""


    
    }


]

const seedRecord = ()=> Record.bulkCreate(recordData);

module.exports = seedRecord