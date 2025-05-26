import "./initScreen.css";

interface HiddenViewProps {
	onShow: () => void;
}

function HiddenView({ onShow }: HiddenViewProps) {
	return (
		<main>
			<button onClick={onShow}>Back</button>
		</main>
	);
}

export default HiddenView;
