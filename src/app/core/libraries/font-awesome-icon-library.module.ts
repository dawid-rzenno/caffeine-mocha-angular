import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgModule} from "@angular/core";
import {
  faCaretDown,
  faClose,
  faHandHoldingDollar,
  faMugHot,
  faPlus,
  faUserAstronaut,
  faWarning
} from "@fortawesome/free-solid-svg-icons";

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class FontAwesomeIconLibraryModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faUserAstronaut,
      faCaretDown,
      faMugHot,
      faHandHoldingDollar,
      faPlus,
      faClose,
      faWarning
    );
  }
}
