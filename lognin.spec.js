describe('Login Page', () => {
    it('should allow users to log in', () => {
      cy.visit('http://localhost:3000/login.html');  // Replace with the correct path to your login page
      cy.get('input[name="username"]').type('testuser');
      cy.get('input[name="password"]').type('password123');
      cy.get('button[type="submit"]').click();
      // Add assertion to check if login was successful
      cy.url().should('include', '/dashboard'); // Example
    });
  });
  