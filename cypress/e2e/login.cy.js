import loginPage from "../PageObject/LoginPage";

describe("Login Test",function(){
    it("Success login",function(){
        const login = new loginPage()
        login.redirect()
        login.inputEmail('standard_user')
        login.inputPassword('secret_sauce')
        login.clickLoginButton()
        cy.url().should('be.equal','https://www.saucedemo.com/inventory.html')
        
    })
})