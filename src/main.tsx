import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import NotificationProvider from './lib';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<NotificationProvider
			config={{
				position: 'top-left',
				showClose: true,
				showTitle: true,
				duration: 10,
			}}
		>
			<App />
		</NotificationProvider>
	</React.StrictMode>
);
