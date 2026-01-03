import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {AvatarComponent} from '../avatar/avatar.component';
import {AvatarGroupComponent} from '../avatar-group/avatar-group.component';
import {tailwind_sizes} from '../../enums/tailwind-sizes.enum';
import {tailwind_size} from '../../types/tailwind-sizes.type';

type Browser = 'chrome' | 'firefox' | 'safari' | 'edge';

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

  protected browser_image_urls = {
    'chrome': 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-chrome-icon.svg',
    'firefox': 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/firefox-browser-icon.svg',
    'edge': 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/edge-browser-icon.svg',
    'safari': 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/safari-icon.svg'
  };

  protected image_url_supported = 'https://raw.githubusercontent.com/web-platform-dx/developer-signals/refs/heads/main/img/available.svg'
  protected image_url_unsupported = 'https://raw.githubusercontent.com/web-platform-dx/developer-signals/refs/heads/main/img/unavailable.svg'
  protected groups = computed<{ supported: string[], unsupported: string[] }>(() => {
    const supported = []
    const unsupported = []

    if(this.chrome()){
      supported.push('chrome')
    }
    else {
      unsupported.push('chrome')
    }
    if(this.edge()){
      supported.push('edge')
    }
    else {
      unsupported.push('edge')
    }
    if(this.firefox()){
      supported.push('firefox')
    }
    else {
      unsupported.push('firefox')
    }

    if(this.safari()){
      supported.push('safari')
    }
    else {
      unsupported.push('safari')
    }

    return {
     supported,
     unsupported
    }
  })


  // protected image_url_supported = 'https://developer.mozilla.org/static/client/browser-check.20ed6fe43e745587.svg';
  // protected image_url_unsupported = 'https://developer.mozilla.org/static/client/browser-cross.196cc93721b774d9.svg';
}
