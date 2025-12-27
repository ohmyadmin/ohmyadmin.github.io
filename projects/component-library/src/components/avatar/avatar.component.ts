import {ChangeDetectionStrategy, Component, computed, input, signal} from '@angular/core';
import {InitialsPipe} from '../../pipes/initials/initials.pipe';
import {TAILWIND_SIZES} from '../../types/tailwind-sizes.type'

@Component({
  selector: 'lib-avatar',
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  imports: [
    InitialsPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.aria-label]': 'name()',
    '[style.--border-style]': `bordered() ? 'solid' : undefined`,
    '[style.--size]': 'css_size_variable()',
    'class': 'avatar',
    'role': 'img'
  }
})
export class AvatarComponent {
  bordered = input<boolean>();
  image_url = input<string>();
  name = input<string>();
  size = input<TAILWIND_SIZES>();
  status = input<'away' | 'busy' | 'offline' | 'online'>();

  protected css_size_variable = computed<string | undefined>(() => {
    const size = this.size();
    return size === undefined ? size : `var(--size-${size})`
  })

  protected image_load_error = signal<boolean>(false);

  protected on_image_error = (): void => this.image_load_error.set(true)
}
