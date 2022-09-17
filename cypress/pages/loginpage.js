// data & element locators
const xp_banner = "//h1";
const cs_user_email = "input#user";
const cs_user_pass  = "input#password";
const cs_login_button = "input#login";
const cs_error_message = "div#error > p";

// page methods 
const loginpage = {
    signin(user, pass) {
        cy.get(cs_user_email).type(user);
        cy.get(cs_user_pass).type(pass);
        cy.get(cs_login_button).click();
    },

    getErrorMessage() {
        let message = cy.get(cs_error_message).text();
        cy.log("Error message extracted" + message)
        return cy.get(cs_error_message).text();
    }
};
export default loginpage;