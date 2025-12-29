import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {AvatarComponent} from '../avatar/avatar.component';
import {RouterLink} from '@angular/router';

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
  name = input.required<string>();
  image_url = input<string>();
  bordered = input(false);
  link = input<string>();

  protected readonly is_external_link = computed<boolean>(() => {
    const link = this.link();
    return link ? link.startsWith('http') : false
  });
}
