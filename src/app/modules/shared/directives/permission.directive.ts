import {
  Directive,
  Input,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  OnInit,
} from '@angular/core';
import { AuthService } from '../../authentication/services/auth.service';

@Directive({
  selector: '[appPermission]',
})
export class PermissionDirective implements OnInit {
  private permissions: string[] = [];

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private auth: AuthService
  ) {}

  @Input()
  set appPermission(val: string[]) {
    this.permissions = val;
  }

  ngOnInit(): void {
    const permissionsStr = localStorage.getItem('permissions') || '[]';
    const permissionsArr = JSON.parse(permissionsStr);
    if (permissionsArr.includes(this.permissions[0])) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
