import { beforeEach } from "mocha";
import { BASEWEBURL, FIXTUREFOLDER } from "../../config";

describe("Brit Search Prod Sanity Test", function () {
  beforeEach("Launch HomePage", () => {
    cy.setViewPort();
    //disable cookie consent banner
    cy.disableCookieConsentOverlay();
    cy.visit(BASEWEBURL);
    cy.waitHomePageLoad();
  });

  it("Confirm Sanity Test Quick Search Results", function () {
    cy.fixture(FIXTUREFOLDER + "search").then((testData) => {
      cy.entersearchTerm(testData.searchterm);

      cy.log("Validating quick results:");
      cy.get(".header--search__results > .result").should(
        "have.length",
        testData.resultcount
      );
      cy.get(".header--search__results > .result").each((element, index) => {
        expect(element).to.contain.text(
          testData.results.find((result) => result["index"] == index)["title"]
        );
      });
    });
  });

  it("Confirm Sanity Test Full Search Results", function () {
    cy.fixture(FIXTUREFOLDER + "search").then((testData) => {
      cy.entersearchTerm(testData.searchterm);
      cy.get("div.component--header__search > button").click();
      cy.title().should("equal", "Search");
      cy.log("Validating full results:");
      cy.get("div.results-container a.s-results__tag").each(
        (element, index, list) => {
          expect(element).to.contain.text(
            testData.results.find((result) => result["index"] == index)["title"]
          );
          expect(list).to.have.length(3);
        }
      );
    });
  });
});
