const { Users } = require('../models');
const { ResHelpers } = require('../utils');

module.exports = class Controllers {
    static async getUser(email) {
        try {
            return await Users.findOne({ email });
        } catch (error) {
            console.log(error);
        }
    }

    static async signUp(req, res) {
        try {
            const { email } = req.body;
            if (await Users.findOne({ email }) ) {
                return ResHelpers.resErr(res, 'User already exists');
            }
            const data = await Users.create(req.body);
            ResHelpers.res(res, 'You have successfully signed up', data);
        } catch (error) {
            console.log(error);
        }
    }

    static async getAllUsers(req, res) {
        try {
            const data = await Users.find();
            ResHelpers.res(res, 'success', data);
        } catch (error) {
            console.log(error);
        }
    }
} 