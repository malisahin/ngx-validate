import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Optional,
  TrackByFunction,
  ViewEncapsulation,
} from '@angular/core';
import { Validation } from '../models';

@Component({
  selector: 'validation-error',
  template: `
    <div *ngFor="let error of errors; trackBy: trackByFn" class="invalid-feedback">{{ error.message }}</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ValidationErrorComponent {
  trackByFn: TrackByFunction<Validation.Error> = (_, item) => item.key;

  get errors(): Validation.Error[] {
    return this.validationErrors || [];
  }

  constructor(
    @Optional()
    @Inject('VALIDATION_ERRORS')
    protected readonly validationErrors: Validation.Error[],
  ) {}
}
