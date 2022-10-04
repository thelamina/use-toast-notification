import { stylesProperties, positionTypes } from '../types';

type Styles = { [key in stylesProperties]: React.CSSProperties };

export const styles: Styles = {
	container: {
		position: 'fixed',
		zIndex: 50,
		padding: 0,
		margin: 0,
		boxSizing: 'border-box',
	},

	cardContainer: {
		borderLeft: '4px',
		border: '4px solid',
		transition: 'opacity 0.3s ease-in-out',
		opacity: 1,
		position: 'relative',
		zIndex: 4,
		margin: 0,
		marginBottom: '8px',
		borderRadius: '8px',
		padding: '0.6rem .6rem',
		maxWidth: '32rem',
		minWidth: '17rem',
		
		backgroundColor: '#fff',
		color: '#000',
	},

	cardContent: {
		textAlign: 'left',
		padding: 0,
		display: 'flex',
		alignItems: 'flex-start',
		margin: 0,
	},
	cardIcon: {
		margin: 0,
		padding: 0,
		display: 'inline-block',
		marginRight: '.4rem',
	},

	cardTitle: {
		textTransform: 'capitalize',
		paddingLeft: '0rem',
		margin: 0,
		paddingBottom: '0.4rem',
	},

	cardMessage: {
		display: 'inline-block',
		position: 'relative',
		fontSize: '0.9rem',
		fontWeight: 400,
		padding: 0,
		margin: 0,
	},

	icon: {
		width: '1.5rem',
		height: '1.5rem',
	},

	closeButton: {
		position: 'absolute',
		width: '2rem',
		border: 'none',
		background: 'transparent',
		boxShadow: 'none',
		right: '-3%',
		top: '-6%',
		zIndex: 999,
		cursor: 'pointer',
	},
};

type positionStyleType = { [key in positionTypes]: React.CSSProperties };

export const positionStyles: positionStyleType = {
	'bottom-left': {
		left: '3%',
		bottom: '3%',
		marginRight: 'auto',
	},

	'bottom-right': {
		right: '3%',
		bottom: '3%',
		marginLeft: 'auto',
	},

	'top-left': {
		left: '3%',
		top: '3%',
		marginRight: 'auto',
	},

	'top-right': {
		right: '3%',
		marginLeft: 'auto',
		top: '3%',
	},

	'top-center': {
		margin: 'auto',
		top: '3%',
	},

	'bottom-center': {
		margin: 'auto',
		bottom: '3%',
	},

	center: {
		margin: 'auto',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	},
};
