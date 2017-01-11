import { ControleAlunosPage } from './app.po';

describe('controle-alunos App', function() {
  let page: ControleAlunosPage;

  beforeEach(() => {
    page = new ControleAlunosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
