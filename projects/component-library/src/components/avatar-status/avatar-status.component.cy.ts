import {mount} from 'cypress/angular-zoneless'
import {AvatarComponent, AvatarStatusComponent} from 'component-library';

const imports = [
  AvatarComponent,
  AvatarStatusComponent
]

describe('AvatarBadgeComponent', () => {
  it('Simple', () => {
    mount(`<lib-avatar-status><lib-avatar name="Jane Doe" /></lib-avatar-status>`, {
      imports
    });

    cy.get('.avatar-status')
      .should('exist')
      .should('be.visible');

    cy.get('.avatar-status')
      .children()
      .should('have.length', 2);

    cy.get('.avatar-status')
      .children()
      .should('have.length', 2);

    cy.get('.avatar-status .avatar')
      .should('have.length', 1)
      .should('exist')
      .should('be.visible');

    cy.get('.avatar-status .badge')
      .should('have.length', 1)
      .should('exist')
      .should('be.visible');
  });

  it('Responsive Test (height is constrained)', () => {
    mount(`
      <div class='container' style="height:30px;width:200px;display:flex;container-type:size;background:blue;justify-items:start;align-items: start;">
        <lib-avatar-status><lib-avatar name="Jane Doe" /></lib-avatar-status>
      </div>
    `, {
      imports
    });
  })

  it('Responsive Test (width is constrained)', () => {
    mount(`
      <div class='container' style="width:30px;height:200px;display:flex;container-type:size;background:blue;justify-items:start;align-items: start;">
        <lib-avatar-status><lib-avatar name="Jane Doe" /></lib-avatar-status>
      </div>
    `, {
      imports
    });
  })
})
