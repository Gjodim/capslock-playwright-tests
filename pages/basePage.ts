import { Page, expect } from "@playwright/test";

export class BasePage {
    protected page: Page;
    protected url: string;

    constructor(page) {
        this.page = page;
    }

    async navigate(url: string = "/") {
        await this.page.goto(url, { waitUntil: "domcontentloaded" });
      }
    
      async verifyUrl(expectedPath: string = "/") {
        await expect(this.page).toHaveURL(new RegExp(expectedPath));
      }
}
