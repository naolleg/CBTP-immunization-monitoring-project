const childService = require("../services/child.services");

const childcontroller = {

    : async (req, res) => {
        const result = await childService.(req.body);
        res.json(result);
    }
}