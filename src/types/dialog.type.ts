import type { ReactNode } from 'react';

export type DialogProps = {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
};
