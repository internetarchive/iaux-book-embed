import { html, fixture, expect } from '@open-wc/testing';

import '../src/ia-book-embed';
import type { IABookEmbed } from '../src/ia-book-embed';

describe('IABookEmbed', () => {
  it('has a default identifier and bookTitle', async () => {
    const el = await fixture<IABookEmbed>(
      html`<ia-book-embed></ia-book-embed>`
    );

    expect(el.identifier).to.equal('goody');
    expect(el.bookTitle).to.equal('this is default title');
  });

  it('check details page link for embedded book', async () => {
    const el = await fixture<IABookEmbed>(
      html`<ia-book-embed></ia-book-embed>`
    );
    const link = el.shadowRoot?.querySelector('a');
    await el.updateComplete;

    expect(link?.getAttribute('href')).to.equal('/details/goody');
  });
});
