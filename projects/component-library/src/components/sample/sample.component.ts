import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-sample',
  imports: [],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SampleComponent {

}
