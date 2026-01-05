import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {AvatarComponent, AvatarStatusComponent} from 'component-library';
import {tailwind_sizes_values} from 'component-library/constants/tailwind-sizes';

const meta: Meta<AvatarStatusComponent> = {
  component: AvatarStatusComponent,
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

type Story = StoryObj<AvatarStatusComponent>;
export const Sample: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.status ? `[status]="'${args.status}'"` : ''
    ].join(' ')
    return {
      template: `
        <lib-avatar-status ${inputs}>
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
        </lib-avatar-status>
      `
    }
  }
};

export const AllStatuses: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : ''
    ].join(' ')
    return {
      template: `
        <lib-avatar-status ${inputs}>
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
        </lib-avatar-status>
        <lib-avatar-status ${inputs} status="away">
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
        </lib-avatar-status>
        <lib-avatar-status ${inputs} status="busy">
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
        </lib-avatar-status>
        <lib-avatar-status ${inputs} status="online">
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
        </lib-avatar-status>
      `
    }
  }
};

export const AvatarWithTextOnly: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.status ? `[status]="'${args.status}'"` : ''
    ].join(' ')
    return {
      template: `
        <lib-avatar-status ${inputs}>
          <lib-avatar name="Craig Wayne" />
        </lib-avatar-status>
      `
    }
  }
};

export const AllStatusesWithTextOnly: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : ''
    ].join(' ')
    return {
      template: `
        <lib-avatar-status ${inputs}>
          <lib-avatar name="Craig Wayne" />
        </lib-avatar-status>
        <lib-avatar-status ${inputs} status="away">
          <lib-avatar name="Craig Wayne" />
        </lib-avatar-status>
        <lib-avatar-status ${inputs} status="busy">
          <lib-avatar name="Craig Wayne" />
        </lib-avatar-status>
        <lib-avatar-status ${inputs} status="online">
          <lib-avatar name="Craig Wayne" />
        </lib-avatar-status>
      `
    }
  }
};
