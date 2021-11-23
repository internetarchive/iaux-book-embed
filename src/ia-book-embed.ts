import { html, css, LitElement, CSSResult } from 'lit-element';
import { property, customElement } from 'lit/decorators.js';
import { archiveLogo } from './assets/archive-logo';

@customElement('ia-book-embed')
export class IABookEmbed extends LitElement {
  @property({ type: String }) identifier = 'goody';

  @property({ type: String }) bookTitle = 'this is default title';

  render() {
    return html`
      <a class='embed-link' href=/details/${this.identifier}>
        <span>${archiveLogo}</span>
        <span class='title'>${this.bookTitle}</span>
      </a>
    `;
  }

  static get styles(): CSSResult {
    const embedBGColorCss = css`var(--secondaryBGColor, #222)`;
    const embedTextColorCss = css`var(--primaryTextColor, #fff)`;

    return css`
      :host {
        padding: 0 10px;
        background: ${embedBGColorCss};
        display: flex;
        justify-content: center;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }
      .embed-link {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: ${embedTextColorCss};
        font-size: 1.4rem;
        height: 3.4rem;
      }
      .embed-link .title {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .embed-link svg {
        margin-right: 0.5rem;
      }
      .embed-link:hover {
        text-decoration: underline;
      }
    `;
  }
}
