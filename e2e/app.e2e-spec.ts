import { Angular2CrudAuthRoutingPage } from './app.po';

describe('angular2-crud-auth-routing App', function() {
  let page: Angular2CrudAuthRoutingPage;

  beforeEach(() => {
    page = new Angular2CrudAuthRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
