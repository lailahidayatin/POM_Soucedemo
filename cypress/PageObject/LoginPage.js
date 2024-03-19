class loginPage {
        fieldUserName='[id="user-name"]';
        fieldPassword='[id="password"]';
        btnLogin='[id="login-button"]';

    redirect(){
        cy.visit('')
    }
    inputEmail(username){
        cy.get(this.fieldUserName).type(username)
    }

    inputPassword(password){
        cy.get(this.fieldPassword).type(password)
    }

    clickLoginButton(){
        cy.get(this.btnLogin).click()
    }
}
export default loginPage