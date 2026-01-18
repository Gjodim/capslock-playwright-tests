import { Locator, Page, expect } from "@playwright/test";

import { BasePage } from "./basePage";

export class LandingPage extends BasePage {
  private header: Locator;
  private headerLocation: Locator;
  private pageTitle: Locator;
  private footer: Locator;
  private footerCopyright: Locator;
  private sectionFormOne: Locator;
  private sectionFormTitle: Locator;
  private sectionFormQuiz: Locator;
  private sectionFormQuizTitle: Locator;
  private sectionFormQuizInput: Locator;
  private sectionFormQuizNextButton: Locator;
  private sectionFormQuizBadge: Locator;
  private sectionFormZipValidation: Locator;

  private sectionFormSorry: Locator;
  private sectionFormSorryEmailInput: Locator;
  private sectionFormSorrySubmitButton: Locator;
  private sectionFormSorryThankYouText: Locator;

  private sectionFormWhyInterested: Locator;
  private whyInterestedIndependance: Locator;
  private whyInterestedSafety: Locator;
  private whyInterestedTherapy: Locator;
  private whyInterestedOther: Locator;
  private whyInterestedNextButton: Locator;

  private sectionFormTypeOfProperty: Locator;
  private typeOfPropertyOwner: Locator;
  private typeOfPropertyRental: Locator;
  private typeOfPropertyMobile: Locator;
  private typeOfPropertyNextButton: Locator;

  private sectionFormNameAndEmail: Locator;
  private nameAndEmailfirstNameInput: Locator;
  private nameAndEmailEmailInput: Locator;
  private nameAndEmailGoToEstimateButton: Locator;

  private sectionFormPhone: Locator;
  private phoneInputField: Locator;
  private phoneSubmitRequestButton: Locator;

  private sectionFormTwo: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.header = page.locator(".header");
    this.headerLocation = this.header.locator(".location__city");
    this.pageTitle = page.locator(".blockTitle__hdr", {
      hasText: "Here’s Why So Many Seniors Have Added This",
    });
    this.footer = page.locator(".footer");
    this.footerCopyright = this.footer.locator(".footer__copyright");
    this.sectionFormOne = page.locator(".section_form").first();
    this.sectionFormTitle = this.sectionFormOne.locator(".blockTitle__hdr");
    this.sectionFormQuiz = this.sectionFormOne.locator("form[name=zip_code]");
    this.sectionFormQuizTitle = this.sectionFormQuiz.locator(
      ".stepTitle__hdr",
      {
        hasText: "What is your ZIP Code?",
      }
    );
    this.sectionFormQuizInput = this.sectionFormQuiz.getByRole("textbox");
    this.sectionFormQuizNextButton = this.sectionFormOne.getByRole("button", {
      name: "Next",
    });
    this.sectionFormQuizBadge = this.sectionFormOne.locator(".formBadge");
    this.sectionFormZipValidation = this.sectionFormQuiz
      .locator(".helpBlock", { hasText: "Wrong ZIP code." })
      .or(
        this.sectionFormQuiz.locator(".helpBlock", {
          hasText: "Enter your ZIP code.",
        })
      );

    this.sectionFormSorry = this.sectionFormOne.locator(
      'form[name="sorry_email"]'
    );
    this.sectionFormSorryEmailInput = this.sectionFormSorry.getByRole(
      "textbox",
      { name: "Email Address" }
    );
    this.sectionFormSorrySubmitButton = this.sectionFormSorry.getByRole(
      "button",
      { name: "Submit" }
    );
    this.sectionFormSorryThankYouText =
      this.sectionFormOne.locator(".step-sorry");

    this.sectionFormWhyInterested = this.sectionFormOne.locator(
      'form[name="why_interested"]'
    );
    this.whyInterestedIndependance = this.sectionFormWhyInterested.getByText(
      "Independence",
      { exact: true }
    );
    this.whyInterestedSafety = this.sectionFormWhyInterested.getByText(
      "Safety",
      { exact: true }
    );
    this.whyInterestedTherapy = this.sectionFormWhyInterested.getByText(
      "Therapy",
      { exact: true }
    );
    this.whyInterestedOther = this.sectionFormWhyInterested.getByText("Other", {
      exact: true,
    });
    this.whyInterestedNextButton = this.sectionFormWhyInterested.getByRole("button", {
        name: "Next",
      });

    this.sectionFormTypeOfProperty = this.sectionFormOne.locator(
      'form[name="type_of_property"]'
    );
    this.typeOfPropertyOwner = this.sectionFormTypeOfProperty.getByText(
      "Owned House / Condo",
      { exact: true }
    );
    this.typeOfPropertyRental = this.sectionFormTypeOfProperty.getByText(
      "Rental Property",
      { exact: true }
    );
    this.typeOfPropertyMobile = this.sectionFormTypeOfProperty.getByText(
      "Mobile Home",
      { exact: true }
    );
    this.typeOfPropertyNextButton = this.sectionFormTypeOfProperty.getByRole("button", {
        name: "Next",
      });

