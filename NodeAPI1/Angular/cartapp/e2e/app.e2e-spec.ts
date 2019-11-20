import { CartappPage } from './app.po';

describe('cartapp App', () => {
  let page: CartappPage;

  beforeEach(() => {
    page = new CartappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
