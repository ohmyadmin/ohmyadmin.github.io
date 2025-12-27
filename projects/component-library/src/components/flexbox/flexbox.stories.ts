import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {FlexboxColumnComponent, FlexboxRowComponent} from 'component-library';

const meta: Meta<FlexboxRowComponent> = {
  component: FlexboxRowComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FlexboxRowComponent,
        FlexboxColumnComponent
      ]
    })
  ],
  tags: ['autodocs'],
  argTypes: {
    gap: {
      control: 'number'
    },
    inline: {
      control: 'boolean'
    },
    align_items: {
      options: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
      control: 'select'
    },
    justify_content: {
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch'],
      control: 'select'
    },
    align_content: {
      options: ['stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
      control: 'select'
    },
    direction: {
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      control: 'select'
    }
  }
}

export default meta;

type Story = StoryObj<FlexboxRowComponent>;

const host_flexbox_styles = `:host {
  display: block;
  min-height: 200px;
  min-width: 250px;
}`

const row_styles = `row {
  --example-block-size-small: 50px;
  --example-block-size-medium: calc(var(--example-block-size-small) * 1.5);
  --example-block-size-large: calc(var(--example-block-size-small) * 2);
  border-radius: 16px;
  padding: var(--gap);
  border: 6px solid #010100;
  display: inline-flex;
  width: 300px;
}`;

const column_styles = `column {
  background: #e01c49;
  border-radius: 16px;
  color: white;
  align-content: center;
  text-align: center;
  padding: 1rem;
}`

export const Sample: Story = {
  render: (args) => {
    return {
      props: args,
      styles: [
        host_flexbox_styles,
        row_styles,
        column_styles,
        `.row { min-height: 200px; min-width: 400px;}`
      ],
      template: `
        <row
            [gap]="${args.gap}"
            [direction]="${args.direction}"
            [inline]="${args.inline}"
            [align-items]="${args.align_items}"
            [justify-content]="${args.justify_content}"
            [align-content]="${args.align_content}"
        >
          <column>1</column>
          <column style="width: var(--example-block-size-large)">2</column>
          <column style="width: var(--example-block-size-large)">3</column>
          <column>4</column>
          <column style="width: var(--example-block-size-large)">5</column>
          <column style="width: var(--example-block-size-large)">6</column>
          <column>7</column>
          <column style="width: var(--example-block-size-large)">8</column>
          <column style="width: var(--example-block-size-large)">9</column>
        </row>
      `
    }
  },
  args: {
    gap: 10,
    direction: 'row'
  }
};
export const FlexDirectionRow: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles
    ],
    template: `
      <row [gap]="10" direction="row">
        <column>1</column>
        <column style="width: var(--example-block-size-large)">2</column>
        <column style="width: var(--example-block-size-large)">3</column>
        <column>4</column>
        <column style="width: var(--example-block-size-large)">5</column>
        <column style="width: var(--example-block-size-large)">6</column>
        <column>7</column>
        <column style="width: var(--example-block-size-large)">8</column>
        <column style="width: var(--example-block-size-large)">9</column>
      </row>
    `
  })
};

export const FlexDirectionRowReverse: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles
    ],
    template: `
      <row [gap]="10" direction="row-reverse">
        <column>1</column>
        <column style="width: var(--example-block-size-large)">2</column>
        <column style="width: var(--example-block-size-large)">3</column>
        <column>4</column>
        <column style="width: var(--example-block-size-large)">5</column>
        <column style="width: var(--example-block-size-large)">6</column>
        <column>7</column>
        <column style="width: var(--example-block-size-large)">8</column>
        <column style="width: var(--example-block-size-large)">9</column>
      </row>
    `
  })
};

export const FlexDirectionColumn: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      `.row { width: unset; height: 302px; }`
    ],
    template: `
      <row [gap]="10" [inline]="true" direction="column">
      <column>1</column>
      <column style="height: var(--example-block-size-large)">2</column>
      <column style="height: var(--example-block-size-large)">3</column>
      <column>4</column>
      <column style="height: var(--example-block-size-large)">5</column>
      <column style="height: var(--example-block-size-large)">6</column>
      <column>7</column>
      <column style="height: var(--example-block-size-large)">8</column>
      <column style="height: var(--example-block-size-large)">9</column>
    </row>
    `
  })
};

export const FlexDirectionColumnReverse: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      `.row { width: unset; height: 302px; }`
    ],
    template: `
      <row [gap]="10" [inline]="true" direction="column-reverse">
      <column>1</column>
      <column style="height: var(--example-block-size-large)">2</column>
      <column style="height: var(--example-block-size-large)">3</column>
      <column>4</column>
      <column style="height: var(--example-block-size-large)">5</column>
      <column style="height: var(--example-block-size-large)">6</column>
      <column>7</column>
      <column style="height: var(--example-block-size-large)">8</column>
      <column style="height: var(--example-block-size-large)">9</column>
    </row>
    `
  })
};

export const AlignItemsFlexStart: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles
    ],
    template: `
      <row [gap]="10" align-items="flex-start">
      <column>1</column>
      <column style="width: var(--example-block-size-small); height: var(--example-block-size-large)">2</column>
      <column style="width: var(--example-block-size-small); height: var(--example-block-size-medium)">3</column>
    </row>
    `
  })
};

