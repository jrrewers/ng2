import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms"
import {AuthService} from "./auth.service"
import {Router} from "@angular/router"

@Component({
    templateUrl: `app/user/profile.component.html`,
    styles: [`
        em {
            float: right;
            color: #e05c65;
            padding-left: 10px
        }

        .error input {
            background: #e3c3c5
        }
    `]
})
export class ProfileComponent implements OnInit {
    private profileForm: FormGroup
    private firstName: FormControl
    private lastName: FormControl

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
        this.firstName = new FormControl
        (this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
        this.lastName = new FormControl
        (this.authService.currentUser.lastName, Validators.required)

        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        })
    }

    cancel() {
        this.router.navigate(['events'])
    }

    saveProfile(formValues) {
        if (this.profileForm.valid) {
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
            this.router.navigate(['events'])
        }
    }

    validateFirstName() {
        return this.firstName.valid || this.firstName.untouched
    }

    validateLastName() {
        return this.lastName.valid || this.lastName.untouched
    }

}