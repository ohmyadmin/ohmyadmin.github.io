import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {AvatarComponent} from '../avatar/avatar.component';
import {AvatarGroupComponent} from '../avatar-group/avatar-group.component';
import {TAILWIND_SIZES} from '../../types/tailwind-sizes.type';

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
  size = input<TAILWIND_SIZES>('3xs');
  chrome = input<boolean>(true);
  edge = input<boolean>(true);
  firefox = input<boolean>(true);
  safari = input<boolean>(false);

  protected image_url_supported = 'https://raw.githubusercontent.com/web-platform-dx/developer-signals/refs/heads/main/img/available.svg'
  protected image_url_unsupported = 'https://raw.githubusercontent.com/web-platform-dx/developer-signals/refs/heads/main/img/unavailable.svg'

  // protected image_url_supported = 'https://developer.mozilla.org/static/client/browser-check.20ed6fe43e745587.svg';
  // protected image_url_unsupported = 'https://developer.mozilla.org/static/client/browser-cross.196cc93721b774d9.svg';
}
