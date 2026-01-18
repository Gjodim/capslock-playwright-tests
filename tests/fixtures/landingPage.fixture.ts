import { LandingPage } from "../../pages/landingPage";
import { test as base } from "@playwright/test";

type Fixtures = {
  landingPage: LandingPage;
};

export const test = base.extend<Fixtures>({
  landingPage: async ({ page }, use) => {
    const landingPage = new LandingPage(page);

    await landingPage.navigate();
    await landingPage.verifyUrl();
    await landingPage.verifyInitialPageElements();
    
    await use(landingPage);
  },
});

export { expect } from "@playwright/test";