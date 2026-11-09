const headerUrl = new URL("header.html", document.currentScript.src);

document.addEventListener("DOMContentLoaded", async () => {
    const headerContainer = document.getElementById("site-header");

    if (!headerContainer) {
        return;
    }

    try {
        const response = await fetch(headerUrl);

        if (!response.ok) {
            throw new Error(
                `Header loading failed: ${response.status}`
            );
        }

        const headerHTML = await response.text();
        headerContainer.innerHTML = headerHTML;
    } catch (error) {
        console.error("ヘッダー読み込みエラー:", error);
    }
});
