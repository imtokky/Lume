import { handleMaximize, closeWindow } from "../lib/utils";
import "./initScreen.css";

import BackgroundImage from "../assets/temp.jpg";

interface MainViewProps {
	onHide: () => void;
}

function MainView({ onHide }: MainViewProps) {
	return (
		<main className="container">
			<div data-tauri-drag-region className="titlebar">
				<div
					className="titlebar-button"
					id="titlebar-close"
					onClick={closeWindow}
				>
					<img
						src="https://api.iconify.design/mdi:close.svg"
						alt="close"
					/>
				</div>
			</div>

			<div className="background-props">
				<img src={BackgroundImage} className="background-image" />
			</div>

			<div className="container2">
				<button
					type="button"
					className="open-btn"
					onClick={() => {
						onHide();
						handleMaximize();
					}}
				>
					Open
				</button>
			</div>
		</main>
	);
}

export default MainView;
