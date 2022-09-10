import { html } from 'lit';

export function renderTemplate(this: any) {
    return html`
        <p>${this.count}</p>
        <button @click=${this.OnClick} part="button">
            SUMA
        </button>
    `;
}