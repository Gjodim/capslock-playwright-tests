import { Locator, Page, expect } from "@playwright/test";

import { BasePage } from "./basePage";

export class ThankYouPage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.url = "thankyou";
  }

  async verifyUrl(expectedPath: string = this.url) {
    await expect(this.page).toHaveURL(new RegExp(expectedPath));
  }

  async verifyNotAtUrl(expectedPath: string = this.url) {
    await expect(this.page).not.toHaveURL(new RegExp(expectedPath));
  }
}
