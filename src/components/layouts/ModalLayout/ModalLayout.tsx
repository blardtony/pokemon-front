import { useCallback, useEffect, useRef } from 'react';
import type { DialogProps } from '../../../types/dialog.type';

const ModalLayout = ({ children, isOpen, onClose }: DialogProps) => {
	const modalRef = useRef<HTMLDialogElement>(null);

	const handleModalState = useCallback(() => {
		const modalElement = modalRef.current;
		if (!modalElement) return;

		if (isOpen) {
			modalElement.showModal();
		} else {
			modalElement.close();
		}
	}, [isOpen]);

	useEffect(() => {
		handleModalState();
	}, [handleModalState]);

	useEffect(() => {
		const modalElement = modalRef.current;
		if (!modalElement) return;

		const handleClose = onClose;

		modalElement.addEventListener('close', handleClose);

		return () => {
			modalElement.removeEventListener('close', handleClose);
		};
	}, [onClose]);

	// autofocus native fix. use data-autofix attribute on the element you want to focus
	// https://github.com/facebook/react/issues/23301
	useEffect(() => {
		const timer = setTimeout(() => {
			if (!modalRef || !modalRef.current) {
				return;
			}
			const focus: HTMLElement | null = modalRef.current.querySelector(
				'[data-autoFocus=true]',
			) as HTMLElement;

			focus?.focus();
		});

		return () => clearTimeout(timer);
	}, []);

	if (!isOpen) return null;

	return (
		<dialog ref={modalRef} className="modal">
			<div className="modal-box">
				<form method="dialog">
					<button
						type="submit"
						className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
					>
						✕
					</button>
				</form>
				{children}
			</div>
			<form method="dialog" className="modal-backdrop">
				<button type="submit">close</button>
			</form>
		</dialog>
	);
};

export default ModalLayout;
