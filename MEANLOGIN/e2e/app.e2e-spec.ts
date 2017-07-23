import { MEANLOGINPage } from './app.po';

describe('meanlogin App', () => {
  let page: MEANLOGINPage;

  beforeEach(() => {
    page = new MEANLOGINPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
