import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private toastr: ToastrService) { }

  flashError(message) {
    this.toastr.error(message)
  }

  flashSuccess(message) {
    this.toastr.success(message)
  }

}
