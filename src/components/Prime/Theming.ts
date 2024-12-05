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

export const Theming: any = {
	calendar: {
		root: ({ props }) => ({
			className: classNames('inline-flex max-w-full relative', {
				'opacity-60 select-none pointer-events-none cursor-default':
					props.disabled,
			}),
			input: ({ props }) => ({
				root: {
					className: classNames(
						'font-sans text-base-content text-base p-3 border border-base-100 transition-colors duration-200 appearance-none bg-base-100',
						'hover:border-primary',
						{
							'rounded-lg': !props.showIcon,
							'border-r-0 rounded-l-lg': props.showIcon,
						},
					),
				},
			}),
		}),
	},
};
