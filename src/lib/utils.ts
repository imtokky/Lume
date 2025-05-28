import { getCurrentWindow } from "@tauri-apps/api/window";

const appWindow = getCurrentWindow();

/* 関数まとめ */
async function handleMaximize() {
	try {
		await appWindow.toggleMaximize();
	} catch (error) {
		console.error("Failed to maximize window:", error);
	}
}

async function closeWindow() {
	try {
		appWindow.close();
	} catch (error) {
		console.error("Failed to close window:", error);
	}
}

export { handleMaximize, closeWindow };
