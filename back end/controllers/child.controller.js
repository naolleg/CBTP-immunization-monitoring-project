const childService = require("../services/child.services");

const childcontroller = {

    getchildbymother: async (req, res) => {
        const result = await childService.getchildbymother(req.body);
        return res.status(200).json({
            success: true,
            data: result})
    },
    getchildbyid: async (req, res) => {
        const result = await childService.getchildbyid(req.body);
        return res.status(200).json({
            success: true,
            data: result})},
    getchildlastvaccination: async (req, res) => {
        const result = await childService.getchildlastvaccination(req.body);
        return res.status(200).json({
            success: true,
             data: result})},
                             
    
}
module.exports = childcontroller