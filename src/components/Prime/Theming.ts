import type { CalendarProps } from 'primereact/calendar';
import { classNames } from 'primereact/utils';

const TRANSITIONS = {
	overlay: {
		timeout: 150,
		classNames: {
			enter: 'opacity-0 scale-75',
			enterActive:
				'opacity-100 !scale-100 transition-transform transition-opacity duration-150 ease-in',
			exit: 'opacity-100',
			exitActive: '!opacity-0 transition-opacity duration-150 ease-linear',
		},
	},
};

type ThemingProps = {
	calendar: {
		root: (props: { props: CalendarProps }) => {
			className: string | undefined;
		};
		input: (props: { props: CalendarProps }) => {
			root: { className: string | undefined };
		};
	};
};
export const Theming: ThemingProps = {
	calendar: {
		root: ({ props }) => ({
			className: classNames('inline-flex w-full relative', {
				'opacity-60 select-none pointer-events-none cursor-default':
					props.disabled,
			}),
		}),
		input: ({ props }) => ({
			root: {
				className: classNames(
					'font-sans text-base-content text-base p-3 border transition-colors duration-200 appearance-none bg-base-100',
					{
						'rounded-lg': !props.showIcon,
						'border-r-0 rounded-l-lg': props.showIcon,
						'border-error': props.invalid,
						'border-base-content/20': !props.invalid,
					},
				),
			},
		}),
	},
};
