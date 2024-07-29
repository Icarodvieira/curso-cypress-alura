describe('Tela de cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a','Cadastrar').click();
    cy.get('input[name="nome"]').type('Ana de Jesus');
    cy.get('input[name="email"]').type("novoteste@email.com");
    cy.get('input[name="password"]').type("Senha123");
    cy.get('input[name = "confirm_password"]').type("Senha123");
    cy.contains('button','Cadastrar').click();
  })
})

describe('Página de Pets disponíveis', () => {
  it('Acessar a página principal e clicar no botão Ver pets disponíveis para adoção', ()=> {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a','Ver pets disponíveis para adoção').click();
  })
})

describe('Botões do cabeçalho', () => {
  it('Abrir página principal e testar botão Home no cabeçalho', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('a[class = "header__home').click();
  })
  it('Abrir página principal e testar botão Message no cabeçalho', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.header__message').click();
  })
})

describe('Acessar página /login', ()=>{
  it('Visitar página /login', ()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/login');
  })
})

describe('Acessar página /home', ()=>{
  it('Visitar página /home', ()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
  })
})

describe('Acessar home e clicar em botão de responsável', ()=>{
  it('Visitar página /home e clicar em botão de resposável', ()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.get('.header__message').click();
  })
})