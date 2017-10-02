import { MeanClienPage } from './app.po';

describe('mean-clien App', () => {
  let page: MeanClienPage;

  beforeEach(() => {
    page = new MeanClienPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
