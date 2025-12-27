import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  effect,
  ElementRef, inject,
  input,
} from '@angular/core';
import {AvatarComponent} from '../avatar/avatar.component';
import {TAILWIND_SIZES} from '../../types/tailwind-sizes.type';
import {WholeNumberPipe} from 'component-library/pipes/whole-number/whole-number.pipe';

@Component({
  selector: 'lib-avatar-group',
  templateUrl: './avatar-group.component.html',
  styleUrl: './avatar-group.component.scss',
  imports: [
    AvatarComponent,
  ],
  providers: [
    WholeNumberPipe
  ],
  host: {
    'class': 'avatar-group',
    '[style.--item-count]': 'avatar_items_as_html().length',
    '[style.--overlap]': 'overlap()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarGroupComponent {
  private whole_number_pipe = inject(WholeNumberPipe);
  overlap = input<string|number>();
  bordered = input<boolean>();
  layering = input<'first_on_top' | 'last_on_top'>('last_on_top');
  limit = input<number, number | string | undefined>(undefined, {transform: this.whole_number_pipe.transform});
  size = input<TAILWIND_SIZES>();

  protected avatar_items_as_html = contentChildren(AvatarComponent, {read: ElementRef});
  private avatar_items_as_component = contentChildren(AvatarComponent);

  protected surplus_text = computed(() => {
    const limit = this.limit();
    if (!limit || limit <= 0) {
      return undefined;
    }

    const surplus = this.avatar_items_as_html().length - limit;
    return surplus > 0 ? `+ ${surplus}` : undefined;
  });

  constructor() {
    effect(() => {
      const layering = this.layering();
      const limit = this.limit();
      const group_bordered = this.bordered;
      const group_size = this.size;
      const html_items = this.avatar_items_as_html();
      const component_items = this.avatar_items_as_component();
      const total_items = html_items.length;

      component_items.forEach((component_item, index) => {
        if (component_item.bordered() === undefined) {
          component_item.bordered = group_bordered;
        }

        if (component_item.size() === undefined) {
          component_item.size = group_size;
        }

        const avatar_html_item_ref = html_items[index];
        if (!avatar_html_item_ref) {
          return;
        }

        const avatar_html_element = avatar_html_item_ref.nativeElement;

        avatar_html_element.style.zIndex = layering === 'first_on_top' ? `${total_items - index}` : '';

        const is_collapsed = limit !== undefined && limit > 0 && index >= limit;
        avatar_html_element.classList.toggle('collapsed', is_collapsed);
      });
    });
  }
}
