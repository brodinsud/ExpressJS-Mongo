const Product = require('../Models/Product');
exports.read = async (req, res) => {
    try {
        const id = req.params.id;
        const Producted = await Product.findOne({_id: id}).exec();
        res.send(Producted);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};

exports.list = async (req, res) => {
    try {

        const Producted = await Product.find({}).exec();
        res.send(Producted);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
}
exports.create = async (req, res) => {
    try {

        console.log(req.body);
        const producted = await Product(req.body).save();
        res.send(producted);


    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
}
exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const update = await Product
        .findOneAndUpdate({_id : id},req.body,{ new:true })
        .exec();

        res.send('Product Controller - update Function');
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
}
exports.remove = async (req, res) => {
    try {
        const id = req.params.id;
        const removed = await Product.findByIdAndDelete({_id : id}).exec();
        res.send('Product Controller - remove Function');
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
}
