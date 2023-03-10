import { assert } from "chai";
import { beforeEach } from "mocha";
import { BASEWEBURL, FIXTUREFOLDER } from "../../config";
import { common } from "../pages/common.page";
import { contact } from "../pages/contact.page";

describe("Brit Contact Us Sanity Test", function () {
  beforeEach("Launch HomePage", () => {
    cy.setViewPort();
    //disable cookie consent banner
    cy.disableCookieConsentOverlay();
    cy.visit(BASEWEBURL);
    cy.waitHomePageLoad();
  });

  it("Confirm Contact Us Results Displayed", function () {
    common.megaMenuButton().click();

    // wait for the mega menu to be fully animated across
    common
      .megaMenu()
      .should("have.attr", "style")
      .and("contain", "right: 0px;");

    // TODO - Potential bug on tablet mode where on first page load the culture sub menu is automatically expanded
    // Speak to Devs / PM to discuss if expected behaviour ( seems unintuitive and doesn't happen if you've selected an option once)

    common
      .secondaryNavigation()
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
          .find(contact.cityLocationSelector)
          .should("contain", expectedResults.city);
        expectedResults.address.forEach((addressLine) => {
          cy.wrap(location).find("address").should("contain", addressLine);
        });
      });
    });
  });
});
