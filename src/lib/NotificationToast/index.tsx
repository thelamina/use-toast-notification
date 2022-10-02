import React, {
	createContext,
	FC,
	useCallback,
	useEffect,
	useState,
} from 'react';
import styles from './index.module.css';

const classnames = (...classes: string[]) => {
	return classes.filter(Boolean).join(' ');
};

interface INotification {
	variant?: 'error' | 'success' | 'info';
	title?: string;
	message: React.ReactNode;
	duration?: number;
}

interface NotificationCard extends INotification {
	id: number;
	expiresAt?: Date;
}

interface NotificationProps {
	notification: NotificationCard;
	config: Required<configType>;
	remove: (id: number) => void;
}

type NotificationContextType = {
	show: (value: INotification) => number;
	remove?: (id: number) => void;
};

export const NotificationContext = createContext<
	NotificationContextType | undefined
>(undefined);

/**
 **  Notification component to be imported from components
 * @param {*} {
 * 	notification,
 * 	remove(notification_id),
 * }
 * @return {*}
 */

const Notification: FC<NotificationProps> = (props) => {
	const { notification, config, remove: removeNotification } = props;
	const getStyle = (
		variant?: string
	): {
		iconColor: string;
		container: string;
		title: string;
		body: string;
	} => {
		switch (variant) {
			case 'error':
				return {
					iconColor: 'red',
					container: 'border-l-red-600',
					title: 'text-red-600',
					body: 'text-red-600',
				};
				break;

			case 'success':
				return {
					iconColor: 'green',
					container: 'border-l-green-600',
					title: 'text-green-600',
					body: 'text-green-600',
				};
				break;

			case 'info':
				return {
					iconColor: 'indigo',
					container: 'border-l-indigo-600',
					title: 'text-indigo-600',
					body: 'text-indigo-600',
				};

				break;

			default:
				return {
					iconColor: '',
					container: '',
					title: '',
					body: '',
				};
		}
	};

	const {
		closeIcon,
		successIcon,
		errorIcon,
		infoIcon,
		showClose,
		showTitle,
		showIcon,
		successColor,
		errorColor,
		infoColor,
		titleClassName,
		messageClassName,
	} = config;

	console.log(config);

	return (
		<div
			className={classnames(
				getStyle(notification.variant).container,
				styles.cardBody
			)}
		>
			<div className={styles.cardContent}>
				{showTitle && (
					<div className={styles.cardHead}>
						{showIcon && (
							<span className={styles.icon}>
								{notification.variant === 'success' &&
									(successIcon ?? (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
											fill={successColor}
										>
											<path
												fillRule='evenodd'
												d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
												clipRule='evenodd'
											/>
										</svg>
									))}

								{notification.variant === 'error' &&
									(errorIcon ?? (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
											fill={errorColor}
										>
											<path
												fillRule='evenodd'
												d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z'
												clipRule='evenodd'
											/>
										</svg>
									))}

								{notification.variant === 'info' &&
									(infoIcon ?? (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
											fill={infoColor}
										>
											<path
												fillRule='evenodd'
												d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z'
												clipRule='evenodd'
											/>
										</svg>
									))}
							</span>
						)}
						<h4
							className={classnames(
								styles.cardTitle,
								titleClassName
							)}
						>
							{notification.title ||
								notification.variant?.toLocaleLowerCase()}
						</h4>
					</div>
				)}
				<p className={classnames(styles.cardMessage, messageClassName)}>
					{notification.message}
				</p>
			</div>

			{showClose && (
				<button
					className={classnames(styles.icon, styles.closeButton)}
					onClick={() => removeNotification(notification.id)}
				>
					{closeIcon ?? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='#fff'
						>
							<path
								fillRule='evenodd'
								d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z'
								clipRule='evenodd'
							/>
						</svg>
					)}
				</button>
			)}
		</div>
	);
};

type positionTypes =
	| 'top-left'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-right'
	| 'top-center'
	| 'bottom-center'
	| 'center';

type configType = Partial<{
	position: positionTypes;
	duration: number;
	showClose: boolean;
	showTitle: boolean;
	containerClassName: string;
	errorColor: string;
	successColor: string;
	infoColor: string;
	titleClassName: string;
	messageClassName: string;
	showIcon: boolean;
	closeIcon: React.ReactNode;
	successIcon: React.ReactNode;
	errorIcon: React.ReactNode;
	infoIcon: React.ReactNode;
}>;

interface NotificationProviderProps {
	children: React.ReactNode;
	config: configType;
}

const NotificationProvider: FC<NotificationProviderProps> = (props) => {
	const { children, config } = props;

	const configDefault: Required<configType> = {
		showClose: false,
		showTitle: false,
		position: 'top-right',
		duration: 10,
		errorColor: 'red',
		successColor: 'green',
		infoColor: 'blue',
		containerClassName: '',
		titleClassName: '',
		messageClassName: '',
		closeIcon: null,
		successIcon: null,
		errorIcon: null,
		infoIcon: null,
		showIcon: true,
	};

	const configData = {
		...configDefault,
		...config,
	};

	const [notifications, setNotifications] = useState<NotificationCard[]>([]);

	// Show Notification
	const show = useCallback((data: INotification) => {
		const defaultData: Required<INotification> = {
			variant: 'info',
			duration: config.duration || 5,
			message: '',
			title: '',
		};

		const value = {
			...defaultData,
			...data,
		};

		const id = Math.random();
		const expiresAt = new Date();
		const secondsToAdd = value.duration;
		expiresAt.setSeconds(expiresAt.getSeconds() + secondsToAdd);

		console.log(value);

		const notification: NotificationCard = {
			...value,
			id,
			expiresAt: value.duration ? expiresAt : undefined,
		};

		setNotifications((current) => [...current, notification]);
		return id;
	}, []);

	// Close notification
	const remove = useCallback((id: number) => {
		setNotifications((current) => current.filter((c) => c.id !== id));
	}, []);

	useEffect(() => {
		const intervalId = setInterval(
			() =>
				setNotifications((current) =>
					current.filter((c) => {
						if (!c.expiresAt) {
							return true;
						}
						if (c.expiresAt > new Date()) {
							return true;
						}
						return false;
					})
				),
			1000
		);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<NotificationContext.Provider value={{ show, remove }}>
			<>{children}</>
			<div
				className={classnames(
					styles.container,
					styles[configData.position]
				)}
			>
				{notifications.map((notification) => (
					<Notification
						config={configData}
						key={notification.id}
						notification={notification}
						remove={remove}
					/>
				))}
			</div>
		</NotificationContext.Provider>
	);
};

/**
 * Notification hook
 *
 */
export const useNotification = () => {
	const context = React.useContext(NotificationContext);

	if (context === undefined) {
		throw new Error(
			'useNotification must be used within a NotificationProvider'
		);
	}

	return context;
};

export default NotificationProvider;
