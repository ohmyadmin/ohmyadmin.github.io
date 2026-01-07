import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {AvatarBadgeWithMaskComponent, AvatarComponent} from 'component-library';
import {tailwind_sizes_values} from 'component-library/constants/tailwind-sizes';
import {tailwind_sizes} from 'component-library/enums/tailwind-sizes.enum';

const meta: Meta<AvatarBadgeWithMaskComponent> = {
  component: AvatarBadgeWithMaskComponent,
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
      control: 'select'
    },
    mode: {
      control: 'select',
      options: ['overlay', 'subtract']
    }
  },
  args: {
    mode: 'notch'
  }
}

export default meta;

type Story = StoryObj<AvatarBadgeWithMaskComponent>;
export const Sample: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.status ? `[status]="'${args.status}'"` : '',
      args.mode ? `[mode]="'${args.mode}'"` : ''
    ].join(' ')
    return {
      template: `
        <lib-avatar-badge-with-mask ${inputs}>
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
        </lib-avatar-badge-with-mask>
      `
    }
  }
};

export const AllStatuses: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.mode ? `[mode]="'${args.mode}'"` : ''
    ].join(' ')
    return {
      template: `
        <lib-avatar-badge-with-mask ${inputs}>
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
        </lib-avatar-badge-with-mask>
        <lib-avatar-badge-with-mask ${inputs} status="away">
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
        </lib-avatar-badge-with-mask>
        <lib-avatar-badge-with-mask ${inputs} status="busy">
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
        </lib-avatar-badge-with-mask>
        <lib-avatar-badge-with-mask ${inputs} status="focus">
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
        </lib-avatar-badge-with-mask>
        <lib-avatar-badge-with-mask ${inputs} status="online">
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
        </lib-avatar-badge-with-mask>
      `
    }
  }
};

export const AvatarWithTextOnly: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.status ? `[status]="'${args.status}'"` : '',
      args.mode ? `[mode]="'${args.mode}'"` : ''
    ].join(' ')
    return {
      template: `
        <lib-avatar-badge-with-mask ${inputs}>
          <lib-avatar name="Craig Wayne" />
        </lib-avatar-badge-with-mask>
      `
    }
  }
};


export const AllStatusesWithTextOnly: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.mode ? `[mode]="'${args.mode}'"` : ''
    ].join(' ')
    return {
      template: `
        <lib-avatar-badge-with-mask ${inputs}>
          <lib-avatar name="Craig Wayne" />
        </lib-avatar-badge-with-mask>
        <lib-avatar-badge-with-mask ${inputs} status="away">
          <lib-avatar name="Craig Wayne" />
        </lib-avatar-badge-with-mask>
        <lib-avatar-badge-with-mask ${inputs} status="busy">
          <lib-avatar name="Craig Wayne" />
        </lib-avatar-badge-with-mask>
        <lib-avatar-badge-with-mask ${inputs} status="online">
          <lib-avatar name="Craig Wayne" />
        </lib-avatar-badge-with-mask>
      `
    }
  }
};

export const DoNotDisturb: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.status ? `[status]="'${args.status}'"` : '',
      args.mode ? `[mode]="'${args.mode}'"` : ''
    ].join(' ')
    return {
      template: `
        <lib-avatar-badge-with-mask ${inputs}>
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <svg ngProjectAs="badge" viewBox="0 -960 960 960" fill="currentColor">
            <path d="M200-440v-80h560v80H200Z"/>
          </svg>
        </lib-avatar-badge-with-mask>
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
      args.mode ? `[mode]="'${args.mode}'"` : ''
    ].join(' ')
    return {
      template: `
        <lib-avatar-badge-with-mask ${inputs} style="--status-color: white">
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <img alt="birthday icon" ngProjectAs="badge" src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f382/emoji.svg" style="border:max(1px, calc(var(--size, var(--size-md)) * 0.04)) solid var(--status-color);box-shadow: 0 1px 2px rgba(60, 64, 67, .3), 0 1px 3px 1px rgba(60, 64, 67, .15);"/>
        <lib-avatar-badge-with-mask>
      `
    }
  },
  args: {
    size: tailwind_sizes['4xl'],
    mode: 'overlay'
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
      args.mode ? `[mode]="'${args.mode}'"` : ''
    ].join(' ')
    return {
      template: `
        <lib-avatar-badge-with-mask ${inputs}>
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <svg ngProjectAs="badge" viewBox="0 -960 960 960" fill="currentColor">
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
          </svg>
        <lib-avatar-badge-with-mask>
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
      args.mode ? `[mode]="'${args.mode}'"` : ''
    ].join(' ')
    return {
      template: `
        <lib-avatar-badge-with-mask ${inputs}>
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="true"/>
          <svg ngProjectAs="badge" viewBox="0 -960 960 960" fill="currentColor">
            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
          </svg>
        <lib-avatar-badge-with-mask>
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
      args.mode ? `[mode]="'${args.mode}'"` : ''
    ].join(' ')
    return {
      template: `
        <lib-avatar-badge-with-mask ${inputs}>
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <svg ngProjectAs="badge" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="8" fill="white" stroke="#38A06C" stroke-width="4"/>
          </svg>
        <lib-avatar-badge-with-mask>
      `
    }
  },
  args: {
    status: 'reachable',
    size: tailwind_sizes['4xl']
  }
};
