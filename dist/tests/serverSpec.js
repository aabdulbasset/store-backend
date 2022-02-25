"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("../server"));
const supertest_1 = __importDefault(require("supertest"));
describe("Orders endpoint tests", () => {
    it("Should 200 on correct orders/id/current request", (done) => {
        (0, supertest_1.default)(server_1.default)
            .get('/orders/1/current')
            .set('Authorization', "Bearer eyJhbGciOiJIUzI1NiJ9.YWRtaW4.C1qTmcDlEw6PHchOjmCluce0gps9kJ1eZ-bfX6LZkeY")
            .expect(200)
            .end((err) => {
            if (err)
                done.fail(err);
            else
                done();
        });
    });
    it("Should 200 on correct orders/id/complete request", (done) => {
        (0, supertest_1.default)(server_1.default)
            .get('/orders/1/complete')
            .set('Authorization', "Bearer eyJhbGciOiJIUzI1NiJ9.YWRtaW4.C1qTmcDlEw6PHchOjmCluce0gps9kJ1eZ-bfX6LZkeY")
            .expect(200)
            .end((err) => {
            if (err)
                done.fail(err);
            else
                done();
        });
    });
});
describe("Products endpoint tests", () => {
    it("Should 200 on correct index request", (done) => {
        (0, supertest_1.default)(server_1.default)
            .get('/products')
            .expect(200)
            .end((err) => {
            if (err)
                done.fail(err);
            else
                done();
        });
    });
    it("Should 400 on wrong product id", (done) => {
        (0, supertest_1.default)(server_1.default)
            .get('/products/id/s')
            .expect(400)
            .end((err) => {
            if (err)
                done.fail(err);
            else
                done();
        });
    });
    it("Should 200 on correct product id", (done) => {
        (0, supertest_1.default)(server_1.default)
            .get('/products/id/1')
            .expect(200)
            .end((err) => {
            if (err)
                done.fail(err);
            else
                done();
        });
    });
    it("Should 200 on correct product create", (done) => {
        (0, supertest_1.default)(server_1.default)
            .post('/products/create')
            .set('Authorization', "Bearer eyJhbGciOiJIUzI1NiJ9.YWRtaW4.C1qTmcDlEw6PHchOjmCluce0gps9kJ1eZ-bfX6LZkeY")
            .send({ name: 'rice', price: 10, category: 1 })
            .expect(200)
            .end((err) => {
            if (err)
                done.fail(err);
            else
                done();
        });
    });
    it("Should 500 on wrong token product create", (done) => {
        (0, supertest_1.default)(server_1.default)
            .post('/products/create')
            .set('Authorization', "Bearer eyJhbGciOiJIUzI1NiJ9.YWRtbW4.C1qTmcDlEw6PHchOjmCluce0gps9kJ1eZ-bfX6LZkeY")
            .send({ name: 'rice', price: 10, category: 1 })
            .expect(500)
            .end((err) => {
            if (err)
                done.fail(err);
            else
                done();
        });
    });
    it("Should 200 on correct category id", (done) => {
        (0, supertest_1.default)(server_1.default)
            .get('/products/category/1')
            .expect(200)
            .end((err) => {
            if (err)
                done.fail(err);
            else
                done();
        });
    });
});
describe("User endpoint tests", () => {
    it("Should 200 on correct index request", (done) => {
        (0, supertest_1.default)(server_1.default)
            .get('/users/')
            .set('Authorization', "Bearer eyJhbGciOiJIUzI1NiJ9.YWRtaW4.C1qTmcDlEw6PHchOjmCluce0gps9kJ1eZ-bfX6LZkeY")
            .expect(200)
            .end((err) => {
            if (err)
                done.fail(err);
            else
                done();
        });
    });
    it("Should 200 on correct show request", (done) => {
        (0, supertest_1.default)(server_1.default)
            .get('/users/id/1')
            .set('Authorization', "Bearer eyJhbGciOiJIUzI1NiJ9.YWRtaW4.C1qTmcDlEw6PHchOjmCluce0gps9kJ1eZ-bfX6LZkeY")
            .expect(200)
            .end((err) => {
            if (err)
                done.fail(err);
            else
                done();
        });
    });
    it("Should 200 on correct create request", (done) => {
        (0, supertest_1.default)(server_1.default)
            .post('/users/create')
            .send({ firstname: "ahmed", lastname: "basset", password: "hashedpass" })
            .set('Authorization', "Bearer eyJhbGciOiJIUzI1NiJ9.YWRtaW4.C1qTmcDlEw6PHchOjmCluce0gps9kJ1eZ-bfX6LZkeY")
            .expect(200)
            .end((err) => {
            if (err)
                done.fail(err);
            else
                done();
        });
    });
});
