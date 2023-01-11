# brit-test-suite

![Cypress Status](https://github.com/mjblue/brit-test-suite/actions/workflows/cypress.yml/badge.svg)

## Setup

This test suite requires a [Node.js installation V14 or greater](https://nodejs.org/en/download/) for your setup

## Pre-requisites (on linux / mac)

```
source env.sh
```

And choose for which environment and region you want to run the test

```
Usage:
set_env <environment>-<region>-<viewport>

> Examples:
set_env prod-uk-desktop
```
The only currently supported environment / region combination is PROD / UK

## Pre-requisites (on windows)

Choose for which environment, region and viewport you want to run the test by setting the environment variables

`CYPRESS_ENVIRONMENT, CYPRESS_REGION, CYPRESS_VIEWPORT`

> Examples:
```
set CYPRESS_ENVIRONMENT=PROD
set CYPRESS_REGION=UK
set CYPRESS_VIEWPORT=DESKTOP
```

CYPRESS_VIEWPORT options are:
 - DESKTOP (Default)
 - TABLET
 - MOBILE

The only currently supported environment / region combination is PROD / UK

### Install dependencies

```
npm install
```

## Run tests

### Run tests locally

```
npm run cypress:run
```

### Run tests on github

Tests are run via github actions for PROD-UK_DESKTOP on a push to master

### Run tests recording to Cypress Cloud

Tests are recorded to https://cloud.cypress.io/projects/3budi4/runs

## Notes

These tests have been written as per the initial requirement however this type of test is susceptible to flakiness due to a reliance on the test data.

Suggestions to be implemented ( not fulfilled due to time constraints)

- for 'prod' sanity check Contact - Reduce the number of address elements to assert so any 'copy' changes don't break the tests
- for 'prod' sanity check Search - Reduce the reliance on the exact results by just checking some results are returned with one expected result somewhere in the results
- for 'component' UI tests (checking all the data returned is displayed) - The json response from any backend calls (e.g. https://www.britinsurance.com/umbraco/surface/SiteSearch/GetSiteSearchHeaderResults?keyword=IFRS+17&maxResults=5&rootId=1444) should intercepted and mocked to respond with known data
- for 'integration' tests in non prod envs, the test data should be injected to the appropriate systems during the test setup
- Seperate out the 'navigation' part of contact test to a seperate 'navigation' suite of tests ensurting the menu bar behaves as expected. The vaildation of the data on the contact page is then a standalone test which can be navigated directly to the contact page
