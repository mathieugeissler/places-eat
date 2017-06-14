import { PlacesEatPage } from './app.po';

describe('places-eat App', () => {
  let page: PlacesEatPage;

  beforeEach(() => {
    page = new PlacesEatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
