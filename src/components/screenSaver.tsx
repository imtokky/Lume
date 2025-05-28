import { handleMaximize } from "../lib/utils";

import "./initScreen.css";
import BackgroundImage from "../assets/temp2.jpg";

interface HiddenViewProps {
	onShow: () => void;
}

function HiddenView({ onShow }: HiddenViewProps) {
	const handleback = () => {
		handleMaximize();
		onShow();
	};

	return (
		<main>
			<div className="background-props">
				<img src={BackgroundImage} className="background-image" />
			</div>

			<button onClick={handleback}>Back</button>
		</main>
	);
}

export default HiddenView;
