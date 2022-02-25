import { productModel } from "../../models/product";
const productOBJ = new productModel

describe("Check for product defines",()=>{
    it("index Should be defined",()=>{
        expect(productOBJ.index).toBeDefined()
    })
    it("show Should be defined",()=>{
        expect(productOBJ.show).toBeDefined()
    })
    it("create Should be defined",()=>{
        expect(productOBJ.create).toBeDefined()
    })
    it("showCategory Should be defined",()=>{
        expect(productOBJ.showCategory).toBeDefined()
    })
})

describe("Check for product values",()=>{
    it("Create should return 0 on failed creation ",async ()=>{
        const result = await productOBJ.create({name:"rice",price:10,category:1})
        expect(result).toBe(0)
    })
    it("index should return a list of products ",async ()=>{
        const result = await productOBJ.index()
        expect(result).toEqual([{name:"rice",price:10,category:1}])
    })
    it("Create should return 1 on successful creation ",async ()=>{
        const result = await productOBJ.show(1)
        expect(result).toEqual({name:"rice",price:10,category:1})
    })
})