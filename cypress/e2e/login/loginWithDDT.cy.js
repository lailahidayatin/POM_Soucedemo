import loginPage from "../../PageObject/LoginPage";
import Data from "../../fixtures/login.json";

describe("Login Test", function () {
    const login = new loginPage();
    beforeEach('same step', () =>{
        login.redirect();
        
    })
        // Iterate over LoginData
        Data.forEach(element => {
           it(`Login with ${element.expected}`, () => {
                // Test logic for each set of credentials
                if (element.username != '') {
                    login.inputEmail(element.username);
                }
                if (element.password != '') {
                    login.inputPassword(element.password);
                }
                login.clickLoginButton();

                if (element.expected === 'valid login') {
                    cy.url().should('be.equal','https://www.saucedemo.com/inventory.html')
                } else {
                    cy.get('[data-test="error"]').should('contain', element.assertion);  
                }
            });
        });
    });
//});
