
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {NgModule} from "@angular/core";
import {faUserAstronaut} from "@fortawesome/free-solid-svg-icons";

@NgModule()
export class FontAwesomeIconLibraryModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faUserAstronaut
    );
  }
}
