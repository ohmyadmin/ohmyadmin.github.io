import {ChangeDetectionStrategy, Component, input, signal} from '@angular/core';
import {InitialsPipe} from '../../pipes/initials/initials.pipe';

@Component({
  selector: 'lib-avatar',
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  imports: [
    InitialsPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  image_url = input<string>();
  name = input<string>('Unknown User');

  protected image_load_error = signal<boolean>(false);

  protected on_image_error(): void {
    this.image_load_error.set(true)
  }
}
