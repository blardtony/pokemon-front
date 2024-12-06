import { PrimeReactProvider } from 'primereact/api';
import {
	Calendar as PrimeCalendar,
	type CalendarProps,
} from 'primereact/calendar';
import { Theming } from './Theming';

export const Calendar = (props: CalendarProps) => {
	return <Component {...props} />;
};

export const Component = (props: CalendarProps) => {
	return (
		<PrimeReactProvider value={{ pt: Theming }}>
			<PrimeCalendar {...props} />
		</PrimeReactProvider>
	);
};
