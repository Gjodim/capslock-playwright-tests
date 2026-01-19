import { LandingPage } from "../../pages/landingPage";
import test from "@playwright/test";

test.describe("Visit and verify access to Landing page", async () => {
  test(
    "Visit and verify access to Landing page",
    { tag: ["@smoke", "@landingPage"] },
    async ({ page }) => {
      const landingPage = new LandingPage(page);

      await landingPage.navigate();
      await landingPage.verifyUrl();
      await landingPage.verifyInitialPageElements();
    }
  );
});