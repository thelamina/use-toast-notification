import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import NotificationProvider from './lib/NotificationToast';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<NotificationProvider
			config={{
				position: 'center',
				showClose: true,
				showIcon: false,
				showTitle: true,
				duration: 30,
			}}
		>
			<App />
		</NotificationProvider>
	</React.StrictMode>
);
