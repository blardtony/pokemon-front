import { PrimeReactPTOptions } from "primereact/api";
import { classNames } from "primereact/utils";

export const TRANSITIONS = {
  toggleable: {
    timeout: 500,
    classNames: {
      enter: "max-h-0",
      enterActive:
        "!max-h-[1000px] overflow-hidden transition-[max-height] duration-500 ease-in",
      exit: "max-h-[1000px]",
      exitActive:
        "!max-h-0 overflow-hidden transition-[max-height] duration-500 ease-out",
    },
  },
  overlay: {
    timeout: 150,
    classNames: {
      enter: "opacity-0 scale-75",
      enterActive:
        "opacity-100 !scale-100 transition-transform transition-opacity duration-150 ease-in",
      exit: "opacity-100",
      exitActive: "!opacity-0 transition-opacity duration-150 ease-linear",
    },
  },
};
export const Pt: PrimeReactPTOptions = {
  calendar: {
    root: ({ props }) => ({
      className: classNames("inline-flex max-w-full relative", {
        "opacity-60 select-none pointer-events-none cursor-default":
          props.disabled,
      }),
    }),
    input: {
      root: ({ parent }) => ({
        className: classNames(
          "w-full font-sans text-base text-base-content bg-base-100 p-3 border transition-colors duration-200 appearance-none",
          {
            "rounded-lg": !parent.props.showIcon,
            "border-r-0 rounded-l-lg": parent.props.showIcon,
            "border-base-content/20": !parent.props.invalid,
            "border-error": parent.props.invalid,
          },
        ),
      }),
    },
    dropdownButton: {
      root: ({ props }) => ({
        className: classNames({ "rounded-l-none": props.icon }),
      }),
    },
    panel: ({ props }) => ({
      className: classNames(
        "bg-white",
        "top-0 left-0 w-auto min-w-min p-2 rounded-lg",
        {
          "shadow-md border-0 absolute": !props.inline,
          "inline-block overflow-x-auto border border-base-content/20":
            props.inline,
        },
      ),
    }),
    header: {
      className: classNames(
        "flex items-center justify-between",
        "p-2 text-base-content bg-white font-semibold m-0 border-b border-base-content/20 rounded-t-lg",
      ),
    },
    previousButton: {
      className: classNames(
        "flex items-center justify-center cursor-pointer overflow-hidden relative",
        "w-8 h-8 text-base-content border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out",
        "hover:border-transparent hover:bg-base-200",
      ),
    },
    title: "leading-8 mx-auto",
    monthTitle: {
      className: classNames(
        "text-base-content transition duration-200 font-semibold p-2",
        "mr-2",
        "hover:text-primary",
      ),
    },
    yearTitle: {
      className: classNames(
        "text-base-content transition duration-200 font-semibold p-2",
        "hover:text-primary",
      ),
    },
    nextButton: {
      className: classNames(
        "flex items-center justify-center cursor-pointer overflow-hidden relative",
        "w-8 h-8 text-base-content border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out",
        "hover:border-transparent hover:bg-base-200",
      ),
    },
    table: {
      className: classNames("border-collapse w-full", "my-2 mx-0"),
    },
    tableHeaderCell: "p-2",
    weekDay: "text-base-content",
    day: "p-2",
    dayLabel: ({ context }) => ({
      className: classNames(
        "w-10 h-10 rounded-full transition-shadow duration-200 border-transparent border",
        "flex items-center justify-center mx-auto overflow-hidden relative",
        "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(251,27,27,.5)]",
        {
          "opacity-60 cursor-default": context.disabled,
          "cursor-pointer": !context.disabled,
        },
        {
          "text-base-content bg-transparent hover:bg-base-200":
            !context.selected && !context.disabled,
          "text-primary bg-primary/10 hover:bg-primary/20":
            context.selected && !context.disabled,
        },
      ),
    }),
    monthPicker: "my-2",
    month: ({ context }) => ({
      className: classNames(
        "w-1/3 inline-flex items-center justify-center cursor-pointer overflow-hidden relative",
        "p-2 transition-shadow duration-200 rounded-lg",
        "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(251,27,27,.5)]",
        {
          "text-base-content bg-transparent hover:bg-base-200":
            !context.selected && !context.disabled,
          "text-primary bg-primary/10 hover:bg-primary/20":
            context.selected && !context.disabled,
        },
      ),
    }),
    yearPicker: {
      className: classNames("my-2"),
    },
    year: ({ context }) => ({
      className: classNames(
        "w-1/2 inline-flex items-center justify-center cursor-pointer overflow-hidden relative",
        "p-2 transition-shadow duration-200 rounded-lg",
        "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(251,27,27,.5)]",
        {
          "text-base-content bg-transparent hover:bg-base-200 ":
            !context.selected && !context.disabled,
          "text-primary bg-primary/10 hover:bg-primary/20":
            context.selected && !context.disabled,
        },
      ),
    }),
    timePicker: {
      className: classNames(
        "flex justify-center items-center",
        "border-t-1 border-solid border-base-300 p-2",
      ),
    },
    separatorContainer: "flex items-center flex-col px-2",
    separator: "text-xl",
    hourPicker: "flex items-center flex-col px-2",
    minutePicker: "flex items-center flex-col px-2",
    ampmPicker: "flex items-center flex-col px-2",
    incrementButton: {
      className: classNames(
        "flex items-center justify-center cursor-pointer overflow-hidden relative",
        "w-8 h-8 text-base-content border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out",
        "hover:border-transparent hover:bg-base-200",
      ),
    },
    decrementButton: {
      className: classNames(
        "flex items-center justify-center cursor-pointer overflow-hidden relative",
        "w-8 h-8 text-base-content border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out",
        "hover:border-transparent hover:bg-base-200",
      ),
    },
    groupContainer: "",
    group: "",
    transition: TRANSITIONS.overlay,
  },
};
