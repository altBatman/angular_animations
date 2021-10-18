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
  [
    style({ backgroundColor: "#FF759D" }),
    animate(
      "{{duration}} {{easing}}",
      keyframes([
        style({
          offset: 0,
          opacity: 1,
        }),
        style({
          offset: 1,
          transform: "translate3d(-100%, 0, 0)",
          opacity: 0.7,
        }),
      ])
    ),
  ],
  {
    params: {
      duration: "500ms",
      easing: "ease-out",
    },
  }
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

  transition(
    ":leave",
    useAnimation(backOutLeftAnimation, { params: { duration: "1000ms" } })
  ),
]);
