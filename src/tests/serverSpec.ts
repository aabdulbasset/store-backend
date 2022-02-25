import app from "../server";
import st from "supertest"
describe("Orders endpoint tests",()=>{
    it("Should 200 on correct orders/id/current request",(done)=>{
        st(app)
        .get('/orders/1/current')
        .set('Authorization',"Bearer eyJhbGciOiJIUzI1NiJ9.YWRtaW4.C1qTmcDlEw6PHchOjmCluce0gps9kJ1eZ-bfX6LZkeY")
        .expect(200)
        .end((err)=>{
            if(err)
            done.fail(err)
            else
            done()
        })
    })
    it("Should 200 on correct orders/id/complete request",(done)=>{
        st(app)
        .get('/orders/1/complete')
        .set('Authorization',"Bearer eyJhbGciOiJIUzI1NiJ9.YWRtaW4.C1qTmcDlEw6PHchOjmCluce0gps9kJ1eZ-bfX6LZkeY")
        .expect(200)
        .end((err)=>{
            if(err)
            done.fail(err)
            else
            done()
        })
    })
})
describe("Products endpoint tests",()=>{
    it("Should 200 on correct index request",(done)=>{
        st(app)
        .get('/products')
        .expect(200)
        .end((err)=>{
            if(err)
            done.fail(err)
            else
            done()
        })
    })
    it("Should 400 on wrong product id",(done)=>{
        st(app)
        .get('/products/id/s')
        .expect(400)
        .end((err)=>{
            if(err)
            done.fail(err)
            else
            done()
        })
    })
    it("Should 200 on correct product id",(done)=>{
        st(app)
        .get('/products/id/1')
        .expect(200)
        .end((err)=>{
            if(err)
            done.fail(err)
            else
            done()
        })
    })
    it("Should 200 on correct product create",(done)=>{
        st(app)
        .post('/products/create')
        .set('Authorization',"Bearer eyJhbGciOiJIUzI1NiJ9.YWRtaW4.C1qTmcDlEw6PHchOjmCluce0gps9kJ1eZ-bfX6LZkeY")
        .send({name:'rice',price:10,category:1})
        .expect(200)
        .end((err)=>{
            if(err)
            done.fail(err)
            else
            done()
        })
    })
    it("Should 500 on wrong token product create",(done)=>{
        st(app)
        .post('/products/create')
        .set('Authorization',"Bearer eyJhbGciOiJIUzI1NiJ9.YWRtbW4.C1qTmcDlEw6PHchOjmCluce0gps9kJ1eZ-bfX6LZkeY")
        .send({name:'rice',price:10,category:1})
        .expect(500)
        .end((err)=>{
            if(err)
            done.fail(err)
            else
            done()
        })
    })
    it("Should 200 on correct category id",(done)=>{
        st(app)
        .get('/products/category/1')
        .expect(200)
        .end((err)=>{
            if(err)
            done.fail(err)
            else
            done()
        })
    })
})
describe("User endpoint tests",()=>{
    it("Should 200 on correct index request",(done)=>{
        st(app)
        .get('/users/')
        .set('Authorization',"Bearer eyJhbGciOiJIUzI1NiJ9.YWRtaW4.C1qTmcDlEw6PHchOjmCluce0gps9kJ1eZ-bfX6LZkeY")
        .expect(200)
        .end((err)=>{
            if(err)
            done.fail(err)
            else
            done()
        })
    })
    it("Should 200 on correct show request",(done)=>{
        st(app)
        .get('/users/id/1')
        .set('Authorization',"Bearer eyJhbGciOiJIUzI1NiJ9.YWRtaW4.C1qTmcDlEw6PHchOjmCluce0gps9kJ1eZ-bfX6LZkeY")
        .expect(200)
        .end((err)=>{
            if(err)
            done.fail(err)
            else
            done()
        })
    })
    it("Should 200 on correct create request",(done)=>{
        st(app)
        .post('/users/create')
        .send({firstname:"ahmed",lastname:"basset",password:"hashedpass"})
        .set('Authorization',"Bearer eyJhbGciOiJIUzI1NiJ9.YWRtaW4.C1qTmcDlEw6PHchOjmCluce0gps9kJ1eZ-bfX6LZkeY")
        .expect(200)
        .end((err)=>{
            if(err)
            done.fail(err)
            else
            done()
        })
    })
})