    this.sectionFormNameAndEmail = this.sectionFormOne.locator('form[name="name_and_email"]');
    this.nameAndEmailfirstNameInput = this.sectionFormNameAndEmail.getByRole('textbox', {name: 'Enter Your Name'});
    this.nameAndEmailEmailInput = this.sectionFormNameAndEmail.getByRole('textbox', {name: 'Enter Your Email'});
    this.nameAndEmailGoToEstimateButton = this.sectionFormNameAndEmail.getByRole('button', { name: 'Go To Estimate' });

    this.sectionFormPhone = this.sectionFormOne.locator('form[name="phone"]');
    this.phoneInputField = this.sectionFormPhone.getByRole('textbox', {name: '(XXX)XXX-XXXX'});
    this.phoneSubmitRequestButton = this.sectionFormPhone.getByRole('button', { name: 'Submit Your Request' });

    this.sectionFormTwo = page.locator(".section_form").last();
  }

  async navigate(url: string = "/") {
    await this.page.goto(url, { waitUntil: "domcontentloaded" });
  }

  async verifyUrl(expectedPath: string = "/") {
    await expect(this.page).toHaveURL(new RegExp(expectedPath));
  }

  async verifyInitialPageElements() {
    await expect(this.header).toBeVisible();
    await expect(this.headerLocation).toBeVisible();

    await expect(this.pageTitle).toBeVisible();

    await expect(this.sectionFormOne).toBeVisible();
    await expect(this.sectionFormTitle).toBeVisible();
    await expect(this.sectionFormQuiz).toBeVisible();
    await expect(this.sectionFormQuizTitle).toBeVisible();
    await expect(this.sectionFormQuizInput).toBeVisible();
    await expect(this.sectionFormQuizNextButton).toBeVisible();
    await expect(this.sectionFormQuizBadge).toBeVisible();
    await expect(this.sectionFormTwo).toBeVisible();

    await expect(this.footer).toBeVisible();
    await expect(this.footerCopyright).toBeVisible();
  }

  async typeInZipField(zip: string) {
    await this.sectionFormQuizInput.fill(zip);
  }

  async verifyZipValidation() {
    await expect.soft(this.sectionFormZipValidation).toBeVisible();
  }

  async clickNextButton() {
    await this.sectionFormQuizNextButton.click();
  }

  async verifySectionFormSorryEmail() {
    await expect(this.sectionFormSorry).toBeVisible();
    await expect(this.sectionFormSorryEmailInput).toBeVisible();
  }

  async typeInSectionFormSorryEmailInput(email: string) {
    await this.sectionFormSorryEmailInput.fill(email);
  }

  async clickSubmitButton() {
    await this.sectionFormSorrySubmitButton.click();
  }

  async verifySectionFormSorryEmailSent() {
    await expect.soft(this.sectionFormSorryThankYouText).toBeVisible();
  }

  async verifySectionFormWhyInterested() {
    await expect(this.sectionFormWhyInterested).toBeVisible();
    await expect(this.whyInterestedIndependance).toBeVisible();
    await expect(this.whyInterestedSafety).toBeVisible();
    await expect(this.whyInterestedTherapy).toBeVisible();
    await expect(this.whyInterestedOther).toBeVisible();
    await expect(this.whyInterestedNextButton).toBeVisible();
  }

  async whyInterestedSelectAll() {
    await this.whyInterestedIndependance.click();
    await this.whyInterestedSafety.click();
    await this.whyInterestedTherapy.click();
    await this.whyInterestedOther.click();
  }

  async whyInterestedClickNextButton() {
    await this.whyInterestedNextButton.click();
  }

  async verifySectionFormTypeOfProperty() {
    await expect(this.sectionFormTypeOfProperty).toBeVisible();
    await expect(this.typeOfPropertyOwner).toBeVisible();
    await expect(this.typeOfPropertyRental).toBeVisible();
    await expect(this.typeOfPropertyMobile).toBeVisible();
    await expect(this.typeOfPropertyNextButton).toBeVisible();
  }

  async typeOfPropertySelectRental() {
    await this.typeOfPropertyRental.click();
  }

  async typeOfPropertyClickNextButton() {
    await this.typeOfPropertyNextButton.click();
  }

  async verifySectionFormNameAndEmail() {
    await expect(this.sectionFormNameAndEmail).toBeVisible();
    await expect(this.nameAndEmailfirstNameInput).toBeVisible();
    await expect(this.nameAndEmailEmailInput).toBeVisible();
    await expect(this.nameAndEmailGoToEstimateButton).toBeVisible();
  }

  async nameAndEmailTypeInName(name: string) {
    await this.nameAndEmailfirstNameInput.fill(name);
  }

  async nameAndEmailTypeEmail(email: string) {
    await this.nameAndEmailEmailInput.fill(email);
  }

  async nameAndEmailClickEstimateButton() {
    await this.nameAndEmailGoToEstimateButton.click();
  }

  async nameAndEmailClick() {
    await this.nameAndEmailGoToEstimateButton.click();
  }

  async verifySectionFormPhone() {
    await expect(this.sectionFormPhone).toBeVisible();
    await expect(this.phoneInputField).toBeVisible();
    await expect(this.phoneSubmitRequestButton).toBeVisible();
  }

  async typePhone(phone: string) {
    await this.phoneInputField.fill(phone);
  }

  async phoneSubmitRequestButtonClick() {
    await this.phoneSubmitRequestButton.click();
  }
}
