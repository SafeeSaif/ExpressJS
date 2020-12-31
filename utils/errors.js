exports.userAlreadyExists = (searchTerm) => {
    return {
        msg: `User [email: ${searchTerm}] already exists`  
    };
};

exports.emailInvalid = () => {
    return {
        error: {
            msg: "Email is not in standard form"
        }
    };
};