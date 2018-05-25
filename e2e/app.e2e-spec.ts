import { AnychartAngular5Page } from './app.po';

describe('anychart-angular5 App', () => {
  let page: AnychartAngular5Page;

  beforeEach(() => {
    page = new AnychartAngular5Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
