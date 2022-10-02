import {NavigationService} from "../../../core/navigation/navigation.service";
import {Directive, HostListener} from "@angular/core";

@Directive({
  selector: '[back-button]',
})
export class BackButtonDirective {
  constructor(private navigationService: NavigationService) {}

  @HostListener('click')
  onClick(): void {
    this.navigationService.back()
  }
}
