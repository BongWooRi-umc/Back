
const response = ({code,message}, result) => {
    return {
        code: code,
        message: message,
        result: result
    }
};

const response_islogin = ({code,message},isLogin, result) => {
    return {
        code: code,
        message: message,
        isLogin: isLogin,
        result: result
    }
};

const errResponse = ({isSuccess, code, message}) =>{
    return {
        isSuccess: isSuccess,
        code: code,
        message: message
    }
};

module.exports = { response, errResponse,response_islogin };