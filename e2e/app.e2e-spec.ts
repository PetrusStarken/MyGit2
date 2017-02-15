import { MyGit2Page } from './app.po';

describe('my-git2 App', function() {
  let page: MyGit2Page;

  beforeEach(() => {
    page = new MyGit2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
