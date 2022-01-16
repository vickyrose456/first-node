const message = "hello heroku";

const getMessage = () => {
    console.log(message);
    return message;
};

module.exports = {getMessage};