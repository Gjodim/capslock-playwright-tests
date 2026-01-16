import {Locator, Page, expect} from '@playwright/test'

export class LandingPage {
    private page: Page;
    private urLSuccess: string;
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
    private sectionFormQuizSecure: Locator; 
    private sectionFormQuizBadge: Locator;
    private sectionFormTwo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.urLSuccess = 'thankyou';
        this.header = page.locator('.header');
        this.headerLocation = this.header.locator('.location__city');
        this.pageTitle = page.locator('blockTitle__hdr', {hasText: 'Here’s Why So Many Seniors Have Added This'});
        this.footer = page.locator('.footer');
        this.footerCopyright = this.footer.locator('.footer__copyright');
        this.sectionFormOne = page.locator('.section_form').first();
        this.sectionFormTitle = this.sectionFormOne.locator('.blockTitle__hdr');
        this.sectionFormQuiz = this.sectionFormOne.locator('#form-container-1');
        this.sectionFormQuizTitle = this.sectionFormOne.locator('.stepTitle__hdr');
        this.sectionFormQuizInput = this.sectionFormOne.getByRole('textbox');
        this.sectionFormQuizNextButton = this.sectionFormOne.getByRole('button', { name: 'Next' } );
        this.sectionFormQuizSecure = this.sectionFormOne.locator('.secure');
        this.sectionFormQuizBadge = this.sectionFormOne.locator('.formBadge');
        this.sectionFormTwo = page.locator('.section_form').last();
    }

    //TODO A function to navigate to a URL. URL can be optional parameter, and i have already set base url
}