import {
  animate,
  animation,
  keyframes,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from "@angular/animations";

export const backOutLeftAnimation = animation(
  animate(
    "500ms ease-in",
    keyframes([
      style({
        offset: 0,
        transform: "scale(1)",
        opacity: 1,
        backgroundColor: "#FF759D",
      }),
      style({
        offset: 0.2,
        transform: " translateX(0px) scale(0.7)",
        opacity: 0.7,
        backgroundColor: "#FF759D",
      }),
      style({
        offset: 1,
        transform: " translateX(-50%) scale(0.7)",
        opacity: 0.7,
        backgroundColor: "#FF759D",
      }),
    ])
  )
);

const fadeInAnimation = animation([style({ opacity: 0 }), animate(1000)]);
const fadeOutAnimation = animation(animate(1000, style({ opacity: 0 })));

export const fade = trigger("fade", [
  state("void", style({ backgroundColor: "lightBlue", opacity: 0 })),
  transition(":enter", useAnimation(fadeInAnimation)),
  transition(":leave", useAnimation(fadeOutAnimation)),
]);

export const slide = trigger("slide", [
  transition(":enter", [
    style({ backgroundColor: "white", opacity: 0 }),
    animate(1000, style({ backgroundColor: "#bde78c", opacity: 1 })),
  ]),

  transition(":leave", useAnimation(backOutLeftAnimation)),
]);
