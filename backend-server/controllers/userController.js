const models = require('../models');
const bcrypt = require('bcryptjs');
const token = require('../services/token');

// Public
module.exports = {
    add: async (req, res, next) => {

        try {

            let checkEmail = await models.user.findOne({ email: req.body.email });

            if (!checkEmail) {
                req.body.password = await bcrypt.hash(req.body.password, 10);
                const reg = await models.user.create(req.body);
                console.log(req.body.email)
                res.status(200).json(reg);
            } else {
                res.status(404).send({
                    message: 'El usuario ya existe!'
                })
            }

        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error interno'
            });
            next(error);
        }
    },

    list: async (req, res, next) => {

        try {

            let valorBusqueda = req.query.valor;

            const reg = await models.user.find({
                $or: [
                    { name: new RegExp(valorBusqueda, 'i') },
                    { email: new RegExp(valorBusqueda, 'i') },
                    { rol: new RegExp(valorBusqueda, 'i') }]
            })
                .sort({ createdAt: -1 });
            res.status(200).json(reg);

        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error interno'
            });
            next(error);
        }
    },

    update: async (req, res, next) => {

        try {

            let auxPassword = req.body.password;

            const regAux = await models.user.findOne(
                { email: req.body.email }
            );

            if (auxPassword !== regAux.password) {
                req.body.password = await bcrypt.hash(req.body.password, 10);
            };

            const reg = await models.user.updateOne(
                { email: req.body.email },
                {
                    name: req.body.name,
                    rol: req.body.rol,
                    password: req.body.password
                });
            res.status(200).json(reg);

        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error interno'
            });
            next(error);
        }
    },

    enabled: async (req, res, next) => {

        try {

            const reg = await models.user.findByIdAndUpdate(
                { _id: req.body._id },
                { active: 1 });
            res.status(200).json(reg);

        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error interno'
            });
            next(error);
        }
    },

    disabled: async (req, res, next) => {

        try {

            const reg = await models.user.findByIdAndUpdate(
                { _id: req.body._id },
                { active: 0 });
            res.status(200).json(reg);

        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error interno'
            });
            next(error);
        }
    },


    login: async (req, res, next) => {

        try {

            let checkUser = await models.user.findOne({
                email: req.body.email,
                active: 1
            });

            if (checkUser) {

                let match = await bcrypt.compare(req.body.password, checkUser.password);

                if (match) {
                    let tokenReturn = await token.encode(checkUser);
                    res.status(200).json({ checkUser, tokenReturn })
                } else {
                    res.status(401).send({
                        message: 'Usuario no autorizado'
                    })
                }
            } else {
                res.status(404).send({
                    message: 'Usuario no encontrado'
                })
            }

        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error interno'
            });
            next(error);
        }
    },
};
