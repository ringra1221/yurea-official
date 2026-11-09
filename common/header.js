console.log("header.js loaded");

document.addEventListener("DOMContentLoaded", async () => {

    const headerContainer = document.getElementById("site-header");

    if (!headerContainer) {
        return;
    }

    try {
        const response = await fetch("https://raw.githubusercontent.com/ringra1221/yurea-official/refs/heads/main/common/header.html");
        
        console.log(headerHTML);
        
        if (!response.ok) {
            throw new Error(
                `Header loading failed: ${response.status}`
            );
        }

        const headerHTML = await response.text();

        headerContainer.innerHTML = headerHTML;

        console.log(headerContainer);

    } catch (error) {
        console.error("ヘッダー読み込みエラー:", error);
    }

});
