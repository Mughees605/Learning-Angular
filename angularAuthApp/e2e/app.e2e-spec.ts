import { AngularAuthAppPage } from './app.po';

describe('angular-auth-app App', () => {
  let page: AngularAuthAppPage;

  beforeEach(() => {
    page = new AngularAuthAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
