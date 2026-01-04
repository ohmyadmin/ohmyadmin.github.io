import {ChangeDetectionStrategy, Component, computed, contentChildren, effect, input} from '@angular/core';
import {tailwind_size} from '../../types/tailwind-sizes.type';
import {tailwind_sizes} from '../../enums/tailwind-sizes.enum';
import {AvatarComponent} from '../avatar/avatar.component';

@Component({
  selector: 'lib-avatar-status',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './avatar-status.component.html',
  styleUrl: 'avatar-status.component.scss',
  host: {
    'class': 'avatar-status',
    '[class]': 'status()',
    '[style.--size]': 'css_size_var()'
  }
})
export class AvatarStatusComponent {
  status = input<'away' | 'busy' | 'offline' | 'online'>('offline');
  size = input<tailwind_size>(tailwind_sizes.md);
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
