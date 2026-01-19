import { ThankYouPage } from "../../pages/thankYouPage";
import { data } from "../../data/test-data";
import { test } from "../fixtures/landingPage.fixture";

test.describe("Verify form submission", async () => {
  test("Form success for out of service ZIP code", { tag: ["@e2e", "@landingPage"] }, async ({ landingPage }) => {
    await landingPage.typeInZipField(data.zipCodes.validOutOfService.OUA_11111);
    await landingPage.clickNextButton();

    await landingPage.verifySectionFormSorryEmail();
    await landingPage.typeInSectionFormSorryEmailInput(
      data.emailAddress.valid.validOne
    );
    await landingPage.clickSubmitButton();

    await landingPage.verifySectionFormSorryEmailSent();
  });

  test("Form success for service available ZIP code", { tag: ["@e2e", "@landingPage"] }, async ({
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
});
