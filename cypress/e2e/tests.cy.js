import pageFactory from './PageFactory'
import Setup from './Setup'
const ROLE = "SDET"

describe('Iodine Careers Test',() => {
    beforeEach('Wait before each step for a few ms', () =>{
        cy.wait(1000);
    })

    before('Visit IodineSoftware home page', () => {
        Setup.setViewport();
        Setup.visitHomePage();
    });

    it('Visit Iodine Software Career Page',() => {
    	pageFactory.homePage.isPageLoaded();

    	pageFactory.homePage.openCareersPage();
    });
  
    it('Go to the Job Description page for ROLE', () => {
        pageFactory.careersPage.openJobDescriptionPage(ROLE);
    });
 
    it('Validate Apply for this position page', () => {
        pageFactory.jobDescriptionPage.isPageLoaded(ROLE);
        pageFactory.jobDescriptionPage.clickApplyForThisPosition()
    });

    it('Validate sponsorship page', () => {
        pageFactory.sponsorshipPage.isPageLoaded();
        pageFactory.sponsorshipPage.verifyContinueButtonStatus(false);
        pageFactory.sponsorshipPage.selectOptions(true, false);
        pageFactory.sponsorshipPage.verifyContinueButtonStatus(true);
        pageFactory.sponsorshipPage.clickContinueButton();
    });

    it('Validate Page showing voluntary identification list', () =>{
        pageFactory.identificationHomePage.isPageLoaded();
        pageFactory.identificationHomePage.verifyContentAndContinueToNextPage();
    })

    it('Validate Gender Race identity page', () => {
        pageFactory.genderRaceIdentityPage.verifyContentAndContinueToNextPage();  
    })

    it('Validate Veteran identity page', () => {
        pageFactory.veteranIdentityPage.verifyContentAndContinueToNextPage();  
    })

    it('Validate Disability Identifcation page', () => {
        pageFactory.disabilityIdenitificationPage.verifyContentAndContinueToNextPage();  
    })

    it('Valdiate Candidate information page for Invalid Submit', () => {
        pageFactory.candidateInfoPage.isPageLoaded();
        // Without this wait, Error message for checkbox is shown.
        // Since user behavior wait/spend at least 2s before clicking on the submit button, adding this wait here
        cy.wait(2000);
        pageFactory.candidateInfoPage.clickSubmitButton();
        pageFactory.candidateInfoPage.validateInvalidInputMessage();
    })
})