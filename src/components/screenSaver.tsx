interface HiddenViewProps {
	onShow: () => void;
}

function HiddenView({ onShow }: HiddenViewProps) {
	return (
		<div>
			<p>要素が非表示になりました</p>
			<button onClick={onShow}>戻る</button>
		</div>
	);
}

export default HiddenView;
