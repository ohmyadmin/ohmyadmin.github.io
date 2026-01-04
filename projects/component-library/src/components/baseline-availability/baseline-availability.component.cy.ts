import {mount} from 'cypress/angular-zoneless'
import {BaselineAvailabilityComponent} from 'component-library';

describe('BaselineAvailability', () => {
  it('All Supported', () => {
    mount(`<lib-baseline-availability [supported]="['chrome', 'firefox', 'edge', 'safari']"/>`, {
      imports: [
        BaselineAvailabilityComponent
      ]
    });

    cy.get('.baseline-availability')
      .should('exist');

    cy.get('.baseline-availability .avatar-group')
      .should('exist')
      .should('have.length', 4);

    cy.get('.baseline-availability .avatar-group .avatar')
      .should('exist')
      .should('have.length', 8);

    cy.wait(1000);

    cy.get('.baseline-availability')
      .screenshot('baseline-availability/baseline-availability-all-supported.png', {
        overwrite: true,
        padding: 10
      });
  });

  it('Mixed Support', () => {
    mount(`<lib-baseline-availability [supported]="['chrome', 'edge']"/>`, {
      imports: [
        BaselineAvailabilityComponent
      ]
    });

    cy.get('.baseline-availability')
      .should('exist');

    cy.get('.baseline-availability .avatar-group')
      .should('exist')
      .should('have.length', 4);

    cy.get('.baseline-availability .avatar-group .avatar')
      .should('exist')
      .should('have.length', 8);

    cy.wait(1000);

    cy.get('.baseline-availability')
      .screenshot('baseline-availability/baseline-availability-mixed-support.png', {
        overwrite: true,
        padding: 10
      });
  });

  it('All Unsupported', () => {
    mount(`<lib-baseline-availability />`, {
      imports: [
        BaselineAvailabilityComponent
      ]
    });

    cy.get('.baseline-availability')
      .should('exist');

    cy.get('.baseline-availability .avatar-group')
      .should('exist')
      .should('have.length', 4);

    cy.get('.baseline-availability .avatar-group .avatar')
      .should('exist')
      .should('have.length', 8);

    cy.wait(1000);

    cy.get('.baseline-availability')
      .screenshot('baseline-availability/baseline-availability-all-unsupported.png', {
        overwrite: true,
        padding: 10
      });
  });
})
