import { positionStyles, styles } from '../utils';

export interface INotification {
	variant?: variantTypes;
	title?: string;
	message: React.ReactNode;
	duration?: number;
}

export type variantTypes = 'error' | 'success' | 'info';

export interface NotificationCard extends INotification {
	id: number;
	expiresAt?: Date;
	animate: boolean;
}

export interface NotificationProps {
	notification: NotificationCard;
	config: Required<IConfig>;
	remove: (id: number) => void;
	styles: typeof styles & typeof positionStyles;
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

export type stylesProperties =
	| 'container'
	| 'cardContent'
	| 'icon'
	| 'closeButton'
	| 'cardContainer'
	| 'cardIcon'
	| 'cardTitle'
	| 'animateIn'
	| 'animateOut'
	| 'cardMessage';

export type IConfig = Partial<{
	position: positionTypes;
	duration: number;
	animationDuration: number;
	isCloseable: boolean;
	showTitle: boolean;
	errorColor: string;
	successColor: string;
	infoColor: string;
	showIcon: boolean;
	closeIcon: React.ReactNode;
	successIcon: React.ReactNode;
	errorIcon: React.ReactNode;
	infoIcon: React.ReactNode;
}>;

export interface NotificationProviderProps {
	children: React.ReactNode;
	config?: IConfig;
	overrideStyles?: Partial<typeof styles>;
}
