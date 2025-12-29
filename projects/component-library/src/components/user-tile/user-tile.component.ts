import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {AvatarComponent} from '../avatar/avatar.component';
import {RouterLink} from '@angular/router';
import {tailwind_size} from 'component-library/types/tailwind-sizes.type';

@Component({
  selector: 'lib-user-tile',
  standalone: true,
  templateUrl: 'user-tile.component.html',
  styleUrl: 'user-tile.component.scss',
  host: {
    'class': 'user-tile'
  },
  imports: [
    AvatarComponent,
    RouterLink,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserTileComponent {
  bordered = input(false);
  image_url = input<string>();
  link = input<string>();
  name = input.required<string>();
  size = input<tailwind_size>();

  protected readonly is_external_link = computed<boolean>(() => {
    const link = this.link();
    return link ? link.startsWith('http') : false
  });
}
