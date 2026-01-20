# Capslock.global – Playwright Automation Assignment

## Overview

This repository contains an automated test solution built with **Playwright (TypeScript)** for the Capslock.global landing page.

The goal of the assignment is to:
- Identify and prioritize test scenarios
- Implement ~5 high‑priority end‑to‑end automated tests
- Ensure tests are stable, readable, CI‑ready, and maintainable
- Implement tests according to **expected behavior**, even when defects are discovered

The solution intentionally avoids over‑engineering and focuses on clarity, robustness, and scalability.

---

## Tech Stack

- **Playwright Test** (TypeScript)
- **Page Object Model (POM)**
- **Data‑driven testing**
- **Custom fixtures**
- **GitHub Actions (CI)**

---

## Project Structure

```
capslock-playwright-tests/
├── data/
│   └── test-data.ts              # Centralized test data
├── pages/
│   ├── landingPage.ts            # Landing page object
│   ├── thankYouPage.ts           # Thank You page object
│   └── basePage.ts               # Shared page utilities
├── tests/
│   ├── smoke/
│   │   └── page-access.spec.ts    # Smoke / sanity tests
│   └── e2e/
│       ├── form-submit.spec.ts        # End-to-end flows
│       └── form-validations.spec.ts   # Validation scenarios
├── fixtures/
│   └── landingPage.fixture.ts    # Playwright fixtures
├── playwright.config.ts
├── package.json
└── .github/workflows/playwright.yml
```

---

## Test Coverage Summary

### Implemented High‑Priority Scenarios

1. **Service Available – Full Submission Flow**
   - Valid ZIP code
   - Complete multi‑step form
   - Successful redirect to the Thank You page

2. **Out of Service – Full Submission Flow**
   - Valid out‑of‑area ZIP code
   - Email‑only submission flow
   - Confirmation message displayed

3. **ZIP Code Validation**
   - Required field validation
   - Too short / too long ZIP values
   - Non‑numeric input

4. **Email Validation (Service Available)**
   - Multiple invalid email formats
   - Validation implemented according to expected HTML5 behavior

5. **Email Validation (Out of Service)**
   - Multiple invalid email formats
   - Validation implemented according to expected HTML5 behavior (currently failing)

+

6. **Page Load & Core Content Validation**
   - Header, forms, and footer visibility
   - Critical interactive elements present

7. **Phone number validation (Service Available)**
   - Multiple invalid phone formats
   - Validation implemented according to custom .js solution

Negative scenarios are tagged using `@negative`.

---

## Known Defects Discovered

The following issues were identified during testing. All tests were implemented according to **expected behavior**, not current implementation.

### 1. Out of Service - Missing HTML5 Email Validation

- **Expected:** Email field should use native HTML5 validation (`type="email"`, browser validation message)
- **Actual:** No HTML5 validation is triggered
- **Severity:** Moderate-High

### 2. Service Available – Step 2 Selection Bug

- **Expected:** At least one option must be selected before proceeding
- **Actual:** User can continue without selecting any option
- **Severity:** Moderate

### 3. Inconsistent Form Focus Behavior

- **Expected:** User focus remains on the currently used form
- **Actual:** View scrolls back to the first form
- **Severity:** Minor UX issue

### 4. Out of Service - Thank You page not shown at the end

- **Expected:** Thank You page is shown at the end of flow
- **Actual:** User is not taken to Thank You page
- **Severity:** Minor UX issue

### 5. Out of Service - Step loader

- **Expected:** Step loader should be fully loaded on step #2
- **Actual:** Step loader not fully loaded
- **Severity:** Minor UX issue

---

## Installation

```bash
npm install
npx playwright install --with-deps
```

---

## Running Tests

### Run all tests (Chromium, headless)

```bash
npm run test:chrome
```

### Run mobile Chromium tests

```bash
npm run test:chrome:mobile
```

### Run headed (visible browser)

```bash
npm run test:chrome:headed
```

### Run only E2E tests

```bash
npm run test:e2e:chrome
```

### Run a single test by name

```bash
npm run test:grep -- "ZIP code validation"
```

### View HTML Report

```bash
npm run test:report
```

---

## CI Execution

Tests are automatically executed on:
- Every push to `main` / `master`
- Every pull request

The CI pipeline runs:
- Chromium desktop tests
- Chromium mobile tests

On failure, the following artifacts are captured and uploaded:
- HTML report
- Screenshots
- Traces

---

## Design Decisions & Best Practices

- **Clear and readable tests:** Clear title, functions and flow
- **Stable selectors:** Prefer role‑based and scoped locators
- **Page Object Model:** Clear separation of test logic and UI interaction
- **Soft assertions:** Used where multiple validations are expected
- **Data‑driven testing:** Centralized test data for scalability
- **CI‑friendly:** Headless, reproducible, deterministic execution

---

## Future Improvements

- Accessibility testing (axe / Accessibility Insights)
- Visual regression testing
- API / network contract validation
- Increased device support
- Enhance reusable content (more page objects, component reusing, utils, environment variables)
- Protect sensitive data (e.g. emails in environment variables)
- Add custom debug data (e.g. Allure reports)
- Increase scenario coverage
- Test parallelization tuning
- Plus - Other when the framework and context gros...

---

## Author

**Gjorgi Dimov**

