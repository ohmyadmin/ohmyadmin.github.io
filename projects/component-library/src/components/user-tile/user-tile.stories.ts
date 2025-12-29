import {applicationConfig, Meta, StoryObj} from '@storybook/angular';
import {UserTileComponent} from 'component-library';
import {provideRouter} from '@angular/router';

const meta: Meta<UserTileComponent> = {
  component: UserTileComponent,
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([])
      ]
    })
  ],
  tags: ['autodocs', 'avatar']
}

export default meta;

type Story = StoryObj<UserTileComponent>;

export const Default: Story = {
  args: {
    bordered: false,
    name: 'Jane Doe',
    image_url: 'https://mockmind-api.uifaces.co/content/human/1.jpg',
    link: 'https://www.example.com'
  }
};

export const WithInternalLink: Story = {
  args: {
    ...Default.args,
    link: '/users/jane-doe'
  }
};

export const WithExternalLink: Story = {
  args: {
    ...Default.args,
    link: 'https://example.com'
  }
}
