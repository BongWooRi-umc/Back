export const response = ({code, message}, result) => {
    return {
        code: code,
        message: message,
        result: result,
    }
};