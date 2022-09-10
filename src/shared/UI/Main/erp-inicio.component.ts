import { LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { stylesCSS } from './erp-main.component.css'
import { renderTemplate } from './erp-main.component.html';

@customElement('erp-main-container')
export class ErpMainContainer extends LitElement {

    static styles = stylesCSS;

    @property()
    templateHTML = renderTemplate.bind(this);
    @property()
    docsHint = 'Click on the Vite and Lit logos to learn more'
    @property({ type: Number })
    count = 0

    render() {
        return this.templateHTML();
    }

    OnClick() {
        this.count++;
        this.docsHint = 'Texto cambiado';
    }

}