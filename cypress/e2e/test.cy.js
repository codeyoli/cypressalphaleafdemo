/// <reference types="cypress"/>

const { faker } = require('@faker-js/faker');

describe('smoke test class', () => {

   it('Invalid login results in error message',  () => {
      // test data
      let fakeUser = faker.internet.email();
      let fakePass = faker.internet.password();

      // test scipt
      cy.visit('https://trello.com');
      cy.xpath("(//a[text()='Log in'])[1]").click();
      cy.get('input#user').clear();
      cy.get('input#user').type(fakeUser);
      cy.wait(500);
      cy.get('input#password').clear();
      cy.get('input#password').type(fakePass);
      cy.get('div#password-error > p').should('be.visible');
   });
   
});