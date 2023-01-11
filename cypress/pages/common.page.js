export class CommonPage {
  megaMenuButton = () => {
    return cy.get("div.component--header__burger > button");
  };

  megaMenu = () => {
    return cy.get(".component--mega-menu");
  };

  secondaryNavigation = () => {
    return cy.get(".navigation--level .secondary");
  };

  quickSearchResultsSelector = ".header--search__results > .result";

  searchButtonSelector = "div.component--header__search > button";
}

export const common = new CommonPage();
