import {Meta, StoryObj} from '@storybook/angular';
import {BaselineAvailabilityComponent} from 'component-library';

const meta: Meta<BaselineAvailabilityComponent> = {
  argTypes: {
    size: {
      options: ['7xs', '6xs', '5xs', '4xs', '3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'],
      control: 'select'
    }
  },
  component: BaselineAvailabilityComponent,
  tags: ['autodocs', 'avatar']
}

export default meta;

type Story = StoryObj<BaselineAvailabilityComponent>;
export const Sample: Story = {
  render: (args) => {
    const size = args.size ? `[size]="'${args.size}'"` : ''
    return {
      template: `<lib-baseline-availability ${size} />`
    }
  }
};
