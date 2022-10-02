export interface INotification {
	variant?: 'error' | 'success' | 'info';
	title?: string;
	message: React.ReactNode;
	duration?: number;
}

export interface NotificationCard extends INotification {
	id: number;
	expiresAt?: Date;
}

export interface NotificationProps {
	notification: NotificationCard;
	config: Required<IConfig>;
	remove: (id: number) => void;
}

export type NotificationContextType = {
	show: (value: INotification) => number;
	remove?: (id: number) => void;
};

export type positionTypes =
	| 'top-left'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-right'
	| 'top-center'
	| 'bottom-center'
	| 'center';

export type IConfig = Partial<{
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

export interface NotificationProviderProps {
	children: React.ReactNode;
	config: IConfig;
}
