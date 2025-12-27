import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'lib-theme-customizer-trigger',
  templateUrl: './theme-customizer-trigger.component.html',
  styleUrl: './theme-customizer-trigger.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeCustomizerTriggerComponent {}
