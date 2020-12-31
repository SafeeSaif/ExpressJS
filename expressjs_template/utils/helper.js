/**
 * Returns concatenated string from passed params
 * @param  {...any} endpoints 
 */
exports.concatStrings =  (...endpoints) => endpoints.join('');


exports.validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
};