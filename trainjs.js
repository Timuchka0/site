document.addEventListener("DOMContentLoaded", () => {
    let selectedLevel = null;

    document.querySelectorAll(".level-btn").forEach(button => {
        button.addEventListener("click", function () {
            document.querySelectorAll(".level-btn").forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            selectedLevel = this.getAttribute("data-level");
        });
    });

    document.getElementById("start-btn").addEventListener("click", function () {
        if (selectedLevel) {
            alert(`Вы выбрали уровень: ${selectedLevel.toUpperCase()}`);
            // Здесь можно добавить переход на страницу тренировки
        } else {
            alert("Выберите уровень!");
        }
    });
});
