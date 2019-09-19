export const testMode = Cypress.env('TEST_MODE');
export const baseUrl = Cypress.config('baseUrl');
export const migrateUrl = Cypress.env('MIGRATE_URL');
export const migrateModeUrl = `${migrateUrl}/settings`;

// sets value of window.prompt and reloads page
export const setPromptValue = value => {
  cy.log(`Set window.prompt to "${value}"`).then(() => {
    cy.removeAllListeners('window:before:load');
    cy.on('window:before:load', win => {
      cy.stub(win, 'prompt').returns(value);
    });
  });

  cy.reload();

  cy.wait(7000);
};
