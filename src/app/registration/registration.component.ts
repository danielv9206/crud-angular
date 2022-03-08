import { Component, OnInit } from "@angular/core";
import { Registration } from '../models/registration';

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
    registrations: Registration[] = [];
    regModel: Registration;
    showNew: Boolean = false;
    submitType: string = "Save";
    selectedRow: number;
    genres: string[] = ["M", "F", "No binary"];
  constructor() {
      this.registrations.push(
      new Registration(
        "Andres",
        "Guzman",
        "10555584",
        "M",
        "26"
      )
    );

    this.registrations.push(
      new Registration(
        "Thomas",
        "Tele",
        "102098872",
        "M",
        "60"
      )
    );

    this.registrations.push(
      new Registration(
        "John",
        "Richards",
        "56745677373",
        "M",
        "25"
      )
    );
  }

  
onNew() {
  this.regModel = new Registration();
  this.submitType = 'Save';
  this.showNew = true;
  }

onSave() {
  if (this.submitType === 'Save') {
    this.registrations.push(this.regModel);
  } else {
  
  // Update existing 
  
  this.registrations[this.selectedRow].firstName = this.regModel.firstName;  
  this.registrations[this.selectedRow].lastName = this.regModel.lastName;  
  this.registrations[this.selectedRow].identification = this.regModel.identification;
  this.registrations[this.selectedRow].genre = this.regModel.genre;  
  this.registrations[this.selectedRow].age = this.regModel.age;
}
  
  this.showNew = false;
  
}

onEdit(index: number) {
  this.selectedRow = index;
  this.regModel = new Registration();
  // Retrieve selected 
  this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
  this.submitType = 'Update';
  this.showNew = true;
  
}

onDelete(index: number) {
  this.registrations.splice(index, 1);
}

onCancel() {
  this.showNew = false;
}

onChangeGenre(genre: string) {
  this.regModel.genre = genre;
}
  ngOnInit() {}
}


