
exports.function1 = async (req, res) => {
    const datain = req.query; //or req.body etc

    // do something
    
    
    return res.status(200).send('Success!');
}