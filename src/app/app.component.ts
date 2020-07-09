import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  // set property of type FormGroup
  signupForm: FormGroup;

  // initialize a form in ngOnInIt
  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", Validators.required),

      gender: new FormControl(this.genders[0]),
      hobbies: new FormArray([]),
    });
  }

  // on form submit
  onSubmit(): void {
    console.log(this.signupForm);
  }

  // add hobbiest to an array
  onAddHobby() {
    // define a formcontrol object
    const controls = new FormControl("", Validators.required);
    // get hobbies control - typecast to FormArray- push control defined to array.
    (<FormArray>this.signupForm.get("hobbies")).push(controls);
  }
}
