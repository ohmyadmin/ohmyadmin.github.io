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
      options: ['away', 'busy', 'focus', 'offline', 'online', 'reachable'],
      control:'select'
    },
    subtract: {
      control: 'boolean'
    }
  },
  args: {
    subtract: true
  }
}

export default meta;

type Story = StoryObj<AvatarBadgeComponent>;
export const Sample: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.status ? `[status]="'${args.status}'"` : '',
      args.subtract ? '[subtract]="true"' : '[subtract]="false"'
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
      args.size ? `[size]="'${args.size}'"` : '',
      args.subtract ? '[subtract]="true"' : '[subtract]="false"'
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
        <lib-avatar-badge ${inputs} status="focus">
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
      args.status ? `[status]="'${args.status}'"` : '',
      args.subtract ? '[subtract]="true"' : '[subtract]="false"'
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
      args.size ? `[size]="'${args.size}'"` : '',
      args.subtract ? '[subtract]="true"' : '[subtract]="false"'
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
      args.status ? `[status]="'${args.status}'"` : '',
      args.subtract ? '[subtract]="true"' : '[subtract]="false"'
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
  parameters: {
    docs: {
      description: {
        story: 'Based off google contacts birthday avatar. See: https://contacts.google.com'
      }
    }
  },
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.status ? `[status]="'${args.status}'"` : '',
      args.subtract ? '[subtract]="true"' : '[subtract]="false"'
    ].join(' ')
    return {
      template: `
        <lib-avatar-badge ${inputs} style="--status-color: white">
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <img alt="birthday icon" ngProjectAs="badge" src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f382/emoji.svg" style="box-shadow: 0 1px 2px rgba(60, 64, 67, .3), 0 1px 3px 1px rgba(60, 64, 67, .15);"/>
        </lib-avatar-badge>
      `
    }
  },
  args: {
    size: tailwind_sizes['4xl']
  }
};

export const AddAction: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Based off a google contact, when contact card does not have a profile picture. See: https://contacts.google.com'
      }
    }
  },
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.status ? `[status]="'${args.status}'"` : '',
      args.subtract ? '[subtract]="true"' : '[subtract]="false"'
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

export const Selected: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.status ? `[status]="'${args.status}'"` : '',
      args.subtract ? '[subtract]="true"' : '[subtract]="false"'
    ].join(' ')
    return {
      template: `
        <lib-avatar-badge ${inputs}>
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="true"/>
          <svg ngProjectAs="badge" viewBox="0 -960 960 960" fill="currentColor">
            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
          </svg>
        </lib-avatar-badge>
      `
    }
  },
  args: {
    status: 'focus',
    size: tailwind_sizes['4xl']
  }
};
export const LinkedInReachableStatus: Story = {
  storyName: 'LinkedIn Reachable Status',
  parameters: {
    docs: {
      description: {
        story: 'Based on LinkedIn\'s reachable status'
      }
    }
  },
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.status ? `[status]="'${args.status}'"` : '',
      args.subtract ? '[subtract]="true"' : '[subtract]="false"'
    ].join(' ')
    return {
      template: `
        <lib-avatar-badge ${inputs}>
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <svg ngProjectAs="badge" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="8" fill="white" stroke="#38A06C" stroke-width="4"/>
          </svg>
        </lib-avatar-badge>
      `
    }
  },
  args: {
    status: 'reachable',
    size: tailwind_sizes['4xl']
  }
};
