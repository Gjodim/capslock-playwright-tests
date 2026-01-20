import { ThankYouPage } from "../../pages/thankYouPage";
import { data } from "../../data/test-data";
import { test } from "../fixtures/landingPage.fixture";

test.describe("Verify fields validation", async () => {
  test(
    "ZIP code validation",
    { tag: ["@e2e", "@landingPage", "@negative"] },
    async ({ landingPage }) => {
      for (const zip of Object.values(data.zipCodes.invalid)) {
        await landingPage.typeInZipField(zip);
        await landingPage.clickNextButton();
        await landingPage.verifyZipValidation();
      }
    }
  );

  test(
    "Service available email validation",
    { tag: ["@e2e", "@landingPage", "@negative"] },
    async ({ landingPage }) => {
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
        await landingPage.verifyEmailFieldHTML5Validation();
        await landingPage.nameAndEmailClickEstimateButton();
        await landingPage.verifySectionPhoneFormNotVisible();
      }
    }
  );

  // This will fail as the Out of service email does not have HTML5 validation
  test.fixme(
    "Out of service email validation",
    { tag: ["@e2e", "@landingPage", "@negative"] },
    async ({ landingPage }) => {
      await landingPage.typeInZipField(
        data.zipCodes.validOutOfService.OUA_11111
      );
      await landingPage.clickNextButton();

      await landingPage.verifySectionFormSorryEmail();
      for (const email of Object.values(data.emailAddress.invalid)) {
        await landingPage.typeInSectionFormSorryEmailInput(email);
        await landingPage.verifyEmailFieldHTML5Validation();
        await landingPage.clickSubmitButton();
      }
    }
  );

  test(
    "Phone number validation",
    { tag: ["@e2e", "@landingPage", "@negative"] },
    async ({ landingPage, page }) => {
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
    }
  );
});
