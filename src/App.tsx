import { useState } from "react";
import InitView from "./components/initScreen";
import ScreenSaver from "./components/screenSaver";

function App() {
	const [isHidden, setIsHidden] = useState(false);

	return (
		<div className="app">
			{isHidden ? (
				<ScreenSaver
					onShow={() => {
						setIsHidden(false);
					}}
				/>
			) : (
				<InitView onHide={() => setIsHidden(true)} />
			)}
		</div>
	);
}

export default App;
