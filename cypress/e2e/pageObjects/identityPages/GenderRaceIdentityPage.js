import IdentificationBasePage from './IdentificationBasePage'
import {prepareForUrl,waitForPage} from '../../../support/util';


class GenderRaceIdentityPage extends IdentificationBasePage {
    constructor(){
        super();
        this.TITLE = 'Invitation to Self-Identify Gender, Ethnicity/Race'
    }

    isPageLoaded() {
        this.pageHeader.invoke('text').should('contain', this.TITLE);
    }

    verifyContentAndContinueToNextPage(){
        prepareForUrl(this.requests['VEVRAA_GENDER']);
        this.isPageLoaded();
        this.continueButton.click();
        waitForPage(this.requests['VEVRAA_GENDER']);
    }
}

export default new GenderRaceIdentityPage();

    