import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'lib-action-progress',
  templateUrl: './action-progress.component.html',
  styleUrl: 'action-progress.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'action-progress'
  }
})
export class ActionProgressComponent {}
