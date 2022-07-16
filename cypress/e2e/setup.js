const SETUP_CONSTANT = require('../fixtures/setup.json');

class Setup {
	setViewport() {
		cy.viewport(SETUP_CONSTANT.viewport.x, SETUP_CONSTANT.viewport.y);
		cy.wait(1000);
	}

	visitHomePage() {
		cy.visit(SETUP_CONSTANT.homepageUrl);
	}

	visitCareersPage() {
		cy.visit(SETUP_CONSTANT.careersPageUrl);
	}
}

export default new Setup();