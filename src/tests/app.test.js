const {
    app,
    chai,
    expect,
} = require('./');

describe('root endpoint', () => {
    it('should return 200 with welcome message', (done) => {
        chai
            .request(app)
            .get('/')
            .end((_err, res) => {
                expect(res).to.have.status(200)
                done();
            });
    });
});