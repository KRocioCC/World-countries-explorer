import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  standalone: true,
  imports: [],
  templateUrl: './search-input.html',
})
export class SearchInput {

  value = output<string>();

  placeholder = input('Buscar');
}
