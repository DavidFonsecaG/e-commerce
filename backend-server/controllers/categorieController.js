const models = require('../models'); //este es el indez de carpeta 'models'

module.exports = {
    add: async (req, res, next) => {

        try {

            const checkName = await models.categorie.findOne({ name: req.body.name });

            if (!checkName) {
                const reg = await models.categorie.create(req.body);
                res.status(200).json(reg);
            } else res.status(400).send("Categorie ya existe")

        } catch (error) {
            res.status(500).send({
                message: "ocurrio un error interno"
            });
            next(error);
        }
    },

    // List method
    list: async (req, res, next) => {

        try {

            let searchValue = req.query.value;

            const reg = await models.categorie.find({
                $or: [
                    { name: new RegExp(searchValue, 'i') }]
            })
                .sort({ date: -1 });
            res.status(200).json(reg);

        } catch (error) {
            res.status(500).send({
                message: "ocurrio un error interno"
            });
            next(error);
        }
    },

    // List method for active categories
    listActives: async (req, res, next) => {

        try {

            const reg = await models.categorie.find({ status: true }
            ).sort({ date: -1 });
            res.status(200).json(reg);

        } catch (error) {
            res.status(500).send({
                message: "ocurrio un error interno"
            });
            next(error);
        }
    },

    // Update method
    update: async (req, res, next) => {

        try {
            const checkName = await models.categorie.findOne({ name: req.body.name });

            if (!checkName) {
                const update = await models.categorie.updateOne({ _id: req.body._id }, {
                    name: req.body.name,
                    description: req.body.description,
                })
                res.status(200).json(update)
            } else {
                const update = await models.categorie.updateOne({ _id: req.body._id }, {
                    description: req.body.description,
                })
                res.status(200).json(update)
            }

        } catch (error) {
            res.status(500).send({
                message: "ocurrio un error interno"
            });
            next(error);
        }
    },

    // Activate categorie method
    activate: async (req, res, next) => {

        try {
            const reg = await models.categorie.findByIdAndUpdate({ _id: req.body._id }, { status: true })
            res.status(200).json(reg)

        } catch (error) {
            res.status(500).send({
                message: "ocurrio un error interno"
            });
            next(error);
        }
    },

    // Deactivate categorie method
    deactivate: async (req, res, next) => {

        try {

            const reg = await models.categorie.findByIdAndUpdate({ _id: req.body._id }, { status: false })
            res.status(200).json(reg)

        } catch (error) {
            res.status(500).send({
                message: "ocurrio un error interno"
            });
            next(error);
        }
    },

    // Delete Method
    delete: async (req,res,next) => {

        try {

            const reg = await models.categorie.deleteOne({ _id: req.body._id })
            res.status(200).json(reg)

        } catch (error) {
            res.status(500).send({
                message: "ocurrio un error interno"  
            });
            next(error);
        }
    },
}