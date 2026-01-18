import { expect, test } from "../fixtures/landingPage.fixture";

import { LandingPage } from "../../pages/landingPage";
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
  for (const zip of Object.values(data.zipCodes.validOutOfService)) {
      await landingPage.typeInZipField(zip);
      await landingPage.clickNextButton();
      await landingPage.verifySectionFormSorryEmail();
      await landingPage.typeInSectionFormSorryEmailInput(data.emailAddress.valid.validOne);
      await landingPage.clickSubmitButton();
      await landingPage.verifySectionFormSorryEmailSent();

      await landingPage.navigate();
      await landingPage.verifyUrl();
  }
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
