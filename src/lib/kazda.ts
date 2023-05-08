import type { Kazda } from 'kazda';
import convertToHTML from '../utils/convertToHTML';

const kazda: Kazda = {
	createRoot: domRoot => {
		return {
			render: children => {
				if (typeof children === 'function') children = children();

				if (Array.isArray(children)) {
					for (const child of children) {
						domRoot.appendChild(
							convertToHTML(typeof child === 'function' ? child() : child)
						);
					}

					return;
				}

				domRoot.appendChild(convertToHTML(children));
			}
		};
	},

	createElement: (type, props, ...children) => {
		return {
			$$typeof: Symbol('kazda.element'),
			type,
			props: {
				...props,
				children
			}
		};
	}
};

export default kazda;
