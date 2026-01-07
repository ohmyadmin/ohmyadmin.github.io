import {mount} from 'cypress/angular-zoneless'
import {AvatarComponent, AvatarBadgeWithMaskComponent} from 'component-library';

const imports = [
  AvatarComponent,
  AvatarBadgeWithMaskComponent
]

describe('AvatarBadgeWithMaskComponent', () => {
  it('Simple', () => {
    mount(`<lib-avatar-badge-with-mask><lib-avatar name="Jane Doe" /></lib-avatar-badge-with-mask>`, {
      imports
    });

    cy.get('.avatar-badge')
      .should('exist')
      .should('be.visible');

    cy.get('.avatar-badge')
      .children()
      .should('have.length', 2);

    cy.get('.avatar-badge')
      .children()
      .should('have.length', 2);

    cy.get('.avatar-badge .avatar')
      .should('have.length', 1)
      .should('exist')
      .should('be.visible');

    cy.get('.avatar-badge .badge')
      .should('have.length', 1)
      .should('exist')
      .should('be.visible');
  });

  it('Responsive Test (height is constrained)', () => {
    mount(`
      <div class='container' style="height:30px;width:200px;display:flex;container-type:size;background:blue;justify-items:start;align-items: start;">
        <lib-avatar-badge-with-mask><lib-avatar name="Jane Doe" /></lib-avatar-badge-with-mask>
      </div>
    `, {
      imports
    });
  })

  it('Responsive Test (width is constrained)', () => {
    mount(`
      <div class='container' style="width:30px;height:200px;display:flex;container-type:size;background:blue;justify-items:start;align-items: start;">
        <lib-avatar-badge-with-mask><lib-avatar name="Jane Doe" /></lib-avatar-badge-with-mask>
      </div>
    `, {
      imports
    });
  })
})
