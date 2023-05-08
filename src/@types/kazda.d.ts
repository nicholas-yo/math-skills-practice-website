declare module 'kazda' {
	export type InputType =
		| 'button'
		| 'checkbox'
		| 'color'
		| 'date'
		| 'datetime'
		| 'datetime-local'
		| 'email'
		| 'file'
		| 'hidden'
		| 'image'
		| 'month'
		| 'number'
		| 'password'
		| 'radio'
		| 'range'
		| 'reset'
		| 'search'
		| 'submit'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week';

	export type InputMode =
		| 'email'
		| 'full-width-latin'
		| 'kana'
		| 'kana-name'
		| 'katakana'
		| 'latin'
		| 'latin-name'
		| 'latin-prose'
		| 'numeric'
		| 'tel'
		| 'url'
		| 'verbatim';

	export type ButtonType = 'submit' | 'reset' | 'menu' | 'button';

	export type HTMLLabelAttributes = Partial<{
		htmlFor: string;
	}>;

	export type HTMLInputAttributes = Partial<{
		inputMode: InputMode;
		type: InputType;
		defaultValue: string;
		placeholder: string;
	}>;

	export type HTMLButtonAttributes = Partial<{
		type: ButtonType;
	}>;

	export type HTMLEvents = Partial<{
		onClick: (ev: MouseEvent) => void;
		onSubmit: (ev: SubmitEvent) => void;
	}>;

	export type HTMLCommonAttributes = Partial<{
		id: string;
		className: string;
		style: Partial<CSSStyleDeclaration>;
		name: string;
	}>;

	export type HTMLAttributes = Partial<{
		input: HTMLInputAttributes & HTMLCommonAttributes;
		label: HTMLLabelAttributes & HTMLCommonAttributes;
		button: HTMLButtonAttributes & HTMLCommonAttributes;
		a: HTMLCommonAttributes;
		abbr: HTMLCommonAttributes;
		address: HTMLCommonAttributes;
		area: HTMLCommonAttributes;
		article: HTMLCommonAttributes;
		aside: HTMLCommonAttributes;
		audio: HTMLCommonAttributes;
		b: HTMLCommonAttributes;
		base: HTMLCommonAttributes;
		bdi: HTMLCommonAttributes;
		bdo: HTMLCommonAttributes;
		blockquote: HTMLCommonAttributes;
		body: HTMLCommonAttributes;
		br: HTMLCommonAttributes;
		canvas: HTMLCommonAttributes;
		caption: HTMLCommonAttributes;
		cite: HTMLCommonAttributes;
		code: HTMLCommonAttributes;
		col: HTMLCommonAttributes;
		colgroup: HTMLCommonAttributes;
		data: HTMLCommonAttributes;
		datalist: HTMLCommonAttributes;
		dd: HTMLCommonAttributes;
		del: HTMLCommonAttributes;
		details: HTMLCommonAttributes;
		dfn: HTMLCommonAttributes;
		dialog: HTMLCommonAttributes;
		div: HTMLCommonAttributes;
		dl: HTMLCommonAttributes;
		dt: HTMLCommonAttributes;
		em: HTMLCommonAttributes;
		embed: HTMLCommonAttributes;
		fieldset: HTMLCommonAttributes;
		figcaption: HTMLCommonAttributes;
		figure: HTMLCommonAttributes;
		footer: HTMLCommonAttributes;
		form: HTMLCommonAttributes;
		h1: HTMLCommonAttributes;
		h2: HTMLCommonAttributes;
		h3: HTMLCommonAttributes;
		h4: HTMLCommonAttributes;
		h5: HTMLCommonAttributes;
		h6: HTMLCommonAttributes;
		head: HTMLCommonAttributes;
		header: HTMLCommonAttributes;
		hgroup: HTMLCommonAttributes;
		hr: HTMLCommonAttributes;
		html: HTMLCommonAttributes;
		i: HTMLCommonAttributes;
		iframe: HTMLCommonAttributes;
		img: HTMLCommonAttributes;
		ins: HTMLCommonAttributes;
		kbd: HTMLCommonAttributes;
		legend: HTMLCommonAttributes;
		li: HTMLCommonAttributes;
		link: HTMLCommonAttributes;
		main: HTMLCommonAttributes;
		map: HTMLCommonAttributes;
		mark: HTMLCommonAttributes;
		menu: HTMLCommonAttributes;
		meta: HTMLCommonAttributes;
		meter: HTMLCommonAttributes;
		nav: HTMLCommonAttributes;
		noscript: HTMLCommonAttributes;
		object: HTMLCommonAttributes;
		ol: HTMLCommonAttributes;
		optgroup: HTMLCommonAttributes;
		option: HTMLCommonAttributes;
		output: HTMLCommonAttributes;
		p: HTMLCommonAttributes;
		picture: HTMLCommonAttributes;
		pre: HTMLCommonAttributes;
		progress: HTMLCommonAttributes;
		q: HTMLCommonAttributes;
		rp: HTMLCommonAttributes;
		rt: HTMLCommonAttributes;
		ruby: HTMLCommonAttributes;
		s: HTMLCommonAttributes;
		samp: HTMLCommonAttributes;
		script: HTMLCommonAttributes;
		section: HTMLCommonAttributes;
		select: HTMLCommonAttributes;
		slot: HTMLCommonAttributes;
		small: HTMLCommonAttributes;
		source: HTMLCommonAttributes;
		span: HTMLCommonAttributes;
		strong: HTMLCommonAttributes;
		style: HTMLCommonAttributes;
		sub: HTMLCommonAttributes;
		summary: HTMLCommonAttributes;
		sup: HTMLCommonAttributes;
		table: HTMLCommonAttributes;
		tbody: HTMLCommonAttributes;
		td: HTMLCommonAttributes;
		template: HTMLCommonAttributes;
		textarea: HTMLCommonAttributes;
		tfoot: HTMLCommonAttributes;
		th: HTMLCommonAttributes;
		thead: HTMLCommonAttributes;
		time: HTMLCommonAttributes;
		title: HTMLCommonAttributes;
		tr: HTMLCommonAttributes;
		track: HTMLCommonAttributes;
		u: HTMLCommonAttributes;
		ul: HTMLCommonAttributes;
		var: HTMLCommonAttributes;
		video: HTMLCommonAttributes;
		wbr: HTMLCommonAttributes;
	}>;

	export type CSSProperties = {
		accentColor: string;
		alignContent: string;
		alignItems: string;
		alignSelf: string;
		alignmentBaseline: string;
		all: string;
		animation: string;
		animationDelay: string;
		animationDirection: string;
		animationDuration: string;
		animationFillMode: string;
		animationIterationCount: string;
		animationName: string;
		animationPlayState: string;
		animationTimingFunction: string;
		appearance: string;
		aspectRatio: string;
		backdropFilter: string;
		backfaceVisibility: string;
		background: string;
		backgroundAttachment: string;
		backgroundBlendMode: string;
		backgroundClip: string;
		backgroundColor: string;
		backgroundImage: string;
		backgroundOrigin: string;
		backgroundPosition: string;
		backgroundPositionX: string;
		backgroundPositionY: string;
		backgroundRepeat: string;
		backgroundSize: string;
		baselineShift: string;
		blockSize: string;
		border: string;
		borderBlock: string;
		borderBlockColor: string;
		borderBlockEnd: string;
		borderBlockEndColor: string;
		borderBlockEndStyle: string;
		borderBlockEndWidth: string;
		borderBlockStart: string;
		borderBlockStartColor: string;
		borderBlockStartStyle: string;
		borderBlockStartWidth: string;
		borderBlockStyle: string;
		borderBlockWidth: string;
		borderBottom: string;
		borderBottomColor: string;
		borderBottomLeftRadius: string;
		borderBottomRightRadius: string;
		borderBottomStyle: string;
		borderBottomWidth: string;
		borderCollapse: string;
		borderColor: string;
		borderEndEndRadius: string;
		borderEndStartRadius: string;
		borderImage: string;
		borderImageOutset: string;
		borderImageRepeat: string;
		borderImageSlice: string;
		borderImageSource: string;
		borderImageWidth: string;
		borderInline: string;
		borderInlineColor: string;
		borderInlineEnd: string;
		borderInlineEndColor: string;
		borderInlineEndStyle: string;
		borderInlineEndWidth: string;
		borderInlineStart: string;
		borderInlineStartColor: string;
		borderInlineStartStyle: string;
		borderInlineStartWidth: string;
		borderInlineStyle: string;
		borderInlineWidth: string;
		borderLeft: string;
		borderLeftColor: string;
		borderLeftStyle: string;
		borderLeftWidth: string;
		borderRadius: string;
		borderRight: string;
		borderRightColor: string;
		borderRightStyle: string;
		borderRightWidth: string;
		borderSpacing: string;
		borderStartEndRadius: string;
		borderStartStartRadius: string;
		borderStyle: string;
		borderTop: string;
		borderTopColor: string;
		borderTopLeftRadius: string;
		borderTopRightRadius: string;
		borderTopStyle: string;
		borderTopWidth: string;
		borderWidth: string;
		bottom: string;
		boxShadow: string;
		boxSizing: string;
		breakAfter: string;
		breakBefore: string;
		breakInside: string;
		captionSide: string;
		caretColor: string;
		clear: string;
		/** @deprecated */
		clip: string;
		clipPath: string;
		clipRule: string;
		color: string;
		colorInterpolation: string;
		colorInterpolationFilters: string;
		colorScheme: string;
		columnCount: string;
		columnFill: string;
		columnGap: string;
		columnRule: string;
		columnRuleColor: string;
		columnRuleStyle: string;
		columnRuleWidth: string;
		columnSpan: string;
		columnWidth: string;
		columns: string;
		contain: string;
		containIntrinsicBlockSize: string;
		containIntrinsicHeight: string;
		containIntrinsicInlineSize: string;
		containIntrinsicSize: string;
		containIntrinsicWidth: string;
		container: string;
		containerName: string;
		containerType: string;
		content: string;
		contentVisibility: string;
		counterIncrement: string;
		counterReset: string;
		counterSet: string;
		cssFloat: string;
		cssText: string;
		cursor: string;
		direction: string;
		display: string;
		dominantBaseline: string;
		emptyCells: string;
		fill: string;
		fillOpacity: string;
		fillRule: string;
		filter: string;
		flex: string;
		flexBasis: string;
		flexDirection: string;
		flexFlow: string;
		flexGrow: string;
		flexShrink: string;
		flexWrap: string;
		float: string;
		floodColor: string;
		floodOpacity: string;
		font: string;
		fontFamily: string;
		fontFeatureSettings: string;
		fontKerning: string;
		fontOpticalSizing: string;
		fontPalette: string;
		fontSize: string;
		fontSizeAdjust: string;
		fontStretch: string;
		fontStyle: string;
		fontSynthesis: string;
		fontVariant: string;
		fontVariantAlternates: string;
		fontVariantCaps: string;
		fontVariantEastAsian: string;
		fontVariantLigatures: string;
		fontVariantNumeric: string;
		fontVariantPosition: string;
		fontVariationSettings: string;
		fontWeight: string;
		gap: string;
		grid: string;
		gridArea: string;
		gridAutoColumns: string;
		gridAutoFlow: string;
		gridAutoRows: string;
		gridColumn: string;
		gridColumnEnd: string;
		/** @deprecated This is a legacy alias of `columnGap`. */
		gridColumnGap: string;
		gridColumnStart: string;
		/** @deprecated This is a legacy alias of `gap`. */
		gridGap: string;
		gridRow: string;
		gridRowEnd: string;
		/** @deprecated This is a legacy alias of `rowGap`. */
		gridRowGap: string;
		gridRowStart: string;
		gridTemplate: string;
		gridTemplateAreas: string;
		gridTemplateColumns: string;
		gridTemplateRows: string;
		height: string;
		hyphenateCharacter: string;
		hyphens: string;
		/** @deprecated */
		imageOrientation: string;
		imageRendering: string;
		inlineSize: string;
		inset: string;
		insetBlock: string;
		insetBlockEnd: string;
		insetBlockStart: string;
		insetInline: string;
		insetInlineEnd: string;
		insetInlineStart: string;
		isolation: string;
		justifyContent: string;
		justifyItems: string;
		justifySelf: string;
		left: string;
		letterSpacing: string;
		lightingColor: string;
		lineBreak: string;
		lineHeight: string;
		listStyle: string;
		listStyleImage: string;
		listStylePosition: string;
		listStyleType: string;
		margin: string;
		marginBlock: string;
		marginBlockEnd: string;
		marginBlockStart: string;
		marginBottom: string;
		marginInline: string;
		marginInlineEnd: string;
		marginInlineStart: string;
		marginLeft: string;
		marginRight: string;
		marginTop: string;
		marker: string;
		markerEnd: string;
		markerMid: string;
		markerStart: string;
		mask: string;
		maskClip: string;
		maskComposite: string;
		maskImage: string;
		maskMode: string;
		maskOrigin: string;
		maskPosition: string;
		maskRepeat: string;
		maskSize: string;
		maskType: string;
		mathStyle: string;
		maxBlockSize: string;
		maxHeight: string;
		maxInlineSize: string;
		maxWidth: string;
		minBlockSize: string;
		minHeight: string;
		minInlineSize: string;
		minWidth: string;
		mixBlendMode: string;
		objectFit: string;
		objectPosition: string;
		offset: string;
		offsetDistance: string;
		offsetPath: string;
		offsetRotate: string;
		opacity: string;
		order: string;
		orphans: string;
		outline: string;
		outlineColor: string;
		outlineOffset: string;
		outlineStyle: string;
		outlineWidth: string;
		overflow: string;
		overflowAnchor: string;
		overflowClipMargin: string;
		overflowWrap: string;
		overflowX: string;
		overflowY: string;
		overscrollBehavior: string;
		overscrollBehaviorBlock: string;
		overscrollBehaviorInline: string;
		overscrollBehaviorX: string;
		overscrollBehaviorY: string;
		padding: string;
		paddingBlock: string;
		paddingBlockEnd: string;
		paddingBlockStart: string;
		paddingBottom: string;
		paddingInline: string;
		paddingInlineEnd: string;
		paddingInlineStart: string;
		paddingLeft: string;
		paddingRight: string;
		paddingTop: string;
		pageBreakAfter: string;
		pageBreakBefore: string;
		pageBreakInside: string;
		paintOrder: string;
		perspective: string;
		perspectiveOrigin: string;
		placeContent: string;
		placeItems: string;
		placeSelf: string;
		pointerEvents: string;
		position: string;
		printColorAdjust: string;
		quotes: string;
		resize: string;
		right: string;
		rotate: string;
		rowGap: string;
		rubyPosition: string;
		scale: string;
		scrollBehavior: string;
		scrollMargin: string;
		scrollMarginBlock: string;
		scrollMarginBlockEnd: string;
		scrollMarginBlockStart: string;
		scrollMarginBottom: string;
		scrollMarginInline: string;
		scrollMarginInlineEnd: string;
		scrollMarginInlineStart: string;
		scrollMarginLeft: string;
		scrollMarginRight: string;
		scrollMarginTop: string;
		scrollPadding: string;
		scrollPaddingBlock: string;
		scrollPaddingBlockEnd: string;
		scrollPaddingBlockStart: string;
		scrollPaddingBottom: string;
		scrollPaddingInline: string;
		scrollPaddingInlineEnd: string;
		scrollPaddingInlineStart: string;
		scrollPaddingLeft: string;
		scrollPaddingRight: string;
		scrollPaddingTop: string;
		scrollSnapAlign: string;
		scrollSnapStop: string;
		scrollSnapType: string;
		scrollbarGutter: string;
		shapeImageThreshold: string;
		shapeMargin: string;
		shapeOutside: string;
		shapeRendering: string;
		stopColor: string;
		stopOpacity: string;
		stroke: string;
		strokeDasharray: string;
		strokeDashoffset: string;
		strokeLinecap: string;
		strokeLinejoin: string;
		strokeMiterlimit: string;
		strokeOpacity: string;
		strokeWidth: string;
		tabSize: string;
		tableLayout: string;
		textAlign: string;
		textAlignLast: string;
		textAnchor: string;
		textCombineUpright: string;
		textDecoration: string;
		textDecorationColor: string;
		textDecorationLine: string;
		textDecorationSkipInk: string;
		textDecorationStyle: string;
		textDecorationThickness: string;
		textEmphasis: string;
		textEmphasisColor: string;
		textEmphasisPosition: string;
		textEmphasisStyle: string;
		textIndent: string;
		textOrientation: string;
		textOverflow: string;
		textRendering: string;
		textShadow: string;
		textTransform: string;
		textUnderlineOffset: string;
		textUnderlinePosition: string;
		top: string;
		touchAction: string;
		transform: string;
		transformBox: string;
		transformOrigin: string;
		transformStyle: string;
		transition: string;
		transitionDelay: string;
		transitionDuration: string;
		transitionProperty: string;
		transitionTimingFunction: string;
		translate: string;
		unicodeBidi: string;
		userSelect: string;
		verticalAlign: string;
		visibility: string;
		/** @deprecated This is a legacy alias of `alignContent`. */
		webkitAlignContent: string;
		/** @deprecated This is a legacy alias of `alignItems`. */
		webkitAlignItems: string;
		/** @deprecated This is a legacy alias of `alignSelf`. */
		webkitAlignSelf: string;
		/** @deprecated This is a legacy alias of `animation`. */
		webkitAnimation: string;
		/** @deprecated This is a legacy alias of `animationDelay`. */
		webkitAnimationDelay: string;
		/** @deprecated This is a legacy alias of `animationDirection`. */
		webkitAnimationDirection: string;
		/** @deprecated This is a legacy alias of `animationDuration`. */
		webkitAnimationDuration: string;
		/** @deprecated This is a legacy alias of `animationFillMode`. */
		webkitAnimationFillMode: string;
		/** @deprecated This is a legacy alias of `animationIterationCount`. */
		webkitAnimationIterationCount: string;
		/** @deprecated This is a legacy alias of `animationName`. */
		webkitAnimationName: string;
		/** @deprecated This is a legacy alias of `animationPlayState`. */
		webkitAnimationPlayState: string;
		/** @deprecated This is a legacy alias of `animationTimingFunction`. */
		webkitAnimationTimingFunction: string;
		/** @deprecated This is a legacy alias of `appearance`. */
		webkitAppearance: string;
		/** @deprecated This is a legacy alias of `backfaceVisibility`. */
		webkitBackfaceVisibility: string;
		/** @deprecated This is a legacy alias of `backgroundClip`. */
		webkitBackgroundClip: string;
		/** @deprecated This is a legacy alias of `backgroundOrigin`. */
		webkitBackgroundOrigin: string;
		/** @deprecated This is a legacy alias of `backgroundSize`. */
		webkitBackgroundSize: string;
		/** @deprecated This is a legacy alias of `borderBottomLeftRadius`. */
		webkitBorderBottomLeftRadius: string;
		/** @deprecated This is a legacy alias of `borderBottomRightRadius`. */
		webkitBorderBottomRightRadius: string;
		/** @deprecated This is a legacy alias of `borderRadius`. */
		webkitBorderRadius: string;
		/** @deprecated This is a legacy alias of `borderTopLeftRadius`. */
		webkitBorderTopLeftRadius: string;
		/** @deprecated This is a legacy alias of `borderTopRightRadius`. */
		webkitBorderTopRightRadius: string;
		/** @deprecated This is a legacy alias of `boxAlign`. */
		webkitBoxAlign: string;
		/** @deprecated This is a legacy alias of `boxFlex`. */
		webkitBoxFlex: string;
		/** @deprecated This is a legacy alias of `boxOrdinalGroup`. */
		webkitBoxOrdinalGroup: string;
		/** @deprecated This is a legacy alias of `boxOrient`. */
		webkitBoxOrient: string;
		/** @deprecated This is a legacy alias of `boxPack`. */
		webkitBoxPack: string;
		/** @deprecated This is a legacy alias of `boxShadow`. */
		webkitBoxShadow: string;
		/** @deprecated This is a legacy alias of `boxSizing`. */
		webkitBoxSizing: string;
		/** @deprecated This is a legacy alias of `filter`. */
		webkitFilter: string;
		/** @deprecated This is a legacy alias of `flex`. */
		webkitFlex: string;
		/** @deprecated This is a legacy alias of `flexBasis`. */
		webkitFlexBasis: string;
		/** @deprecated This is a legacy alias of `flexDirection`. */
		webkitFlexDirection: string;
		/** @deprecated This is a legacy alias of `flexFlow`. */
		webkitFlexFlow: string;
		/** @deprecated This is a legacy alias of `flexGrow`. */
		webkitFlexGrow: string;
		/** @deprecated This is a legacy alias of `flexShrink`. */
		webkitFlexShrink: string;
		/** @deprecated This is a legacy alias of `flexWrap`. */
		webkitFlexWrap: string;
		/** @deprecated This is a legacy alias of `justifyContent`. */
		webkitJustifyContent: string;
		webkitLineClamp: string;
		/** @deprecated This is a legacy alias of `mask`. */
		webkitMask: string;
		/** @deprecated This is a legacy alias of `maskBorder`. */
		webkitMaskBoxImage: string;
		/** @deprecated This is a legacy alias of `maskBorderOutset`. */
		webkitMaskBoxImageOutset: string;
		/** @deprecated This is a legacy alias of `maskBorderRepeat`. */
		webkitMaskBoxImageRepeat: string;
		/** @deprecated This is a legacy alias of `maskBorderSlice`. */
		webkitMaskBoxImageSlice: string;
		/** @deprecated This is a legacy alias of `maskBorderSource`. */
		webkitMaskBoxImageSource: string;
		/** @deprecated This is a legacy alias of `maskBorderWidth`. */
		webkitMaskBoxImageWidth: string;
		/** @deprecated This is a legacy alias of `maskClip`. */
		webkitMaskClip: string;
		webkitMaskComposite: string;
		/** @deprecated This is a legacy alias of `maskImage`. */
		webkitMaskImage: string;
		/** @deprecated This is a legacy alias of `maskOrigin`. */
		webkitMaskOrigin: string;
		/** @deprecated This is a legacy alias of `maskPosition`. */
		webkitMaskPosition: string;
		/** @deprecated This is a legacy alias of `maskRepeat`. */
		webkitMaskRepeat: string;
		/** @deprecated This is a legacy alias of `maskSize`. */
		webkitMaskSize: string;
		/** @deprecated This is a legacy alias of `order`. */
		webkitOrder: string;
		/** @deprecated This is a legacy alias of `perspective`. */
		webkitPerspective: string;
		/** @deprecated This is a legacy alias of `perspectiveOrigin`. */
		webkitPerspectiveOrigin: string;
		webkitTextFillColor: string;
		/** @deprecated This is a legacy alias of `textSizeAdjust`. */
		webkitTextSizeAdjust: string;
		webkitTextStroke: string;
		webkitTextStrokeColor: string;
		webkitTextStrokeWidth: string;
		/** @deprecated This is a legacy alias of `transform`. */
		webkitTransform: string;
		/** @deprecated This is a legacy alias of `transformOrigin`. */
		webkitTransformOrigin: string;
		/** @deprecated This is a legacy alias of `transformStyle`. */
		webkitTransformStyle: string;
		/** @deprecated This is a legacy alias of `transition`. */
		webkitTransition: string;
		/** @deprecated This is a legacy alias of `transitionDelay`. */
		webkitTransitionDelay: string;
		/** @deprecated This is a legacy alias of `transitionDuration`. */
		webkitTransitionDuration: string;
		/** @deprecated This is a legacy alias of `transitionProperty`. */
		webkitTransitionProperty: string;
		/** @deprecated This is a legacy alias of `transitionTimingFunction`. */
		webkitTransitionTimingFunction: string;
		/** @deprecated This is a legacy alias of `userSelect`. */
		webkitUserSelect: string;
		whiteSpace: string;
		widows: string;
		width: string;
		willChange: string;
		wordBreak: string;
		wordSpacing: string;
		/** @deprecated */
		wordWrap: string;
		writingMode: string;
		zIndex: string;
	};

	export type Children<K extends keyof HTMLElementTagNameMap> = (
		| KazdaNode<K>
		| (() => KazdaNode<K>)
		| string
	)[];

	export type Props<K extends keyof HTMLElementTagNameMap> =
		HTMLAttributes[K] &
			HTMLEvents & {
				children: Children<K>;
			};

	export type KazdaNode<K extends keyof HTMLElementTagNameMap> = {
		$$typeof: symbol;
		type: keyof HTMLElementTagNameMap;
		props: Props<K>;
	};

	export type Kazda = {
		createElement: <K extends keyof HTMLElementTagNameMap>(
			type: K,
			props?: Omit<Props<K>, 'children'>,
			...children: (KazdaNode<K> | (() => KazdaNode<K>) | string)[]
		) => KazdaNode<K>;
		createRoot: (domRoot: HTMLDivElement) => {
			render<K extends keyof HTMLElementTagNameMap>(
				children: () => (KazdaNode<K> | (() => KazdaNode<K>))[]
			): void;
			render<K extends keyof HTMLElementTagNameMap>(
				children:
					| KazdaNode<K>
					| (KazdaNode<K> | (() => KazdaNode<K>))[]
			): void;
		};
	};

	const kazda: Kazda;

	export default kazda;
}
