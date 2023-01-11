# brit-test-suite

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

### Run tests recording to Cypress Cloud


