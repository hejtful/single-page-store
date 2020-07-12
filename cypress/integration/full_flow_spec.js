describe('Full Flow of the App', () => {
  const title = 'Test product title';
  const price = '1.25';
  const image =
    'https://images.dog.ceo/breeds/setter-gordon/n02101006_6126.jpg';
  const description =
    'Product description, not too long, not too short. Not too good either.';

  it('adds a new item to inventory and showcase', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=inventory]').get('input[name=title]').type(title);
    cy.get('[data-cy=inventory]').get('input[name=price').type(price);
    cy.get('[data-cy=inventory]').get('input[name=image]').type(image);
    cy.get('[data-cy=inventory]')
      .get('textarea[name=description]')
      .type(description);

    cy.get('[data-cy=inventory]').contains('Add Product').click();

    cy.get('[data-cy=showcase]')
      .get(`img[alt="${title} product"]`)
      .should('be.visible');
    cy.get('[data-cy=showcase]').contains('h4', title);
    cy.get('[data-cy=showcase]').contains('span', `${price}$`);
    cy.get('[data-cy=showcase]').contains('p', description);
    cy.get('[data-cy=showcase]').contains('button', 'Add to Order');
  });

  it('adds an item from the showcase to the cart', () => {
    cy.contains('button', 'Add to Order').click();

    cy.get('[data-cy=cart]').contains('h4', title);
    cy.get('[data-cy=cart]').contains('span', `${price}$`);
    cy.get('[data-cy=cart]').contains('span', 'Quantity');
    cy.get('[data-cy=cart]').contains('span', '1');
    cy.get('[data-cy=cart]').contains('button', 'X');
    cy.get('[data-cy=cart]').contains('div', `${price}$`);
  });

  it('increments quantity of the item in the cart on each additional click', () => {
    cy.contains('button', 'Add to Order').click();
    cy.contains('button', 'Add to Order').click();

    cy.get('[data-cy=cart]').contains('div', `${price * 3}$`);
  });

  it('changes item in showcase and cart when it is changed in inventory, and displays a notification', () => {
    cy.get('[data-cy=inventory]').get('input').first().type(' new');

    cy.get('[data-cy=showcase]').contains('h4', `${title} new`);
    cy.get('[data-cy=cart]').contains('h4', `${title} new`);
    cy.contains(
      '.Toastify__toast-body',
      `The title of the ${title} item in your cart has changed.`
    ).should('be.visible');

    cy.get('[data-cy=inventory]')
      .get('input')
      .first()
      .type('{backspace}{backspace}{backspace}{backspace}');

    cy.get('[data-cy=showcase]').contains('h4', title);
    cy.get('[data-cy=cart]').contains('h4', title);
    cy.contains(
      '.Toastify__toast-body',
      `The title of the ${title} item in your cart has changed.`,
      { timeout: 6000 }
    ).should('not.be.visible');
  });

  it('removes the item from the cart', () => {
    cy.get('[data-cy=cart]').contains('button', 'X').click();

    cy.get('[data-cy=cart]').contains('h4', title).should('not.exist');
    cy.get('[data-cy=cart]').contains('span', `${price}$`).should('not.exist');
    cy.get('[data-cy=cart]').contains('span', 'Quantity').should('not.exist');
    cy.get('[data-cy=cart]').contains('span', '1').should('not.exist');
    cy.get('[data-cy=cart]').contains('button', 'X').should('not.exist');
    cy.get('[data-cy=cart]').contains('div', `${price}$`).should('not.exist');
  });

  it('removes item from showcase and cart when it is removed from inventory, and displays a notification', () => {
    cy.contains('button', 'Add to Order').click();
    cy.get('[data-cy=inventory]').contains('Remove Product').click();

    cy.get('[data-cy=showcase]').contains('h4', title).should('not.exist');
    cy.get('[data-cy=cart]').contains('h4', title).should('not.exist');
    cy.contains(
      '.Toastify__toast-body',
      `${title} item is no longer available and it has been removed from your cart.`
    ).should('be.visible');
  });
});
