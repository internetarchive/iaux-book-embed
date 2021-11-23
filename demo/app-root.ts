import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { IABookEmbed } from '../src/ia-book-embed';

@customElement('app-root')
export class AppRoot extends LitElement {
  @query('ia-book-embed') embedBar!: IABookEmbed;

  setShortTitle() {
    this.embedBar.bookTitle = 'this is short title';
  }

  setLongTitle() {
    this.embedBar.bookTitle =
      'Contemporary Black biography. Volume 39 : profiles from the interContemporary Black biography. Volume 39 : profiles from the international Black community';
  }

  render() {
    return html`
      <div class="ia-book-embed-container">
        <ia-book-embed> </ia-book-embed>
      </div>

      <br />
      <br />

      <fieldset>
        <legend>Dev try for lending banner</legend>
        <button @click=${this.setShortTitle}>set short title</button>
        <button @click=${this.setLongTitle}>set long title</button>
      </fieldset>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }
    fieldset {
      width: 300px;
    }
  `;
}
