import loginPage from "../PageObject/LoginPage";

describe("Login Test", function () {
    before(function () {
        cy.fixture('login.json').then(function (LoginData) {
            this.LoginData = LoginData;
        });
    });

    it('Login with different credentials', function () {
        const login = new loginPage();
        login.redirect();
        
        // Iterate over LoginData
        this.LoginData.forEach(element => {
            it('Login with ${element.expected}', () => {
                // Test logic for each set of credentials
                if (element.username != '') {
                    login.inputEmail(element.username);
                }
                if (element.password != '') {
                    login.inputPassword(element.password);
                }
                login.clickLogin();

                if (element.expected === 'valid data') {
                    cy.url().should('be.equal', 'https://www.saucedemo.com/inventory.html');
                } else {
                    cy.url().should('be.equal', element.assertion);
                }
            });
        });
    });
});
