const KpiSchema     = require('../../models/kpiSchema')
const UserKpiSchema = require('../../models/usersKpiSchema')
const UserSchema    = require('../../models/userScehma')

async function getkpis(req,res){
    let kpis = await KpiSchema.find();
    res.json(kpis)
}

async function createKpi(req,res){
    const {name, value, kpiIds} = req.body;
    const user_id = req.user.id

    const kpi = await KpiSchema.create({name,value})
    await kpi.save()

    const userKpi = await UserKpiSchema.create({
                        name,
                        value,
                        user:user_id
                    });

    await userKpi.save();

    const userById = await UserSchema.findById(user_id);
    userById.userKpis.push(userKpi);
    await userById.save();

    kpiIds.forEach(async (elem)=>{
        const kpiById = await KpiSchema.findById(elem);
        kpiById.userKpis.push(userKpi);
        await kpiById.save();
    })

    res.json('New kpi created')
    
}


module.exports = {
    getkpis:getkpis,
    createKpi:createKpi
}
