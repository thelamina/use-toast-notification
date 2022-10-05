import './App.css';
import { useNotification } from './lib';
import { variantTypes } from './lib/types';

function App() {
	const notification = useNotification();

	const handleShow = (variant: variantTypes) => {
		notification.show({
			message: 'This is a sample Notification content displayed',
			variant,
		});
	};

	return (
		<div className='App'>
			<h1>useNotification hook</h1>
			<div className='card'>
				<button className='button' onClick={() => handleShow('error')}>
					Show Error
				</button>
				<button
					className='button'
					onClick={() => handleShow('success')}
				>
					Show Success
				</button>
				<button className='button' onClick={() => handleShow('info')}>
					Show Info
				</button>
			</div>
		</div>
	);
}

export default App;
