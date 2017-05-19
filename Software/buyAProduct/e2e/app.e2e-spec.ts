import { BuyAProductPage } from './app.po';

describe('buy-aproduct App', () => {
  let page: BuyAProductPage;

  beforeEach(() => {
    page = new BuyAProductPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
