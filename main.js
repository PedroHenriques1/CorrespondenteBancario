// MODO ESCURO//

const themeBtn = document.querySelector(".nav_theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")
    if (document.body.classList.contains("dark-theme")) {
        themeBtn.innerHTML = "<i class='uil uil-sun'></i> " 
        // para salvar o tema local escolhido //
        localStorage.setItem("currentTheme", "dark-theme")
    } else {
        themeBtn.innerHTML = "<i class='uil uil-moon'></i>"
        // tbm para salvar o tema local escolhido //
        localStorage.setItem("currentTheme", "")

    }
})

    document.body.className = localStorage.getItem('currentTheme')
 
    document.body.className = localStorage.getItem("currentTheme")
    if (document.body.classList.contains("dark-theme")) {
        themeBtn.innerHTML = "<i class='uil uil-sun'></i> " 
        // para salvar o tema local escolhido //
        localStorage.setItem("currentTheme", "dark-theme")
    } else {
        themeBtn.innerHTML = "<i class='uil uil-moon'></i>"
        // tbm para salvar o tema local escolhido //
        localStorage.setItem('currentTheme', '')

    }   

    






// show/hide sidebar menu //
const sidebar = document.querySelector(".sidebar")
const closeSidebarBtn = document.querySelector(".sidebar_close-btn")
const openSidebarBtn = document.querySelector(".nav_menu-btn")


openSidebarBtn.addEventListener("click", () => {
    sidebar.style.display = "flex";

})

closeSidebarBtn.addEventListener("click", () => {
    sidebar.style.display = "none";

})








 const chart = document.querySelector('#chart').getContext('2d');

new Chart(chart, {
    type: "line",
    data: {  
        labels: ["Jan","Fev","Mar","Abr","Mai","Jun","Julo","Agos",
            "Set","Out","Novembro"],
            datasets: [
             {
                label: 'Bitcoin',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 
                    61004],
                borderColor: "red",
                borderWidth: 2
             },
             {
                label: "Etherium",
                data: [31500, 41000, 88800, 26000, 46000, 32698, 50000, 30000, 18656, 24832,
                    36844],
                borderColor: "blue",
                borderWidth: 2
             }
        ]     
    },
    options: {
        responsive: true
    }
})
//