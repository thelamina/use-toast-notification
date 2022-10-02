import './App.css';
import { useNotification } from './lib';

function App() {
	const notification = useNotification();

	const handleShow = () => {
		notification.show({
			message: 'Click on the Vite and React logos to learn more',
		});
	};

	return (
		<div className='App'>
			<h1>useNotification hook</h1>
			<div className='card'>
				<button className='button' onClick={handleShow}>
					Show Notification
				</button>
			</div>
		</div>
	);
}

export default App;
