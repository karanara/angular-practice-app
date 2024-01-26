import { Directive, HostBinding, HostListener ,ElementRef} from "@angular/core";
@Directive({
    selector :'[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    /*@HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }*///only when click on button again
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }//clcik anywhere,dropdown will be closed
  constructor(private elRef: ElementRef) {}
}
