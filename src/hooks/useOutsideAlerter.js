import { useEffect } from 'react';

function useOutsideAlerter(ref, callback) {
	useEffect(() => {
		function outsideAlertHandler(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				callback();
			}
		}

		document.addEventListener('mousedown', outsideAlertHandler);
		return () => {
			document.removeEventListener('mousedown', outsideAlertHandler);
		};
	}, [ref, callback]);
}

export default useOutsideAlerter;
