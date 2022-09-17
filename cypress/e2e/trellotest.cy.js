/// <reference types="cypress"/>

import home from "../pages/homepage";
import login from "../pages/loginpage";

describe("smoke test cases", () => {
  beforeEach("set up", () => {
    home.openTrello();
  });

  it("verify all the pictures on trello home page", () => {
    home.verifyAllImages();
  });

  it("Verify that user cannot login with invalid credentials", () => {
    home.visitLoginPage();
    login.signin("nijatmn", "Test123!");
    let error = login.getErrorMessage();
    expect(error).to.contain("There isn't an account ");
  });
});
