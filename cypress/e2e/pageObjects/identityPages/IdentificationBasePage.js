import BasePage from '../BasePage';

export default class IdentificationBasePage extends BasePage {
    constructor(){
        super();
        this.FRAME = this.PAGE_CONSTANTS['IFRAME'];
    }

    get pageHeader(){
        return this.getElementFromFrame(this.FRAME,'#gnewton-vevraa-form > .gnewtonForm-header > div');
    }

    get continueButton(){
        return this.getElementFromFrame(this.FRAME,'#gnewton-submit');
    }
}