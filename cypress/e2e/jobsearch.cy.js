/// <reference types="cypress"/>

const { faker } = require('@faker-js/faker');

describe('Automation job serach', ()=>{

    it('User can search for automation job', ()=>{

        let search1 = "test automation jobs";

        cy.visit("https://gooogle.com");
        cy.wait(1000);
        cy.xpath("(//input[@name='q'])[1]").type(search1).type('{enter}');
        cy.wait(2000);
        cy.xpath("//span[contains(text(), 'more jobs')]").click();
        cy.wait(3000);
    });
});