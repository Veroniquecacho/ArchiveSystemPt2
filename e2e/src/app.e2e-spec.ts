import { AppPage } from './app.po';
import { browser, logging , by , element} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

   // it('', ()=>{
  // });
  // 1.0: Verify that I can go to the login component
  // 1.1: Login as Admin and go to the right place
  // 1.2: Login as user and go to the right place

  it('1.0: Verify that I can go to the login component', () => {
    browser.get(('/home/login'))
    let loginText = element(by.id('login')).getText();
    expect(loginText).toEqual('Login');
  });


  it('1.1: Login as admin and go to the right place', ()=>{
    element(by.id('username')).sendKeys('admin');
    element(by.id('password')).sendKeys('admin');

    element(by.id('submitLogin')).click();

    expect(browser.getCurrentUrl()).toContain('/home/admin/equipment');
  });



  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
