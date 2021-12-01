describe('Landing Page Specs', () => {
  it('Does not contain a div', () => {
    cy.visit('index.html');
    cy.get('div').should('not.exist');
  });
  it('has image alt tags', () => {
    cy.get('img').should('have.attr', 'alt')
  });
  it('has h1, h2 & h3 tags with text', () => {
    cy.get('h1').should('have.text', 'Horiseon');
    cy.get('h2').first().should('have.text', 'Search Engine Optimization');
    cy.get('h3').first().should('have.text', 'Lead Generation');
  });
  it('has a concise title tag', () => {
    cy.title().its('length').should('lt', 255)
  });
})
