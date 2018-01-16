import { RxjsChartPage } from './app.po';

describe('rxjs-chart App', () => {
  let page: RxjsChartPage;

  beforeEach(() => {
    page = new RxjsChartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
