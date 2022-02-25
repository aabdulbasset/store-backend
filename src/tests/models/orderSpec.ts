import { OrderModel } from "../../models/order";
const orderOBJ = new OrderModel

describe("Check for Order defines",()=>{
    it("Current Should be defined",()=>{
        expect(orderOBJ.Current).toBeDefined()
    })
    it("Complete Should be defined",()=>{
        expect(orderOBJ.Complete).toBeDefined()
    })

})

describe("Check for Order values",()=>{

    it("Current should return a list of orders ",async ()=>{
        const result = await orderOBJ.Current(1)
        expect(result).toEqual([])
    })
    it("Complete should return a list of complete orders",async ()=>{
        const result = await orderOBJ.Complete(1)
        expect(result).toEqual([])
    })
})