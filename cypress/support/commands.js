// wait for the home page video hero to fully load
Cypress.Commands.add("waitHomePageLoad", () => {
  cy.get("div.component--hero", { timeout: 6000 }).should(
    "have.class",
    "visible"
  );
  cy.title().should("equal", "Brit Insurance");
});

Cypress.Commands.add("entersearchTerm", (searchTerm) => {
  cy.get("div.component--header__search > button").click();
  cy.get("div.component--header__search", { timeout: 3000 }).should(
    "have.class",
    "active"
  );

  cy.get("div.header--search > input[type=search]").type(searchTerm);
});

Cypress.Commands.add("disableCookieConsentOverlay", () => {
  cy.setCookie(
    "CookieConsent",
    "{stamp:%27KLk0VLJSLzm94lufQ4Da2Pc3lYLBa2eGD7/mcydPhIEUE8ih41BFgg==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:1%2Cutc:1673429393141%2Cregion:%27gb%27}"
  );
});

Cypress.Commands.add("setViewPort", () => {
  switch (Cypress.env("VIEWPORT")) {
    case "MOBILE":
      cy.viewport(550, 750);
      // code block
      break;
    case "TABLET":
      cy.viewport(1000, 996);
      break;
    case "DESKTOP":
      cy.viewport(1920, 1200);
      break;
    default:
      console.log("NO VIEWPORT DEFINED - USING DESKTOP MODE");
      cy.viewport(1920, 1200);
  }
});
