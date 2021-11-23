import { html, fixture, expect } from '@open-wc/testing';

import type { IABookEmbed } from '../src/ia-book-embed';
import '../src/ia-book-embed';

describe('IABookEmbed', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<IABookEmbed>(
      html`<ia-book-embed></ia-book-embed>`
    );

    expect(el.identifier).to.equal('goody');
    expect(el.bookTitle).to.equal('this is default title');
  });
});
