import IdentificationBasePage from './IdentificationBasePage'
import {preparePage,waitForPage} from '../../../support/util';


class DisabilityIdentificationPage extends IdentificationBasePage {
    constructor(){
        super();
        this.TITLE = 'Voluntary Self-Identification of Disability';
    }

    isPageLoaded() {
        this.pageHeader.invoke('text').should('contain', this.TITLE);
    }

    verifyContentAndContinueToNextPage(){
        preparePage(this.requests['SUBMIT_VEVRAA']);
        preparePage(this.requests['SUBMIT_FORM_JS']);
        this.isPageLoaded();
        this.click(this.continueButton);
        waitForPage(this.requests['SUBMIT_VEVRAA']);
        waitForPage(this.requests['SUBMIT_FORM_JS']);
    }
}

export default new DisabilityIdentificationPage();

    