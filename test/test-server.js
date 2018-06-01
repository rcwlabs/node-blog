const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;

const {app, runServer, closeServer} = require('../index');

chai.use(chaiHttp);

describe('Blog Listing', function() {

    before(function() {
        return runServer();
    })

    after(function() {
        return closeServer();
    })

    it('should list blog entries', function() {
        return chai.request(app)
            .get('/')
            .then(function(res) {
                expect(res).to.have.status(200);
            })
    })
})