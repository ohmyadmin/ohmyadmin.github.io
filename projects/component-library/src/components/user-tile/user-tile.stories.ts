import {applicationConfig, Meta, StoryObj} from '@storybook/angular';
import {UserTileComponent} from 'component-library';
import {provideRouter} from '@angular/router';
import {tailwind_sizes_values} from 'component-library/constants/tailwind-sizes';

const meta: Meta<UserTileComponent> = {
  component: UserTileComponent,
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([])
      ]
    })
  ],
  argTypes: {
    size: {
      control: 'select',
      options: tailwind_sizes_values,
    }
  },
  args: {
    bordered: false,
    image_url: 'https://mockmind-api.uifaces.co/content/human/1.jpg',
    link: 'https://www.example.com',
    name: 'Jane Doe'
  },
  tags: ['autodocs', 'avatar']
}

export default meta;

type Story = StoryObj<UserTileComponent>;

export const Sample: Story = {};

export const WithInternalLink: Story = {
  args: {
    ...Sample.args,
    link: '/users/jane-doe'
  }
};

export const WithExternalLink: Story = {
  args: {
    ...Sample.args,
    link: 'https://example.com'
  }
}
