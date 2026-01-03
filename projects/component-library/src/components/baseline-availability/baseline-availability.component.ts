import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {AvatarComponent} from '../avatar/avatar.component';
import {AvatarGroupComponent} from '../avatar-group/avatar-group.component';
import {tailwind_sizes} from '../../enums/tailwind-sizes.enum';
import {tailwind_size} from '../../types/tailwind-sizes.type';

@Component({
  selector: 'lib-baseline-availability',
  imports: [
    AvatarGroupComponent,
    AvatarComponent
  ],
  templateUrl: './baseline-availability.component.html',
  styleUrl: './baseline-availability.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaselineAvailabilityComponent {
  size = input<tailwind_size>(tailwind_sizes['3xs']);
  chrome = input<boolean>(false);
  edge = input<boolean>(false);
  firefox = input<boolean>(false);
  safari = input<boolean>(false);

  private browser_image_urls = {
    'chrome': 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-chrome-icon.svg',
    'firefox': 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/firefox-browser-icon.svg',
    'edge': 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/edge-browser-icon.svg',
    'safari': 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/safari-icon.svg'
  } as const;

  protected image_url_supported = 'https://raw.githubusercontent.com/web-platform-dx/developer-signals/refs/heads/main/img/available.svg';
  protected image_url_unsupported = 'https://raw.githubusercontent.com/web-platform-dx/developer-signals/refs/heads/main/img/unavailable.svg';

  protected browser_states = computed(() => [
    { id: 'chrome', is_supported: this.chrome(), icon: this.browser_image_urls.chrome },
    { id: 'edge', is_supported: this.edge(), icon: this.browser_image_urls.edge },
    { id: 'firefox', is_supported: this.firefox(), icon: this.browser_image_urls.firefox },
    { id: 'safari', is_supported: this.safari(), icon: this.browser_image_urls.safari }
  ]);

  protected supported_browsers = computed(() =>
    this.browser_states().filter(b => b.is_supported)
  );

  protected unsupported_browsers = computed(() =>
    this.browser_states().filter(b => !b.is_supported)
  );
}
