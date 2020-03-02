module.exports = class ResHelper {
    static res(res, message, data, status = 200) {
        res.status(status).json({
            status,
            message,
            data,
        })
    }
}