import {Injectable} from '@angular/core'

declare let toastr: any

Injectable()
export class ToastrService {
    success(message: any, title?: string) {
        toastr.success(message, title)
    }

    info(message: any, title?: string) {
        toastr.info(message, title)
    }

    warning(message: any, title?: string) {
        toastr.warning(message, title)
    }

    error(message: any, title?: string) {
        toastr.error(message, title)
    }
}