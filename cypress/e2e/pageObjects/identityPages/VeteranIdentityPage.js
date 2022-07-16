import IdentificationBasePage from './IdentificationBasePage'
import {preparePage,waitForPage} from '../../../support/util';


class VeteranIdentityPage extends IdentificationBasePage {
    constructor() {
        super();
        this.TITLE = 'Invitation to Self-Identify Protected Veteran Status';
    }

    isPageLoaded() {
        this.pageHeader.invoke('text').should('contain', this.TITLE);
    }

    verifyContentAndContinueToNextPage(){
        preparePage(this.requests['VEVRAA_VETRAN']);
        this.isPageLoaded();
        this.click(this.continueButton);
        waitForPage(this.requests['VEVRAA_VETRAN']);
    }
}

export default new VeteranIdentityPage();

    