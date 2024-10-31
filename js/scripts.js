document.querySelector(".m_menu").addEventListener("click", function() {
    const menu = document.querySelector(".buttons-list");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";  
    } else {
        menu.style.display = "none";   
    }
});