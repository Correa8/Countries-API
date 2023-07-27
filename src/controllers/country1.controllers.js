const catchError = require('../utils/catchError');
const Country1 = require('../models/Country1');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const results = await Country1.findAll({include: [User]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Country1.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Country1.findByPk(id, {include: [User]});
    if(!result) return res.sendStatus(400);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Country1.destroy({ where: {id} });
    if(!result) return res.sendStatus(400);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Country1.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(400);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}