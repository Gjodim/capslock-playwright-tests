import { expect, test } from "../fixtures/landingPage.fixture";

import { LandingPage } from "../../pages/landingPage";
import { ThankYouPage } from "../../pages/thankYouPage";
import { data } from "../../data/test-data";

// test.describe("Verify form submission", async () => {
//     test('Verify form submission works for service available ZIP:', async ({
//       page,
//     }) => {
//       const landingPage = new LandingPage(page);

//     });
//   });

// test.describe("Verify form validations", async () => {
//     Object.entries(data.zipCodes.invalid).forEach(([name, zip]) => {
//       test(`Verify form validation for ZIP: ${name}`, async ({
//         landingPage,
//       }) => {
//         await landingPage.typeInZipField(zip);
//         await landingPage.clickNextButton();
//         await landingPage.verifyZipValidation();
//       });
//     });
//   });

test("Form success for out of service ZIP code", async ({ landingPage }) => {
  await landingPage.typeInZipField(data.zipCodes.validOutOfService.OUA_11111);
  await landingPage.clickNextButton();

  await landingPage.verifySectionFormSorryEmail();
  await landingPage.typeInSectionFormSorryEmailInput(
    data.emailAddress.valid.validOne
  );
  await landingPage.clickSubmitButton();

  await landingPage.verifySectionFormSorryEmailSent();

  await landingPage.navigate();
  await landingPage.verifyUrl();
});

test("Form success for service available ZIP code", async ({
  landingPage,
  page,
}) => {
  const thankYouPage = new ThankYouPage(page);
  await landingPage.typeInZipField(
    data.zipCodes.validServiceAvailable.SA_68901
  );
  await landingPage.clickNextButton();

  await landingPage.verifySectionFormWhyInterested();
  await landingPage.whyInterestedSelectAll();
  await landingPage.whyInterestedClickNextButton();

  await landingPage.verifySectionFormTypeOfProperty();
  await landingPage.typeOfPropertySelectRental();
  await landingPage.typeOfPropertyClickNextButton();

  await landingPage.verifySectionFormNameAndEmail();
  await landingPage.nameAndEmailTypeInName(data.name.valid.JohnDoe);
  await landingPage.nameAndEmailTypeEmail(data.emailAddress.valid.validTwo);
  await landingPage.nameAndEmailClickEstimateButton();

  await landingPage.verifySectionFormPhone();
  await landingPage.typePhone(data.phoneNumber.valid.validOne);
  await landingPage.phoneSubmitRequestButtonClick();

  await thankYouPage.verifyUrl();
});

test("ZIP code validation rejects invalid values", async ({ landingPage }) => {
  for (const zip of Object.values(data.zipCodes.invalid)) {
    await landingPage.typeInZipField(zip);
    await landingPage.clickNextButton();
    await landingPage.verifyZipValidation();

    await landingPage.navigate();
    await landingPage.verifyUrl();
  }
});

test("Validations for service available email", async ({ landingPage }) => {
  await landingPage.typeInZipField(
    data.zipCodes.validServiceAvailable.SA_68901
  );
  await landingPage.clickNextButton();

  await landingPage.verifySectionFormWhyInterested();
  await landingPage.whyInterestedSelectAll();
  await landingPage.whyInterestedClickNextButton();

  await landingPage.verifySectionFormTypeOfProperty();
  await landingPage.typeOfPropertySelectRental();
  await landingPage.typeOfPropertyClickNextButton();

  await landingPage.verifySectionFormNameAndEmail();
  await landingPage.nameAndEmailTypeInName(data.name.valid.JohnDoe);
  for (const email of Object.values(data.emailAddress.invalid)) {
    await landingPage.nameAndEmailTypeEmail(email);
    await landingPage.nameAndEmailClickEstimateButton();
    await landingPage.verifyEmailFieldHTML5Validation();
    await landingPage.verifySectionPhoneFormNotVisible();
  }
});

test("Validation for phone number", async ({
  landingPage,
  page,
}) => {
  const thankYouPage = new ThankYouPage(page);
  await landingPage.typeInZipField(
    data.zipCodes.validServiceAvailable.SA_57382
  );
  await landingPage.clickNextButton();

  await landingPage.whyInterestedSelectAll();
  await landingPage.whyInterestedClickNextButton();

  await landingPage.typeOfPropertySelectRental();
  await landingPage.typeOfPropertyClickNextButton();

  await landingPage.nameAndEmailTypeInName(data.name.valid.JaneDoe);
  await landingPage.nameAndEmailTypeEmail(data.emailAddress.valid.noDomain);
  await landingPage.nameAndEmailClickEstimateButton();

  for (const phone of Object.values(data.phoneNumber.invalid)) {
  await landingPage.typePhone(phone);
  await landingPage.phoneSubmitRequestButtonClick();
  await landingPage.verifyPhoneValidation();
  await thankYouPage.verifyNotAtUrl();
  }
});
