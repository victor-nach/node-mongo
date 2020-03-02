module.exports = class ResHelper {
    static res(res, message, data, status = 200) {
        res.status(status).json({
            status,
            message,
            data,
        })
    }

    static resErr(res, error, status = 400) {
        res.status(status).json({
            status,
            error,
        })
    }
}