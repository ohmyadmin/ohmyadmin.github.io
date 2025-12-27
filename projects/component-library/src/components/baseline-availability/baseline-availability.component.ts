import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {AvatarComponent, AvatarGroupComponent} from 'component-library';

@Component({
  selector: 'lib-baseline-availability',
  imports: [
    AvatarGroupComponent,
    AvatarComponent
  ],
  templateUrl: './baseline-availability.component.html',
  styleUrl: './baseline-availability.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaselineAvailabilityComponent {
  chrome = input<boolean>(true)
  edge = input<boolean>(true)
  firefox = input<boolean>(true)
  safari = input<boolean>(false)

  protected image_url_supported = 'https://raw.githubusercontent.com/web-platform-dx/developer-signals/refs/heads/main/img/available.svg'
  protected image_url_unsupported = 'https://raw.githubusercontent.com/web-platform-dx/developer-signals/refs/heads/main/img/unavailable.svg'
}
