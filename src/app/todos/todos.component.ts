import {
  animate,
  animateChild,
  group,
  query,
  stagger,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component } from "@angular/core";
import { fade, slide } from "app/animations/animations";

@Component({
  selector: "todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
  animations: [
    slide,
    fade,
    trigger("todoAnimation", [
      transition(":enter", [style({ opacity: 0 }), animate(1000)]),
      transition(":leave", [animate(1000, style({ opacity: 0 }))]),
    ]),
    trigger("todosAnimation", [
      transition(":enter", [
        group([
          query("h1", [
            style({ transform: "translateY(-50%)" }),
            animate(1000),
          ]),
          query("@slide", stagger(100, animateChild())),
        ]),
      ]),
    ]),
  ],
})
export class TodosComponent {
  items: any[] = [
    "Wash the dishes",
    "Call the accountant",
    "Apply for a car insurance",
  ];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = "";
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
