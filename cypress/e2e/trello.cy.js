/// <reference types="cypress"/>

const { faker } = require('@faker-js/faker');

describe('Testing Trello Page', () => {

   it('Invalid login results in error message',  () => {
      // test data
      let fakeUser = faker.internet.email();
      let fakePass = faker.internet.password();

      // test scipt
      cy.log("User is visiting Trello page");
      cy.visit('https://trello.com');
      cy.xpath("(//a[text()='Log in'])[1]").click();

      cy.log("User is entering username");
      cy.get('input#user').clear();
      cy.get('input#user').type(fakeUser);
      cy.wait(500);
      cy.get('input#login').click();

      cy.log("User is entering password");
      cy.get('input#password').clear();
      cy.get('input#password').type(fakePass);
      cy.wait(500);

      cy.log("User is clicking login button");
      cy.get('input#login').click()
      cy.wait(500);

      cy.log("Verifying that error message is displayed");
      cy.get('div#error > p').should('be.visible');
   });
});