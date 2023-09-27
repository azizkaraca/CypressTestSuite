import content from '../../pages/content';
import across from './across.json';

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

    it('User switch to edit mode CTRL+MM', () => {
        content.acrossMap.type('{ctrl}{m}{m}')
        cy.url().should('include', 'edit')  
    });
   
    it('User use right click function to edit related area', () => {
        content.blankArea.click().trigger('contextmenu')
        content.editIcon.click()
    });

});