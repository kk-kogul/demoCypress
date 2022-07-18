import IdentificationBasePage from './IdentificationBasePage'
import {prepareForUrl,waitForPage} from '../../../support/util';


class IdentificationHomePage extends IdentificationBasePage {
    constructor(){
        super();
    }

    isPageLoaded() {
        cy.switchToIframes(this.FRAME).find('b').contains("To help us measure how we are doing"); 
    }

    verifyContentAndContinueToNextPage(){
       prepareForUrl(this.requests['SHOW_VEVRAA']);
       this.continueButton.should('be.visible');
       this.continueButton.click();
       waitForPage(this.requests['SHOW_VEVRAA']);
    }
}

export default new IdentificationHomePage();

    