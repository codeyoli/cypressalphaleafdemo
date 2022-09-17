// data & element locators
const url = "https://trello.com";
const xp_login_buttn = "(//a[text()='Log in'])[1]";
const xp_all_imgs = "//img";


// page methods 
const homepage = {

    openTrello(){
        cy.visit(url);
    },

    visitLoginPage() {
        cy.xpath(xp_login_buttn).click();
    },

    verifyAllImages() {
        cy.xpath(xp_all_imgs).its('length').should('eq', 22);
    }
};

// exporting this object, functions, variables
// so it can be used in other JS files with import statement
export default homepage;