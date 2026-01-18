import { Locator, Page, expect } from "@playwright/test";

import { BasePage } from "./basePage";

export class ThankYouPage extends BasePage {

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.url = 'thankyou';
  }

}
