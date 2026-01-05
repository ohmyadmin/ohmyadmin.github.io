import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {AvatarComponent, AvatarBadgeComponent} from 'component-library';
import {tailwind_sizes_values} from 'component-library/constants/tailwind-sizes';
import {tailwind_sizes} from 'component-library/enums/tailwind-sizes.enum';

const meta: Meta<AvatarBadgeComponent> = {
  component: AvatarBadgeComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AvatarComponent
      ]
    })
  ],
  tags: ['autodocs', 'avatar', 'status', 'presence'],
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
    ].join(' ')
    return {
      template: `
        <lib-avatar-badge ${inputs}>
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
        </lib-avatar-badge>
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
        <lib-avatar-badge ${inputs}>
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
        </lib-avatar-badge>
        <lib-avatar-badge ${inputs} status="away">
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
        </lib-avatar-badge>
        <lib-avatar-badge ${inputs} status="busy">
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
        </lib-avatar-badge>
        <lib-avatar-badge ${inputs} status="online">
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
        </lib-avatar-badge>
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
        <lib-avatar-badge ${inputs}>
          <lib-avatar name="Craig Wayne" />
        </lib-avatar-badge>
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
        <lib-avatar-badge ${inputs}>
          <lib-avatar name="Craig Wayne" />
        </lib-avatar-badge>
        <lib-avatar-badge ${inputs} status="away">
          <lib-avatar name="Craig Wayne" />
        </lib-avatar-badge>
        <lib-avatar-badge ${inputs} status="busy">
          <lib-avatar name="Craig Wayne" />
        </lib-avatar-badge>
        <lib-avatar-badge ${inputs} status="online">
          <lib-avatar name="Craig Wayne" />
        </lib-avatar-badge>
      `
    }
  }
};

export const DoNotDisturb: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.status ? `[status]="'${args.status}'"` : ''
    ].join(' ')
    return {
      template: `
        <lib-avatar-badge ${inputs}>
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <svg ngProjectAs="badge" viewBox="0 -960 960 960" fill="currentColor">
            <path d="M200-440v-80h560v80H200Z"/>
          </svg>
        </lib-avatar-badge>
      `
    }
  },
  args: {
    status: 'busy',
    size: tailwind_sizes['4xl']
  }
};

export const Birthday: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.status ? `[status]="'${args.status}'"` : ''
    ].join(' ')
    return {
      template: `
        <lib-avatar-badge ${inputs} style="--status-color: white">
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <img ngProjectAs="badge" src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f382/emoji.svg" style="box-shadow: 0 1px 2px rgba(60, 64, 67, .3), 0 1px 3px 1px rgba(60, 64, 67, .15);"/>
        </lib-avatar-badge>
      `
    }
  },
  args: {
    status: 'busy',
    size: tailwind_sizes['4xl']
  }
};

export const AddAction: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.status ? `[status]="'${args.status}'"` : ''
    ].join(' ')
    return {
      template: `
        <lib-avatar-badge ${inputs}>
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <svg ngProjectAs="badge" viewBox="0 -960 960 960" fill="currentColor">
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
          </svg>
        </lib-avatar-badge>
      `
    }
  },
  args: {
    status: 'online',
    size: tailwind_sizes['4xl']
  }
};

export const SelectedBlue: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.status ? `[status]="'${args.status}'"` : ''
    ].join(' ')
    return {
      template: `
        <lib-avatar-badge ${inputs} style="--status-color: #a1bdf0; --border-color: #a1bdf0">
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="true"/>
          <svg ngProjectAs="badge" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
          </svg>
        </lib-avatar-badge>
      `
    }
  },
  args: {
    status: 'online',
    size: tailwind_sizes['4xl']
  }
};

export const SelectedDarkBlue: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.status ? `[status]="'${args.status}'"` : ''
    ].join(' ')
    return {
      template: `
        <lib-avatar-badge ${inputs} style="--status-color: rgb(0, 109, 234); --border-color: rgb(0, 109, 234)">
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="true"/>
          <svg ngProjectAs="badge" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
          </svg>
        </lib-avatar-badge>
      `
    }
  },
  args: {
    status: 'online',
    size: tailwind_sizes['4xl']
  }
};

export const SelectedDarkBlueAlternate: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.status ? `[status]="'${args.status}'"` : ''
    ].join(' ')
    return {
      template: `
        <lib-avatar-badge ${inputs} style="--status-color: rgb(0, 109, 234); --border-color: rgb(0, 109, 234)">
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="true"/>
          <svg ngProjectAs="badge" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" style="border-color: white">
            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
          </svg>
        </lib-avatar-badge>
      `
    }
  },
  args: {
    status: 'online',
    size: tailwind_sizes['4xl']
  }
};
