describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });
});

describe('External link', () => {
  it('should link to a valid link', () => {
    cy.visit('http://localhost:3000/');

    cy.get('a[href*="/StoffelFinance"]')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noopener noreferrer');

    cy.get('a[href*="/StoffelFinance"]').then((link) => {
      cy.request(link.prop('href')).its('status').should('eq', 200);
    });
  });
});

describe('Internal link', () => {
  it('should be navigated to a correct page', () => {
    cy.visit('http://localhost:3000/');

    cy.get('a[href*="/dashboard"]').click();

    cy.url().should('include', '/dashboard');

    cy.get('h1').contains('Dashboard');
  });
});
