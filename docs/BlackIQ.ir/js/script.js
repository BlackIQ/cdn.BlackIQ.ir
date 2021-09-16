function toggle() {
    const btn = document.getElementById("mode");
    if (btn.value === "dark") {
        document.getElementById("all").classList.remove('dark');
        document.getElementById("all").classList.add('light');
        btn.value = "light";
        btn.innerHTML = '<i class="fa fa-moon"></i>';
    }
    else {
        document.getElementById("all").classList.remove('light');
        document.getElementById("all").classList.add('dark');
        btn.value = "dark";
        btn.innerHTML = '<i class="fa fa-sun"></i>';
    }
}