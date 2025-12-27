import {ChangeDetectionStrategy, Component, computed, input, signal} from '@angular/core';
import {InitialsPipe} from '../../pipes/initials/initials.pipe';
import {TAILWIND_SIZES} from '../../types/tailwind-sizes.type'
import {random_milky_hsl_color} from '../../helpers/random_milky_hsl_color'

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
    '[style.--background-color]': 'random_milky_hsl_color',
    '[style.--border-style]': `bordered() ? 'solid' : undefined`,
    '[style.--size]': 'css_size_variable()',
    'class': 'avatar',
    'role': 'img'
  }
})
export class AvatarComponent {
  bordered = input<boolean>(false);
  image_url = input<string>();
  name = input<string>('Unknown User');
  size = input<TAILWIND_SIZES>();
  status = input<'away' | 'busy' | 'offline' | 'online'>();

  protected css_size_variable = computed<string | undefined>(() => {
    const size = this.size();
    return size === undefined ? size : `var(--size-${size})`
  })

  protected readonly random_milky_hsl_color = random_milky_hsl_color();

  protected image_load_error = signal<boolean>(false);

  protected on_image_error = (): void => this.image_load_error.set(true)
}
