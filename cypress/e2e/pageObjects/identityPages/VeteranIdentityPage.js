import IdentificationBasePage from './IdentificationBasePage'
import {prepareForUrl,waitForPage} from '../../../support/util';


class VeteranIdentityPage extends IdentificationBasePage {
    constructor() {
        super();
        this.TITLE = 'Invitation to Self-Identify Protected Veteran Status';
    }

    isPageLoaded() {
        this.pageHeader.invoke('text').should('contain', this.TITLE);
    }

    verifyContentAndContinueToNextPage(){
        prepareForUrl(this.requests['VEVRAA_VETRAN']);
        this.isPageLoaded();
        this.click(this.continueButton);
        waitForPage(this.requests['VEVRAA_VETRAN']);
    }
}

export default new VeteranIdentityPage();

    