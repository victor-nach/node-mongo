const {
    app,
    chai,
    expect,
} = require('./');

describe('Users', () => {
    describe('create user', () => {
        const user = {
            firstName: 'chukwu',
            lastName: 'justice',
            age: '32',
            height: '1.65',
            email: 'cj@gmail.com',
          }
        it('should create a new user and return 200', (done) => {
            chai
                .request(app)
                .post('/users')
                .send(user)
                .end((_err, res) => {
                    expect(res).to.have.status(200)
                    done();
                });
        });
        it('should return 400 if user already exists', (done) => {
            chai
                .request(app)
                .post('/users')
                .send(user)
                .end((_err, res) => {
                    expect(res).to.have.status(400)
                    done();
                });
        });
    });

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