class loginPage {
        fieldUserName='#user-name';
        fieldPassword='#password';
        btnLogin='#login-button';

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