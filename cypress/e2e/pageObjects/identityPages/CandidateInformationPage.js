import IdentificationBasePage from './IdentificationBasePage'
import {preparePage,waitForPage} from '../../../support/util';


class CandidateInformationPage extends IdentificationBasePage {
    constructor() {
        super();
        this.TITLE = 'Thank you for your interest. Please complete the fields below and click "Submit".';
    }

    get submitButton() {
        return this.getElementFromFrame(this.FRAME, '#saveBtnBox > button');
    }

    get submissionForm() {
        return this.getElementFromFrame(this.FRAME, '#gnewtonForm');
    }

    get pageHeader() {
        return this.getElementFromFrame(this.FRAME, '#gnewtonHelpTextOfSubmission');
    }

    isPageLoaded() {
        this.pageHeader.invoke('text').should('contain', this.TITLE);
    }

    clickSubmitButton() {
        this.click(this.submitButton);
    }

    validateInvalidInputMessage() {
        this.submissionForm.within(() => {
            cy.get('input:invalid').then(items => {
            cy.get(items[0]).invoke('prop','validationMessage')
               .should('equal', 'Please fill out this field.');
           })
       })
    }
}

export default new CandidateInformationPage();

    