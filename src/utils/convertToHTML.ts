import type { CSSProperties, HTMLEvents, KazdaNode } from 'kazda';

const convertToHTML = <K extends keyof HTMLElementTagNameMap>(
	kazdaNode: KazdaNode<K>
): HTMLElementTagNameMap[K] | Text => {
	if (typeof kazdaNode === 'string')
		return document.createTextNode(kazdaNode);

	const { props, type } = kazdaNode;

	const domElement = document.createElement(
		type
	) as HTMLElementTagNameMap[K];

	for (const [propKey, propValue] of Object.entries(props)) {
		if (propKey === 'style') {
			for (const [cssKey, cssValue] of Object.entries(propValue)) {
				domElement.style[cssKey as keyof CSSProperties] = cssValue;
			}
		} else if (propKey.startsWith('on')) {
			const [eventKey, eventListener] = [propKey, propValue] as [
				eventKey: keyof HTMLEvents,
				eventValue: (ev: MouseEvent | SubmitEvent) => void
			];

			domElement.addEventListener(
				eventKey.substring(2).toLowerCase(),
				eventListener
			);
		} else if (propKey === 'children') {
			const children = propValue as KazdaNode<K>[];

			for (const child of children) {
				domElement.append(convertToHTML<K>(child));
			}
		} else {
			domElement[propKey as keyof HTMLElementTagNameMap[K]] =
				propValue as HTMLElementTagNameMap[K][keyof HTMLElementTagNameMap[K]];
		}
	}

	return domElement;
};

export default convertToHTML;
