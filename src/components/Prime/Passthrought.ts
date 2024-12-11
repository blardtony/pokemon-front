import { PrimeReactPTOptions } from "primereact/api";
import { classNames } from "primereact/utils";

export const Pt: PrimeReactPTOptions = {
  calendar: {
    root: ({ props }) => ({
      className: classNames("inline-flex w-full relative", {
        "opacity-60 select-none pointer-events-none cursor-default":
          props.disabled,
      }),
    }),
    input: ({ props }) => ({
      root: {
        className: classNames(
          "font-sans text-base-content text-base p-3 border transition-colors duration-200 appearance-none bg-base-100",
          {
            "rounded-lg": !props.showIcon,
            "border-r-0 rounded-l-lg": props.showIcon,
            "border-error": props.invalid,
            "border-base-content/20": !props.invalid,
          },
        ),
      },
    }),
  },
};
