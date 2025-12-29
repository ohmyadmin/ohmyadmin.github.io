import {Meta, StoryObj} from '@storybook/angular';
import {BaselineAvailabilityComponent} from 'component-library';
import {tailwind_sizes_values} from 'component-library/constants/tailwind-sizes';

const meta: Meta<BaselineAvailabilityComponent> = {
  argTypes: {
    size: {
      options: tailwind_sizes_values,
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
