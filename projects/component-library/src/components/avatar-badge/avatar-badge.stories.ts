import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {AvatarComponent, AvatarBadgeComponent} from 'component-library';
import {tailwind_sizes_values} from 'component-library/constants/tailwind-sizes';

const meta: Meta<AvatarBadgeComponent> = {
  component: AvatarBadgeComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AvatarComponent
      ]
    })
  ],
  tags: ['autodocs', 'avatar'],
  argTypes: {
    size: {
      options: tailwind_sizes_values,
      control: 'select'
    },
    status: {
      type: 'string',
      options: ['away', 'busy', 'offline', 'online'],
      control:'select'
    }
  }
}

export default meta;

type Story = StoryObj<AvatarBadgeComponent>;
export const Sample: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.status ? `[status]="'${args.status}'"` : ''
    ]
    return {
      template: `
        <lib-avatar-badge ${inputs.join(' ')}>
          <lib-avatar libRandomMilkyBackground name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
        </lib-avatar-badge>
      `
    }
  },
  args: {}
};
