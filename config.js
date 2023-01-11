const config = {
  PROD: {
    UK: {
      baseWebUrl: "https://www.britinsurance.com/",
    },
  },
  PREPROD: {
    UK: {
      baseWebUrl: "https://pp-uk.britinsurance.com/",
    },
    US: {
      baseWebUrl: "https://pp-us.britinsurance.com/",
    },
  },
};

let ENVIRONMENT = Cypress.env("ENVIRONMENT").toUpperCase();
let REGION = Cypress.env("REGION").toUpperCase();

export const BASEWEBURL = config[ENVIRONMENT][REGION].baseWebUrl;
export const FIXTUREFOLDER = (ENVIRONMENT + "-" + REGION + "/").toLowerCase();
