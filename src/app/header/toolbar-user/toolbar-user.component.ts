import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'stbui-toolbar-user',
  templateUrl: './toolbar-user.component.html',
  styleUrls: ['./toolbar-user.component.scss']
})
export class ToolbarUserComponent implements OnInit {

  isOpen: boolean = false;

  @HostListener('document:click', ['$event', '$event.target']) onClick(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) {
      return;
    }

    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isOpen = false;
    }
  }

  constructor(private _elementRef: ElementRef) {
  }

  ngOnInit() {
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

}
