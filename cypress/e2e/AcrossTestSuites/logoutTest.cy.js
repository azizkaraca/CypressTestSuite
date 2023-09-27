import content from '../../pages/content';
import across from './across.json';


describe('Logout from Across App', () => {


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

    it('User goes to menu', () => {
        content.burgerMenu.click()
    });

    it('User goes to Account page', () => {
        content.downArrow.click()
    });
    
    it('User selects Log Out button', () => {
        content.logout.click()
    });

    it('User should be Logout successfully', () => {
        cy.url().should('contains',"signin")
    });
   
    

});