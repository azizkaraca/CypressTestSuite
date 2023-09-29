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

    it('User enters with PPC credentials', () => {
        cy.login(across.PPCUser,across.PPCPass);
    });

    it('User selects an island', () => {
        content.Skyross.click()
        cy.url().should('include', 'view')
    });

    it('User goes to menu', () => {
        content.burgerMenu.click()
    });
   
    

});