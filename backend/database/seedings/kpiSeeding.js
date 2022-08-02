const kpiSchema = require('../../models/kpiSchema')
const seedKpi = [
    {
        "name": "School fees",
        "value": 400
    },
    {
        "name": "Tuition fees",
        "value": 600
    },
    {
        "name": "Gym fees",
        "value": 100
    },
    {
        "name": "Karate class",
        "value": 600
    },
    {
        "name": "Dance classes",
        "value": 500
    },
    {
        "name": "Swimming classes",
        "value": 780
    },
    {
        "name": "Barber costs",
        "value": 140
    },
    {
        "name": "Bar and party",
        "value": 8000
    },
    {
        "name": "Friends money",
        "value": 620
    }
]

const seedDB = async () =>{
    await kpiSchema.deleteMany({})
    await kpiSchema.insertMany(seedKpi)
};

seedDB().then(() => {
    console.log("Done")
}).catch(()=>{
    console.log("Error")
})