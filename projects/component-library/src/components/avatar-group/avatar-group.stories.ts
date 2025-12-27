import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {
  AvatarComponent,
  AvatarGroupComponent,
} from 'component-library';

const meta: Meta<AvatarGroupComponent> = {
  component: AvatarGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [AvatarComponent]
    })
  ],
  tags: ['autodocs'],
  argTypes: {
    bordered: {
      control: 'boolean'
    },
    limit: {
      control: 'number'
    },
    layering: {
      options: ['first_on_top', 'last_on_top'],
      control: 'select'
    },
    size: {
      options: ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'],
      control: 'select'
    },
  }
}

export default meta;

type Story = StoryObj<AvatarGroupComponent>;
export const Sample: Story = {
  render: (args) => {
    const size_input = args.size ? `[size]="'${args.size}'"` : '';
    const bordered_input = args.bordered ? `[bordered]="${args.bordered}"` : '';
    const layering_input = args.layering ? `[layering]="'${args.layering}'"` : '';
    const limit_input = args.limit ? `[limit]="${args.limit}"` : ''
    return {
      template: `
        <lib-avatar-group ${limit_input} ${layering_input} ${bordered_input} ${size_input}>
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <lib-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <lib-avatar name="Joe Soap" />
          <lib-avatar name="Jane Doe" />
          <lib-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
          <lib-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
          <lib-avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
          <lib-avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
          <lib-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
        </lib-avatar-group>
      `
    }
  },
  args: {
    limit: 4
  }
};

