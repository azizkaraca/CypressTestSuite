import content from '../pages/contents';
import across from '../pages/across.json';

describe('Login to Across App', () => {

    after(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });


    it('Navigate to QA Environment ', () => {
       
        cy.visit(across.QA);
        cy.title().should('eq',"Across Manager")
        cy.url().should('eq',across.QA)
    });

    it('User enters with PPC e-mail', () => {
        content.emailField.type(across.PPCUser)
    });

    it('User enters with PPC password', () => {
        content.passwordField.type(across.PPCPass)
    });

    it('User should login successfully', () => {
        content.loginButton.click()
        cy.url().should('contains',"dashboard")
        cy.get('#across-map').should('be.visible')
    });

    it('User changes language to En', () => {
        content.languageButton.first().click()
        content.english.click()
    });
    

});