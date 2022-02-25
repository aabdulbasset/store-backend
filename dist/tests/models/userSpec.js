"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/user");
const userOBJ = new user_1.userModel;
describe("check for user defines", () => {
    it("Index Should be defined", () => {
        expect(userOBJ.index).toBeDefined();
    });
    it("Show Should be defined", () => {
        expect(userOBJ.show).toBeDefined();
    });
    it("Create Should be defined", () => {
        expect(userOBJ.create).toBeDefined();
    });
});
describe("Check for user values", () => {
    it("Should return 1 on successful creation of user", async () => {
        const result = await userOBJ.create({
            firstName: "Test",
            lastName: "User",
            password: "HashedPass"
        });
        expect(result).toEqual(1);
    });
    it("Should return user with the id", async () => {
        const result = await userOBJ.show(2);
        expect(result).toEqual({
            firstname: "Test",
            lastname: "User"
        });
    });
});