export const AlignItemsCenter: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles
    ],
    template: `
      <row [gap]="10" align-items="center">
      <column>1</column>
      <column style="width: var(--example-block-size-small); min-height: var(--example-block-size-large)">2</column>
      <column style="width: var(--example-block-size-small); min-height: var(--example-block-size-medium)">3</column>
    </row>
    `
  })
};

export const AlignItemsFlexEnd: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles
    ],
    template: `
      <row [gap]="10" align-items="flex-end">
        <column>1</column>
        <column style="width: var(--example-block-size-small); min-height: var(--example-block-size-large)">2</column>
        <column style="width: var(--example-block-size-small); min-height: var(--example-block-size-medium)">3</column>
      </row>
    `
  })
};

export const AlignItemsStretch: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles
    ],
    template: `
      <row [gap]="10">
        <column>1</column>
        <column style="width: var(--example-block-size-small); min-height: var(--example-block-size-large)">2</column>
        <column style="width: var(--example-block-size-small); min-height: var(--example-block-size-medium)">3</column>
      </row>
    `
  })
};

const justify_content_styles = `.row { min-width: 400px; min-height: 150px;}`
export const JustifyContentFlexStart: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      justify_content_styles
    ],
    template: `
      <row [gap]="10">
      <column>1</column>
      <column style="width: var(--example-block-size-medium)">2</column>
      <column>3</column>
    </row>
    `
  })
};

export const JustifyContentCenter: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      justify_content_styles
    ],
    template: `
     <row [gap]="10" justify-content="center">
      <column>1</column>
      <column style="width: var(--example-block-size-medium)">2</column>
      <column>3</column>
    </row>
    `
  })
};

export const JustifyContentFlexEnd: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      justify_content_styles
    ],
    template: `
     <row [gap]="10" justify-content="flex-end">
      <column>1</column>
      <column style="width: var(--example-block-size-medium)">2</column>
      <column>3</column>
     </row>
    `
  })
};

export const JustifyContentSpaceBetween: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      justify_content_styles
    ],
    template: `
      <row [gap]="10" justify-content="space-between">
        <column>1</column>
        <column style="width: var(--example-block-size-medium)">2</column>
        <column>3</column>
      </row>
    `
  })
};

export const JustifyContentSpaceAround: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      justify_content_styles
    ],
    template: `
      <row [gap]="10" justify-content="space-around">
        <column>1</column>
        <column style="width: var(--example-block-size-medium)">2</column>
        <column>3</column>
      </row>
    `
  })
};

export const JustifyContentSpaceEvenly: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      justify_content_styles
    ],
    template: `
      <row [gap]="10" justify-content="space-evenly">
        <column>1</column>
        <column style="width: var(--example-block-size-medium)">2</column>
        <column>3</column>
      </row>
    `
  })
};

const align_content_styles = `.row { max-width: 250px; min-height: 300px;}`
export const AlignContentFlexStart: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      align_content_styles
    ],
    template: `
      <row [gap]="10">
      <column style="height: var(--example-block-size-small);">1</column>
      <column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">2</column>
      <column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">3</column>
      <column style="height: var(--example-block-size-small);">4</column>
      <column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">5</column>
      <column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">6</column>
    </row>
    `
  })
};

export const AlignContentCenter: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      align_content_styles
    ],
    template: `
      <row [gap]="10" align-content="center">
      <column style="height: var(--example-block-size-small);">1</column>
      <column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">2</column>
      <column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">3</column>
      <column style="height: var(--example-block-size-small);">4</column>
      <column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">5</column>
      <column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">6</column>
    </row>
    `
  })
};

export const AlignContentFlexEnd: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      align_content_styles
    ],
    template: `
      <row [gap]="10" align-content="flex-end">
      <column style="height: var(--example-block-size-small);">1</column>
      <column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">2</column>
      <column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">3</column>
      <column style="height: var(--example-block-size-small);">4</column>
      <column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">5</column>
      <column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">6</column>
    </row>
    `
  })
};

export const AlignContentStretch: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      align_content_styles
    ],
    template: `
      <row [gap]="10" align-content="stretch">
      <column>1</column>
      <column style="width: var(--example-block-size-medium)">2</column>
      <column style="width: var(--example-block-size-medium)">3</column>
      <column>4</column>
      <column style="width: var(--example-block-size-medium)">5</column>
      <column style="width: var(--example-block-size-medium)">6</column>
    </row>
    `
  })
};

export const AlignContentSpaceBetween: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      align_content_styles
    ],
    template: `
      <row [gap]="10" align-content="space-between">
      <column style="height: var(--example-block-size-small);">1</column>
      <column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">2</column>
      <column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">3</column>
      <column style="height: var(--example-block-size-small);">4</column>
      <column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">5</column>
      <column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">6</column>
    </row>
    `
  })
};

export const AlignContentSpaceAround: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      align_content_styles
    ],
    template: `
      <row [gap]="10" align-content="space-around">
      <column style="height: var(--example-block-size-small);">1</column>
      <column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">2</column>
      <column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">3</column>
      <column style="height: var(--example-block-size-small);">4</column>
      <column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">5</column>
      <column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">6</column>
    </row>
    `
  })
};
