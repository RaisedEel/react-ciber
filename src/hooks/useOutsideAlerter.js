import { useEffect } from 'react';

// Hook that uses an reference to a component to perform a callback when
// the user clicks outside of the referenced component
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
