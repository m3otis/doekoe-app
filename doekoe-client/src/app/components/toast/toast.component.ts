import { Component, OnInit, HostBinding, TemplateRef } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@HostBinding('class.ngb-toasts')
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  constructor(public toastService: ToastService) {}

  ngOnInit() {}

  isTemplate(toast) {
    return toast.textOrTpl instanceof TemplateRef;
  }
}
