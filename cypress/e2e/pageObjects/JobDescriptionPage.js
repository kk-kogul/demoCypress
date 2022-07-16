import BasePage from './BasePage'
import {preparePage,waitForPage} from '../../support/util';
const OPEN_POSITIONS = require('../../fixtures/openPositions.json');


class JobDescriptionPage extends BasePage {
    constructor(){
        super();
        this.FRAME = this.PAGE_CONSTANTS['IFRAME'];
    }

    isPageLoaded(role) {
        cy.switchToIframes(this.FRAME).find('b').contains(OPEN_POSITIONS[role]['NAME_IN_JD_PAGE']);
    }

    clickApplyForThisPosition() {
        preparePage(this.requests['SUBMIT_RESUME']);
        // preparePage(this.requests['SUBMIT_RESUME_JS']);
        cy.switchToIframes(this.FRAME).find('#gnewtonJobDescriptionBtn > .gnewtonApplyBtn').click();
        waitForPage(this.requests['SUBMIT_RESUME']);
        // waitForPage(this.requests['SUBMIT_RESUME_JS']);
    }
}

export default new JobDescriptionPage();

    