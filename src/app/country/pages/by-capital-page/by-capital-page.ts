import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { Country } from '../../services/country';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPage {

  //Injectamos el servicio de Country para poder usarlo en este componente

  countryService = inject(Country);
  //Metodo para capturar el valor del input
  onSearch(query: string) {
    this.countryService.searchByCapital(query).subscribe((resp) => {
      console.log(resp);
    });
  }
}
