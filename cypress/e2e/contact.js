import { assert } from "chai";
import { beforeEach } from "mocha";
import { BASEWEBURL, FIXTUREFOLDER } from "../../config";

describe("Brit Contact Us Sanity Test", function () {
  beforeEach("Launch HomePage", () => {
    cy.setViewPort();
    //disable cookie consent banner
    cy.disableCookieConsentOverlay();
    cy.visit(BASEWEBURL);
    cy.waitHomePageLoad();
  });

  it("Confirm Contact Us Results Displayed", function () {
    cy.get("div.component--header__burger > button").click();

    // wait for the mega menu to be fully animated across
    cy.get(".component--mega-menu")
      .should("have.attr", "style")
      .and("contain", "right: 0px;");

    cy.get(".navigation--level .secondary")
      .contains("contact")
      .then((contactMenu) => {
        if (contactMenu != null) {
          cy.wrap(contactMenu).click();
        } else {
          assert.isTrue(false, "couldn't find the contact menu");
        }
      });

    cy.log("Validating contact results:");
    cy.title().should("equal", "Contact");
    cy.fixture(FIXTUREFOLDER + "contact").then((expectedResults) => {
      cy.get(expectedResults.id).then((location) => {
        cy.wrap(location)
          .find("p.location__city")
          .should("contain", expectedResults.city);
        expectedResults.address.forEach((addressLine) => {
          cy.wrap(location).find("address").should("contain", addressLine);
        });
      });
    });
  });
});