// export const NoBorders: Story = {
//   render: (args) => {
//     return {
//       template: `
//         <lib-avatar-group
//             limit="${args.limit}"
//             [layering]="'${args.layering}'"
//             [bordered]="${args.bordered}"
//         >
//           <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
//           <lib-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
//           <lib-avatar name="Joe Soap" />
//           <lib-avatar name="Jane Doe"  />
//           <lib-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
//         </lib-avatar-group>
//       `
//     }
//   },
//   args: {
//     bordered: false
//   }
// };
//
// export const OnlyImagesNoNameWithBorders: Story = {
//   render: (args) => {
//     return {
//       template: `
//         <lib-avatar-group
//             limit="${args.limit}"
//             [layering]="'${args.layering}'"
//             [bordered]="${args.bordered}"
//         >
//           <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
//           <lib-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
//           <lib-avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" />
//           <lib-avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" />
//           <lib-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
//         </lib-avatar-group>
//       `
//     }
//   },
//   args: {
//     bordered: true
//   }
// };
//
// export const OnlyNamesNoImagesWithBorders: Story = {
//   render: (args) => {
//     return {
//       template: `
//         <lib-avatar-group
//             limit="${args.limit}"
//             [layering]="'${args.layering}'"
//             [bordered]="${args.bordered}"
//         >
//           <lib-avatar name="Craig Wayne" />
//           <lib-avatar name="Natasha Hinter" />
//           <lib-avatar name="Joe Soap" />
//           <lib-avatar name="Jane Doe" />
//           <lib-avatar name="John Wayne" />
//         </lib-avatar-group>
//       `
//     }
//   },
//   args: {
//     bordered: true
//   }
// };
//
// export const OnlyImagesWithoutBorders: Story = {
//   render: (args) => {
//     return {
//       template: `
//         <lib-avatar-group
//             limit="${args.limit}"
//             [layering]="'${args.layering}'"
//             [bordered]="${args.bordered}"
//         >
//           <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
//           <lib-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
//           <lib-avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" />
//           <lib-avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" />
//           <lib-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
//         </lib-avatar-group>
//       `
//     }
//   },
//   args: {
//     bordered: false
//   }
// };
//
// export const OnlyTextWithoutBorders: Story = {
//   render: (args) => {
//     return {
//       template: `
//         <lib-avatar-group
//             limit="${args.limit}"
//             [layering]="'${args.layering}'"
//             [bordered]="${args.bordered}"
//         >
//           <lib-avatar name="Craig Wayne" />
//           <lib-avatar name="Natasha Hinter" />
//           <lib-avatar name="Joe Soap" />
//           <lib-avatar name="Jane Doe" />
//           <lib-avatar name="John Wayne"  />
//         </lib-avatar-group>
//       `
//     }
//   },
//   args: {
//     bordered: false
//   }
// };
//
// export const IndividualBorderedValues: Story = {
//   parameters: {
//
//   },
//   render: (args) => {
//     return {
//       template: `
//         <lib-avatar-group
//             limit="${args.limit}"
//             [layering]="'${args.layering}'"
//             [bordered]="${args.bordered}"
//         >
//           <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
//           <lib-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" [bordered]="false" />
//           <lib-avatar name="Joe Soap" [bordered]="false" />
//           <lib-avatar name="Jane Doe" [bordered]="true" />
//           <lib-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
//           <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
//           <lib-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
//           <lib-avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
//           <lib-avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
//           <lib-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
//         </lib-avatar-group>
//       `
//     }
//   },
//   args: {
//     limit: 5,
//     bordered: true
//   }
// };
//
// export const GroupSizeExtraSmall: Story = {
//   parameters: {
//
//   },
//   render: (args) => {
//     return {
//       template: `
//         <lib-avatar-group
//             limit="${args.limit}"
//             [layering]="'${args.layering}'"
//             [bordered]="${args.bordered}"
//             [size]="'${args.size}'"
//         >
//           <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
//           <lib-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
//           <lib-avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" />
//           <lib-avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" />
//           <lib-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
//           <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
//           <lib-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
//           <lib-avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
//           <lib-avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
//           <lib-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
//         </lib-avatar-group>
//       `
//     }
//   },
//   args: {
//     limit: 5,
//     bordered: true,
//     size: 'xs'
//   }
// };
//
// export const GroupSizeSmall: Story = {
//   parameters: {
//
//   },
//   render: (args) => {
//     return {
//       template: `
//         <lib-avatar-group
//             limit="${args.limit}"
//             [layering]="'${args.layering}'"
//             [bordered]="${args.bordered}"
//             [size]="'${args.size}'"
//         >
//           <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
//           <lib-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
//           <lib-avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" />
//           <lib-avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" />
//           <lib-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
//           <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
//           <lib-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
//           <lib-avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
//           <lib-avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
//           <lib-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
//         </lib-avatar-group>
//       `
//     }
//   },
//   args: {
//     limit: 5,
//     bordered: true,
//     size: 'sm'
//   }
// };
//
// export const GroupSizeMedium: Story = {
//   parameters: {
//
//   },
//   render: (args) => {
//     return {
//       template: `
//         <lib-avatar-group
//             limit="${args.limit}"
//             [layering]="'${args.layering}'"
//             [bordered]="${args.bordered}"
//             [size]="'${args.size}'"
//         >
//           <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
//           <lib-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
//           <lib-avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" />
//           <lib-avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" />
//           <lib-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
//           <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
//           <lib-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
//           <lib-avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
//           <lib-avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
//           <lib-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
//         </lib-avatar-group>
//       `
//     }
//   },
//   args: {
//     limit: 5,
//     bordered: true,
//     size: 'md'
//   }
// };
//
// export const GroupSizeLarge: Story = {
//   parameters: {
//
//   },
//   render: (args) => {
//     return {
//       template: `
//         <lib-avatar-group
//             limit="${args.limit}"
//             [layering]="'${args.layering}'"
//             [bordered]="${args.bordered}"
//             [size]="'${args.size}'"
//         >
//           <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
//           <lib-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
//           <lib-avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" />
//           <lib-avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" />
//           <lib-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
//           <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
//           <lib-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
//           <lib-avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
//           <lib-avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
//           <lib-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
//         </lib-avatar-group>
//       `
//     }
//   },
//   args: {
//     limit: 5,
//     bordered: true,
//     size: 'lg'
//   }
// };
//
// export const GroupSizeExtraLarge: Story = {
//   parameters: {
//
//   },
//   render: (args) => {
//     return {
//       template: `
//         <lib-avatar-group
//             limit="${args.limit}"
//             [layering]="'${args.layering}'"
//             [bordered]="${args.bordered}"
//             [size]="'${args.size}'"
//         >
//           <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
//           <lib-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
//           <lib-avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" />
//           <lib-avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" />
//           <lib-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
//           <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
//           <lib-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
//           <lib-avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
//           <lib-avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
//           <lib-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
//         </lib-avatar-group>
//       `
//     }
//   },
//   args: {
//     limit: 5,
//     bordered: true,
//     size: 'xl'
//   }
// };
//
// export const GroupSizeExtraExtraLarge: Story = {
//   parameters: {
//
//   },
//   render: (args) => {
//     return {
//       template: `
//         <lib-avatar-group
//             limit="${args.limit}"
//             [layering]="'${args.layering}'"
//             [bordered]="${args.bordered}"
//             [size]="'${args.size}'"
//         >
//           <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
//           <lib-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
//           <lib-avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" />
//           <lib-avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" />
//           <lib-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
//           <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
//           <lib-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
//           <lib-avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
//           <lib-avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
//           <lib-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
//         </lib-avatar-group>
//       `
//     }
//   },
//   args: {
//     limit: 5,
//     bordered: true,
//     size: '2xl'
//   }
// };
//
// export const BrowserSupport: Story = {
//   render: () => {
//     return {
//       styles: [
//         `
//           :host ::ng-deep avatar img {
//             width: auto;
//             height: calc(100% - 2px);
//             border-radius: unset;
//           }
//         `
//       ],
//       template: `
//         <lib-avatar-group layering="first_on_top" size="md">
//           <lib-avatar image_url="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-chrome-icon.svg" size="md"/>
//           <lib-avatar image_url="https://raw.githubusercontent.com/web-platform-dx/developer-signals/refs/heads/main/img/available.svg" size="md" />
//         </lib-avatar-group>
//         <lib-avatar-group layering="first_on_top" size="md">
//           <lib-avatar image_url="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/edge-browser-icon.svg" size="md" />
//           <lib-avatar image_url="https://raw.githubusercontent.com/web-platform-dx/developer-signals/refs/heads/main/img/available.svg" size="md" />
//         </lib-avatar-group>
//         <lib-avatar-group layering="first_on_top" size="md">
//           <lib-avatar image_url="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/firefox-browser-icon.svg" size="md" />
//           <lib-avatar image_url="https://raw.githubusercontent.com/web-platform-dx/developer-signals/refs/heads/main/img/unavailable.svg" size="md" />
//         </lib-avatar-group>
//         <lib-avatar-group layering="first_on_top" size="md">
//           <lib-avatar image_url="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/safari-icon.svg" size="md" />
//           <lib-avatar image_url="https://raw.githubusercontent.com/web-platform-dx/developer-signals/refs/heads/main/img/unavailable.svg" size="md" />
//         </lib-avatar-group>
//       `
//     }
//   }
// };
