import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export class Registration {
    constructor(
      public firstName: string = "",
      public lastName: string = "",
      public identification: string = "",
      public genre: string = "Select genre",
      public age: string = ""
    ) {}
  }

