const {
    app,
    chai,
    expect,
} = require('./');

describe('Users', () => {
    describe('get all users', () => {
        it('should return 200 with list of users', (done) => {
            chai
                .request(app)
                .get('/users')
                .end((_err, res) => {
                    expect(res).to.have.status(200)
                    done();
                });
        });
    });
});