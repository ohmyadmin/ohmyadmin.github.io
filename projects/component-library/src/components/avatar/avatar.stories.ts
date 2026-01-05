import {Meta, StoryObj} from '@storybook/angular';
import {AvatarComponent} from 'component-library';
import {expect} from 'storybook/test';
import {InputType} from 'storybook/internal/csf';
import {tailwind_sizes_values} from 'component-library/constants/tailwind-sizes';

const size_arg_type: InputType = {
  options: tailwind_sizes_values,
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
    name: 'Jane Doe'
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

export const MultipleFirstNamesNames: Story = {
  ...OnlyText,
  parameters: {
    docs: {
      description: {
        story: 'Users name is "Jane Emily Sandra Doe"'
      }
    }
  },
  args: {
    name: 'Jane Emily Sandra Doe'
  }
}

export const NameWithExtraSpaces: Story = {
  ...OnlyText,
  parameters: {
    docs: {
      description: {
        story: 'Users name is "       Jane       Doe       "'
      }
    }
  },
  args: {
    name: '       Jane       Doe       '
  }
}

export const NoLastName: Story = {
  ...OnlyText,
  parameters: {
    docs: {
      description: {
        story: 'Users name is just "Jane"'
      }
    }
  },
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
  render: (args) => {
    const inputs = [
      args.name ? `[name]="'${args.name}'"` : '',
      args.image_url ? `[image_url]="'${args.image_url}'"` : '',
      args.bordered ? `[bordered]="${args.bordered}"` : ''
    ].join(' ');

    const template_string = tailwind_sizes_values
      .map(i => `<lib-avatar  ${inputs} size="${i}" />`)
      .join('\n')
    return {
      styles: [
        `:host {
          display: inline-flex;
          flex-direction: column;
          row-gap: 5px;
       }`
      ],
      template: template_string
    }
  },
  args: Sample['args']
};
