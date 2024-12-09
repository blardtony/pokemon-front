import {
	Calendar as PrimeCalendar,
	type CalendarProps,
} from 'primereact/calendar';

export const Calendar = (props: CalendarProps) => {
	return <PrimeCalendar {...props} />;
};
