import BasePage from './BasePage'
import {prepareForUrl,waitForPage} from '../../support/util';
const OPEN_POSITIONS = require('../../fixtures/openPositions.json');


class JobDescriptionPage extends BasePage {
    constructor() {
        super();
        this.FRAME = this.PAGE_CONSTANTS['IFRAME'];
    }

    isPageLoaded(role) {
        cy.getIframeBody(this.FRAME).find('b').contains(OPEN_POSITIONS[role]['NAME_IN_JD_PAGE']);
    }

    clickApplyForThisPosition() {
        prepareForUrl(this.requests['SUBMIT_RESUME']);
        // prepareForUrl(this.requests['SUBMIT_RESUME_JS']);
        cy.getIframeBody(this.FRAME).find('#gnewtonJobDescriptionBtn > .gnewtonApplyBtn').click();
        waitForPage(this.requests['SUBMIT_RESUME']);
        // waitForPage(this.requests['SUBMIT_RESUME_JS']);
    }
}

export default new JobDescriptionPage();

    