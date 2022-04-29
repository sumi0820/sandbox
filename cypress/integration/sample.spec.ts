describe('External link', () => {
  it('should link to a valid link', () => {
    cy.visit('http://localhost:3000/');

    // external link1
    cy.get('[data-test="external-link1"]')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noopener noreferrer')
      .should('have.attr', 'href')
      .and('include', 'twitter.com/StoffelFinance');

    cy.get('[data-test="external-link1"]').then((link) => {
      cy.request(link.prop('href')).its('status').should('eq', 200);
    });

    // external link2
    cy.get('[data-test="external-link2"]')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noopener noreferrer')
      .should('have.attr', 'href')
      .and('include', '/docs.stoffelmpc.com');

    cy.get('[data-test="external-link2"]').then((link) => {
      cy.request(link.prop('href')).its('status').should('eq', 200);
    });
  });
});

describe('Internal link', () => {
  it('should be navigated to a correct page', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-test="internal-link1"]').click();

    cy.url().should('include', '/dashboard');

    cy.get('h1').contains('Dashboard');
  });
});
