describe('Registrace', () => {
  it.only('Vyplnění registračního formuláře', () => {
    cy.visit('http://tredgate.com/eshop/index.php?route=account/register')

    // Vyplnění textových polí
    cy.get('#input-firstname').type('Ivana')
    cy.get('#input-lastname').type('Maříková')
    cy.get('#input-email').type('marikova.ivana@gmail.com.com')
    cy.get('#input-telephone').type('776274584')
    cy.get('#input-password').type('1234')
    cy.get('#input-confirm').type('1234')

    // Kliknutí na tlačítko Continue
    cy.get('[type="submit"]').click()

    // Aplikace ukáže chybu
    cy.get('.alert.alert-danger').should('be.visible')
  })
})
