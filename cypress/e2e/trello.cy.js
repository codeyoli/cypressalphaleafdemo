/// <reference types="cypress"/>

const { faker } = require('@faker-js/faker');

describe('Testing Trello Page', () => {

   it('User can see the price page', () => {
      // test data
      let fakeUser = faker.internet.email();
      let fakePass = faker.internet.password();

      cy.log("User is visiting Trello page");
      cy.visit('https://trello.com');

      cy.xpath("(//div/a[text()='Pricing'])[1]").click();
      cy.get("[type='number']").clear();
      cy.get("[type='number']").type("1260");
      cy.get('h1').scrollIntoView();
      cy.wait(1500);
      
      cy.get("[type='number']").clear();
      cy.get("[type='number']").type("2544");
      cy.get('h1').scrollIntoView();
      cy.wait(1500);

      cy.get("[type='number']").clear();
      cy.get("[type='number']").type("4209");
      cy.get('h1').scrollIntoView();
      cy.wait(1500);

      cy.xpath("//h2[text()='Compare our plans']").scrollIntoView();
      cy.get("input[type='search']").type("automation");
      cy.wait(1500);

      cy.xpath("//a[text()='Start automating']").click();
      cy.wait(1500);
      cy.xpath("//h2[text()='Move work forward']").scrollIntoView();
      cy.wait(1500);
      cy.xpath("//h2[text()='Integrate your favorite apps']").scrollIntoView();
      cy.wait(1500);

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

      cy.visit("https://trello.com");
      cy.wait(1500);
      cy.xpath("(//button[text()='Features'])[1]").click();
      cy.wait(1500);
      cy.xpath("//nav//p[text()='Templates']").click();
      cy.wait(1500);
      cy.xpath("(//a[text()='Design'])[1]").click();
      cy.wait(1500);
      cy.xpath("(//a[text()='Engineering'])[1]").click();
      cy.wait(1500);
      cy.xpath("(//a[text()='Remote work'])[1]").click();
      cy.wait(1500);
      cy.xpath("(//a[text()='Sales'])[1]").click();
      cy.wait(1500);

      cy.visit("https://trello.com");
   });
});