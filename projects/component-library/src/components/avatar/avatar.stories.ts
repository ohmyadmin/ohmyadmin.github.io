import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {
  AvatarComponent,
  RandomMilkyBackgroundDirective
} from 'component-library';
import {expect} from 'storybook/test';
import {InputType} from 'storybook/internal/csf';

const size_arg_type: InputType = {
  options: ['7xs', '6xs', '5xs', '4xs', '3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'],
  control: 'select'
}

const meta: Meta<AvatarComponent> = {
  component: AvatarComponent,
  tags: ['autodocs','avatar'],
  argTypes: {
    bordered: {
      control: 'boolean'
    },
    image_url: {
      control: 'text'
    },
    name: {
      control: 'text'
    },
    status: {
      type: 'string',
      options: ['away', 'busy', 'offline', 'online'],
      control:'select'
    }
  }
}

export default meta;

type Story = StoryObj<AvatarComponent>;

const base_checks: Story['play'] = async ({ canvasElement }) => {
  const avatar_component = canvasElement.querySelector('.avatar');
  expect(avatar_component).toBeInTheDocument();
  expect(avatar_component).toBeVisible();
}

export const Sample: Story = {
  args: {
    bordered: true,
    image_url: 'https://mockmind-api.uifaces.co/content/human/1.jpg',
    name: 'Jane Doe',
    status: undefined
  },
  argTypes: {
    size: size_arg_type
  },
  play: async (context) => {
    await base_checks(context)
  }
}

export const OnlyText: Story = {
  args: {
    ...Sample.args,
    image_url: undefined
  },
  argTypes: Sample.argTypes,
  play: async (context) => {
    await base_checks(context)
  }
}

export const OnlyImage: Story = {
  args: {
    ...Sample.args,
    name: undefined
  },
  argTypes: Sample.argTypes,
  play: async (context) => {
    await base_checks(context)
  }
}

export const MultipleNames: Story = {
  ...OnlyText,
  args: {
    name: 'Jane Emily Sandra Doe'
  }
}

export const NameWithExtraSpaces: Story = {
  ...OnlyText,
  args: {
    name: '       Jane       Doe       '
  }
}

export const NoLastName: Story = {
  ...OnlyText,
  args: {
    name: 'Jane'
  }
}

export const BrokenImage: Story = {
  ...Sample,
  args: {
    name: 'Jane Doe',
    image_url: 'https://www.example.com/broken_image.jpg'
  }
}

export const NoNameNoImage: Story = {}

export const AllSizes: Story = {
  decorators: [
    moduleMetadata({
      imports: [
        RandomMilkyBackgroundDirective
      ]
    })
  ],
  render: (args) => {
    const status_attribute = args.status ? `[status]="'${args.status}'"` : '';
    return {
      styles: [
        `:host {
          display: inline-flex;
          flex-direction: column;
          row-gap: 5px;
       }`
      ],
      template: `
        <lib-avatar libRandomMilkyBackground [name]="'${args.name}'" [image_url]="'${args.image_url}'" ${status_attribute} [bordered]="${args.bordered}" size="3xs" />
        <lib-avatar libRandomMilkyBackground [name]="'${args.name}'" [image_url]="'${args.image_url}'" ${status_attribute} [bordered]="${args.bordered}" size="2xs" />
        <lib-avatar libRandomMilkyBackground [name]="'${args.name}'" [image_url]="'${args.image_url}'" ${status_attribute} [bordered]="${args.bordered}" size="xs" />
        <lib-avatar libRandomMilkyBackground [name]="'${args.name}'" [image_url]="'${args.image_url}'" ${status_attribute} [bordered]="${args.bordered}" size="sm" />
        <lib-avatar libRandomMilkyBackground [name]="'${args.name}'" [image_url]="'${args.image_url}'" ${status_attribute} [bordered]="${args.bordered}" size="md" />
        <lib-avatar libRandomMilkyBackground [name]="'${args.name}'" [image_url]="'${args.image_url}'" ${status_attribute} [bordered]="${args.bordered}" size="lg" />
        <lib-avatar libRandomMilkyBackground [name]="'${args.name}'" [image_url]="'${args.image_url}'" ${status_attribute} [bordered]="${args.bordered}" size="xl" />
        <lib-avatar libRandomMilkyBackground [name]="'${args.name}'" [image_url]="'${args.image_url}'" ${status_attribute} [bordered]="${args.bordered}" size="2xl" />
        <lib-avatar libRandomMilkyBackground [name]="'${args.name}'" [image_url]="'${args.image_url}'" ${status_attribute} [bordered]="${args.bordered}" size="3xl" />
        <lib-avatar libRandomMilkyBackground [name]="'${args.name}'" [image_url]="'${args.image_url}'" ${status_attribute} [bordered]="${args.bordered}" size="4xl" />
        <lib-avatar libRandomMilkyBackground [name]="'${args.name}'" [image_url]="'${args.image_url}'" ${status_attribute} [bordered]="${args.bordered}" size="5xl" />
        <lib-avatar libRandomMilkyBackground [name]="'${args.name}'" [image_url]="'${args.image_url}'" ${status_attribute} [bordered]="${args.bordered}" size="6xl" />
        <lib-avatar libRandomMilkyBackground [name]="'${args.name}'" [image_url]="'${args.image_url}'" ${status_attribute} [bordered]="${args.bordered}" size="7xl" />
      `
    }
  },
  args: Sample['args']
};
