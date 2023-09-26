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

    it('User goes to menu', () => {
        cy.get('[data-testid="MenuIcon"]').click()
    });
   
    

});