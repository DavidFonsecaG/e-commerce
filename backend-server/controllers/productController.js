const models = require('../models'); //este es el index de carpeta 'models'

module.exports = {
    //Add product
    add: async (req, res, next) => {

        try {

            const checkId = await models.product.findOne({ id: req.body.id });

            if (!checkId) {
                const reg = await models.product.create(req.body);
                res.status(200).json(reg);
            } else res.status(400).send("Product ya existe")

        } catch (error) {
            res.status(500).send({
                message: "Ocurrio un error interno."
            });
            next(error);
        }
    },

    //List product
    list: async (req, res, next) => {

        try {

            let searchValue = req.query.value;

            const reg = await models.product.find({
                $or: [
                    { name: new RegExp(searchValue, 'i') }
                ]
            }).populate('categorie', {
                name: 1, shortDescription: 1, status: 1
            }).sort({ createedAt: -1 });
            res.status(200).json(reg);

        } catch (error) {
            res.status(500).send({
                message: "Ocurrio un error interno."
            });
            next(error);
        }
    },

    // List method for active product
    listActives: async (req, res, next) => {

        try {

            const reg = await models.product.find({ active: true }
            ).sort({ date: -1 });
            res.status(200).json(reg);

        } catch (error) {
            res.status(500).send({
                message: "ocurrio un error interno"
            });
            next(error);
        }
    },

    //Update product
    update: async (req, res, next) => {

        try {

            const checkId = await models.product.findOne({ id: req.body.id });

            if (!checkId) {
                const update = await models.product.updateOne({ _id: req.body._id }, {
                    id: req.body.id,
                    name: req.body.name,
                    shortDescription: req.body.shortDescription,
                    description: req.body.description,
                    price: req.body.price,
                    inventory: req.body.inventory,
                    active: req.body.active
                })
                res.status(200).json(update)
            } else {
                const update = await models.product.updateOne({ _id: req.body._id }, {
                    name: req.body.name,
                    shortDescription: req.body.shortDescription,
                    description: req.body.description,
                    price: req.body.price,
                    inventory: req.body.inventory,
                    active: req.body.active
                })
                res.status(200).json(update)
            }

        } catch (error) {
            res.status(500).send({
                message: "Ocurrio un error interno."
            });
            next(error);
        }
    },

    // Activate product method
    activate: async (req, res, next) => {

        try {
            const reg = await models.product.findByIdAndUpdate({ _id: req.body._id }, { active: true })
            res.status(200).json(reg)

        } catch (error) {
            res.status(500).send({
                message: "ocurrio un error interno"
            });
            next(error);
        }
    },

    // Deactivate product method
    deactivate: async (req, res, next) => {

        try {

            const reg = await models.product.findByIdAndUpdate({ _id: req.body._id }, { active: false })
            res.status(200).json(reg)

        } catch (error) {
            res.status(500).send({
                message: "ocurrio un error interno"
            });
            next(error);
        }
    },

    // Delete product
    delete: async (req, res, next) => {

        try {

            const reg = await models.product.findByIdAndDelete({ _id: req.body._id })
            res.status(200).json(reg)

        } catch (error) {
            res.status(500).send({
                message: "Ocurrio un error interno."
            });
            next(error);
        }
    },
}