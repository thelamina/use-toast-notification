import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NotificationProvider from './lib';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<NotificationProvider
			config={{
				position: 'center',
				showClose: true,
				showIcon: false,
				showTitle: true,
				duration: 20,
			}}
		>
			<App />
		</NotificationProvider>
	</React.StrictMode>
);
