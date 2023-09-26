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

    it('User enters with PPC e-mail', () => {
        cy.get('#mui-1').type(across.PPCUser)
    });

    it('User enters with PPC password', () => {
        cy.get('#mui-2').type(across.PPCPass)
    });

    it('User should login successfully', () => {
        cy.get('.css-zrgvfw > .MuiButtonBase-root').click()
        cy.get('#across-map').should('be.visible')
    });

    it('User changes language to En', () => {
        cy.get('[aria-controls="language-switcher"]').first().click()
        cy.get('.css-1sucic7 > .MuiPaper-root > .MuiList-root > [tabindex="-1"] > .css-1kthbge > .MuiBox-root').click()
    });

    it('User selects an island', () => {
        cy.get('[title="SKYROS"]').click()
        cy.url().should('include', 'view')
    });

    it('User switch to edit mode CTRL+MM', () => {
        cy.get('#across-map').type('{ctrl}{m}{m}')
        cy.url().should('include', 'edit')  
    });
   
    it('User use right click function to edit related area', () => {
        cy.get('#item_ejv2svq3e3wft3dtu9').click().trigger('contextmenu')
        cy.get('[data-testid="EditIcon"]').click()
    });

});