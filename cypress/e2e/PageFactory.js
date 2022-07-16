import BasePage from './pageObjects/BasePage'
import HomePage from './pageObjects/HomePage'
import CareersPage from './pageObjects/CareersPage'
import JobDescriptionPage from './pageObjects/JobDescriptionPage'
import SponsorshipPage from './pageObjects/SponsorshipPage'

import IdentificationHomePage from './pageObjects/identityPages/IdentificationHomePage'
import GenderRaceIdentityPage from './pageObjects/identityPages/GenderRaceIdentityPage'
import VeteranIdentityPage from './pageObjects/identityPages/VeteranIdentityPage'
import DisabilityIdenitificationPage from './pageObjects/identityPages/DisabilityIdenitificationPage'
import CandidateInformationPage from './pageObjects/identityPages/CandidateInformationPage'


class PageFactory {
	get homePage() {
		return HomePage;
	}

	get careersPage() {
		return CareersPage;
	}

	get jobDescriptionPage() {
		return JobDescriptionPage;
	}

	get sponsorshipPage() {
		return SponsorshipPage;
	}

	get identificationHomePage() {
		return IdentificationHomePage;
	}

	get genderRaceIdentityPage() {
		return GenderRaceIdentityPage;
	}

	get veteranIdentityPage() {
		return VeteranIdentityPage;
	}

	get disabilityIdenitificationPage() {
		return DisabilityIdenitificationPage;
	}

	get candidateInfoPage() {
		return CandidateInformationPage;	
	}	
}

export default new PageFactory();