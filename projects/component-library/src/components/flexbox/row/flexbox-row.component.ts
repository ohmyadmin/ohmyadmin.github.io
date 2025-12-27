import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
import type {
  SupportedAlignContent,
  SupportedAlignItems,
  SupportedDirections,
  SupportedJustifyContent
} from '../flexbox.types';
import {PxPipe} from 'component-library/pipes/px/px.pipe';

@Component({
  selector: 'row',
  template: '<ng-content></ng-content>',
  styleUrl: 'flexbox-row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PxPipe
  ],
  host: {
    class: 'row',
    '[class]': 'direction_css_class()',
    '[style.--direction]': 'direction()',
    '[style.--gap]': 'gap()',
    '[style.--flex-style]': `inline() ? 'inline-flex' : null`,
    '[style.--align-items]': 'align_items()',
    '[style.--justify-content]': 'justify_content()',
    '[style.--align-content]': 'align_content()',
  }
})
export class FlexboxRowComponent {
  px_pipe = inject(PxPipe);
  direction = input<SupportedDirections>()
  inline = input<boolean>()
  gap =  input<string|undefined,number|string|undefined>(undefined, {transform: this.px_pipe.transform})
  align_items = input<SupportedAlignItems | null>(null, {alias: 'align-items'})
  justify_content = input<SupportedJustifyContent | null>(null, {alias: 'justify-content'})
  align_content = input<SupportedAlignContent>('stretch', {alias: 'align-content'})

  direction_css_class = computed(() => `flex-direction-${this.direction()}`);
}
