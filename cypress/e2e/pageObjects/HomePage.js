import BasePage from './BasePage'
import "cypress-real-events/support";
import {preparePage,waitForPage} from '../../support/util';

class HomePage extends BasePage {
	constructor(){
        super();
    }

	isPageLoaded() {
		cy.title().should('eq', 'Iodine - The Future of AI-Enabled Intelligent Care');
	}

	openCareersPage() {
		preparePage(this.requests['CAREERS_HOME']);
		// Bring the 'Company's drop down
		this.realMouseClick(this.getElementContaining('a', 'Company'));
	    
	    // Remove target attribute of Careers - to prevent the Careers page from opening in a new tab
	    // And click 'Careers' option 
	    // this.click(this.removeTargetAttr(this.getElementContaining('.menu-item', 'Careers')));
	    cy.get('.menu-item').contains('Careers').invoke('removeAttr', 'target').click();
	    // Verify the newly loaded page title
	    // cy.title().should('eq', 'Careers - Iodine');
	    this.validateProperty('title', 'eq', 'Careers - Iodine');
	    // Verify page url
	    this.validateProperty('url', 'include', 'https://iodinesoftware.com/careers-2/');
	    // cy.url().should('include', 'https://iodinesoftware.com/careers-2/');
	    waitForPage(this.requests['CAREERS_HOME']);
	}
}

export default new HomePage();