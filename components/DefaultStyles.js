import { createGlobalStyle } from 'styled-components'
import { theme } from '../config/theme'

export default createGlobalStyle`
	@font-face {
		font-family: 'PlayfairDisplay';
		src: url('/fonts/PlayfairDisplay-Bold.ttf');
		font-weight: 800;
	}
	@font-face {
		font-family: 'Open Sans';
		src: url('/fonts/OpenSans-Regular.ttf');
		font-weight: 400;
	}
	@font-face {
		font-family: 'Eina 03';
		src: url('/fonts/eina-03-regular.ttf');
		font-weight: 400;
	}
	@font-face {
		font-family: 'Eina 03';
		src: url('/fonts/eina-03-semibold.otf');
		font-weight: 700;
	}

	* {
		box-sizing: border-box;
		outline: none;
	}

	body {
		font-family: 'Eina 03';
		font-weight: 400;
		font-size: 10px;
		margin: 0;
	}

	p, span, li, a, button {
		font-size: 1.8em;
	}

	h1, h2, h3, h4, h5, h6, p {
		margin-top: 0;
		margin-bottom: 0;
		line-height: 1.3;
		color: ${theme.colors.black}
	}

	a {
		color: ${theme.colors.primary}
	}

	.white {
		color: #fff !important;
	}

	.hide {
		display: none;
	}

	.primary {
		color: ${theme.colors.primary};
	}

	.normal {
		font-weight: normal;
	}

	.bold {
		font-weight: 900;
	}

	.borderBottom {
		border-bottom: 1px solid ${theme.colors.gray}
	}

	.borderTop {
		border-top: 1px solid ${theme.colors.gray}
	}

	.display-flex {
		display: flex;
	}
	.flex {
		&-1 {
			flex: 1;
		}
		&-2 {
			flex: 2;
		}
		&-3 {
			flex: 3;
		}
		&-width {
			width: 100%;
		}
		&-row {
			flex-direction: row;
		}
		&-column {
			flex-direction: column;
		}
		&-jc {
			&-sb {
				justify-content: space-between;
			}
		}
		&-ai {
			&-fe {
				align-items: flex-end;
			}
			&-c {
				align-items: center;
			}
		}
	}

	.noWrap {
		flex-direction: row;
		flex-wrap: nowrap;
		display: flex;
	}
`
