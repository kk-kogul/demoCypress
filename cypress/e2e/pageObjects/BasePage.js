import "cypress-xpath";
const requests = require('../../fixtures/requestHeader.json');
const htmlConstants = require('../../fixtures/htmlConstants.json');
const pageConstants = require('../../fixtures/pageConstants.json');

class BasePage {
	constructor() {
        	this.requests = requests;
        	this.HTML_CONSTANTS = htmlConstants;
        	this.PAGE_CONSTANTS = pageConstants;
    }

	// abstract method to be implemented by child classes
	isPageLoaded() {
		// return false;
	}

	getElement(selector) {
        return cy.get(selector);
    }

    getElementContaining(selector, contains) { 
    	return this.getElement(selector).contains(contains);
    }

    getElementFromFrame(frame, element){
        return cy.switchToIframes(frame).find(element);
    }

    getElementFromFrameWithXpath(frame,element){
        return cy.switchToIframes(frame).xpath(element);
    }

    removeTargetAttr(element) {
        return element.invoke(this.HTML_CONSTANTS.REMOVE_ATTR, this.HTML_CONSTANTS.TARGET);
    }

    realMouseClick(element) {
        return element.realClick(this.HTML_CONSTANTS.MOUSE);
    }

    click(element) {
    	return element.click();
    }

    validateProperty(property, condition, value) {
    	if (property == this.HTML_CONSTANTS.TITLE) {
    		cy.title().should(condition, value);	
    	} else if (property == URL) {
    		cy.url().should(condition, value);
    	}
    }
}

export default BasePage;