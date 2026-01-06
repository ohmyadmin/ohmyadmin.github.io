import {ChangeDetectionStrategy, Component, computed, contentChildren, effect, input} from '@angular/core';
import {tailwind_size} from '../../types/tailwind-sizes.type';
import {tailwind_sizes} from '../../enums/tailwind-sizes.enum';
import {AvatarComponent} from '../avatar/avatar.component';

@Component({
  selector: 'lib-avatar-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './avatar-badge.component.html',
  styleUrl: 'avatar-badge.component.scss',
  host: {
    'class': 'avatar-badge',
    '[class]': 'status()',
    '[class.subtract]': 'subtract()',
    '[style.--size]': 'css_size_var()'
  }
})
export class AvatarBadgeComponent {
  status = input<'away' | 'busy' | 'focus' | 'offline' | 'online' | 'reachable'>('offline');
  size = input<tailwind_size>(tailwind_sizes.md);
  subtract = input<boolean>(true);

  private avatars = contentChildren(AvatarComponent);

  protected css_size_var = computed(() => {
    const s = this.size();
    return s ? `var(--size-${s})` : null;
  });

  constructor() {
    effect(() => {
      const count = this.avatars().length;
      if (count > 1) {
        console.warn(`[${this.constructor.name}] Too many avatars detected (${count}). This component supports only one child avatar.`);
      }
    });
  }
}
