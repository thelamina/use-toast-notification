import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import NotificationProvider from './lib';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<NotificationProvider
			config={{
				position: 'top-right',
				isCloseable: false,
				showTitle: true,
				showIcon: true,
				duration: 5,
			}}
		>
			<App />
		</NotificationProvider>
	</React.StrictMode>
);
