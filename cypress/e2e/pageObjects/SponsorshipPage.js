import BasePage from './BasePage'
import {prepareForUrl,waitForPage} from '../../support/util';
const saveButtonSelector = '#saveBtn';
const questionSelector = '.gnewtonQuestion';
const questionText = "Are you legally authorized to work";

class SponsorshipPage extends BasePage {
    // Todo: Move all string literals to constants
    constructor(){
        super();
        this.FRAME = this.PAGE_CONSTANTS['IFRAME'];
    }

    get continueButton(){
        return this.getElementFromFrame(this.FRAME, saveButtonSelector);
    }

    isPageLoaded() {
        cy.getIframeBody(this.FRAME).find(questionSelector).contains(questionText); 
    }

    selectOptions(authorizedToWork, requireSponsorship) {
        if (authorizedToWork) {
            this.getElementFromFrame(this.FRAME,'#y_8a7883a97c7b0baf017ca44b07f32134').click();
        }
        else {
            this.getElementFromFrame(this.FRAME,'#n_8a7883a97c7b0baf017ca44b07f32134').click();   
        }

        if (requireSponsorship) {
            this.getElementFromFrame(this.FRAME,'#y_8a7883a97c7b0baf017ca44cda7d2224').click();
        }
        else {
            this.getElementFromFrame(this.FRAME,'#n_8a7883a97c7b0baf017ca44cda7d2224').click();   
        }
    }

    verifyContinueButtonStatus(expectedStatus) {
        if (expectedStatus) {
            this.continueButton.should('not.have.class','disabled');
        }
        else {
            this.continueButton.should('have.class','disabled');
        }
    }

    clickContinueButton() {
        prepareForUrl(this.requests['SUBMIT_QUESTIONNAIRE']);
        this.click(this.continueButton);
        waitForPage(this.requests['SUBMIT_QUESTIONNAIRE']);
    }

}

export default new SponsorshipPage();

    