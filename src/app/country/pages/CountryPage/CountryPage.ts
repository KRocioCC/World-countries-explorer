import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [],
  templateUrl: './CountryPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryPage {}
