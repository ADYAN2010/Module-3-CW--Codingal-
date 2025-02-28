document.addEventListener("DOMContentLoaded", function() {
    const desktopGrid = document.getElementById("desktop-grid");
    desktopGrid.innerHTML = `
        <div class="container mt-4">
            <h2 class="text-primary">Desktop Grid</h2>
            <div class="row d-none d-lg-flex">
                <div class="col-lg-3 border p-3 bg-success text-white">Desktop 1</div>
                <div class="col-lg-3 border p-3 bg-info text-white">Desktop 2</div>
                <div class="col-lg-3 border p-3 bg-warning text-dark">Desktop 3</div>
                <div class="col-lg-3 border p-3 bg-danger text-white">Desktop 4</div>
            </div>
        </div>`;
});
