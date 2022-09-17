/// <reference types="cypress"/>

const { faker } = require('@faker-js/faker');

describe('smoke test class', () => {
   let testdata;

   beforeEach('setup', () => {
      let fixture = cy.fixture('example');
      fixture.then(function (data) {
         testdata = data;
      });
   });

   it('test case 1', () => {
      // test data
      let fakeUser = faker.internet.email();
      let fakePass = faker.internet.password();

      // test scipt
      cy.visit('https://trello.com');
      cy.xpath("(//a[text()='Log in'])[1]").click();
      cy.get('#user').type(fakeUser);

      testdata.email = 'nijat@alphaleafe.tech';

      cy.get('#user').clear();
      cy.get('#user').type(testdata.email);
   });

   it('test case 2',  () => {
      // test data
      let fakeUser = faker.internet.email();
      let fakePass = faker.internet.password();

      // test scipt
      cy.visit('https://trello.com');
      cy.xpath("(//a[text()='Log in'])[1]").click();
      cy.get('#user').type(testdata.email);

      testdata.email = 'nijat@alphaleafe.tech';

      cy.get('#user').clear();
      cy.get('#user').type(testdata.email);
   });
});