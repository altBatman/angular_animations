import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

export const fade = trigger("fade", [
  state("void", style({ backgroundColor: "lightBlue", opacity: 0 })),
  transition(":enter, :leave", [animate(1000)]),
]);

export const slide = trigger("slide", [
  transition(":enter", [
    style({ transform: "translateX(-80px)", backgroundColor: "white" }),
    animate(
      2000,
      style({ transform: "translateX(0px)", backgroundColor: "green" })
    ),
  ]),

  transition(":leave", [
    animate(
      300,
      style({ backgroundColor: "red", transform: "translateX(-30px)" })
    ),
  ]),
]);
