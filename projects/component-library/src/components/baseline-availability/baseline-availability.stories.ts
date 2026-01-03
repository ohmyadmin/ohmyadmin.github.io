import {Meta, StoryObj} from '@storybook/angular';
import {BaselineAvailabilityComponent} from 'component-library';
import {tailwind_sizes_values} from 'component-library/constants/tailwind-sizes';
import {tailwind_sizes} from 'component-library/enums/tailwind-sizes.enum';

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
  args: {
    chrome: true,
    size: tailwind_sizes['3xs']
  }
};
export const AllUnsupported: Story = {
  args: {
    size: tailwind_sizes['3xs']
  }
};

export const AllSupported: Story = {
  args: {
    chrome: true,
    firefox: true,
    edge: true,
    safari: true,
    size: tailwind_sizes['3xs']
  }
};
