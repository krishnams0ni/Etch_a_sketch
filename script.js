const rowsValue = document.querySelector("#rows");
const columnsValue = document.querySelector("#columns");

rowsValue.addEventListener("change", (e) => {
    const rows = e.target.value;
    rowsValue.value = rows;
    createGrid(rows, columnsValue.value);
    updateButtons();
});

columnsValue.addEventListener("change", (e) => {
    const columns = e.target.value;
    columnsValue.value = columns;
    createGrid(rowsValue.value, columns);
    updateButtons();
});

createGrid(rowsValue.value, columnsValue.value);

updateButtons();

function createGrid(rows, columns) {
    const container = document.querySelector(".container");
    container.textContent = "";
    for (let i = 0; i < rows; i++) {
        const row = document.createElement("div");
        for (let j = 0; j < columns; j++) {
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }
        container.appendChild(row);
    }
    createButtons();
}
// Grid created. Now buttons.

function updateButtons() {
    createButtons();
    const container = document.querySelectorAll(".container .column");
    const mode = document.querySelector("#checkbox");
    container.forEach((element) => {
        element.addEventListener("mouseover", (e) => {
            if (mode.checked === true) {
                element.style.backgroundColor = colorFunc();
            } else {
                element.style.backgroundColor = "white";
            }
        });
    });
}

function createButtons() {
    const mode = document.querySelector("#checkbox");
    const container = document.querySelectorAll(".container .column");
    mode.addEventListener("click", () => {
        if (mode.checked) {
            container.forEach((element) => {
                element.addEventListener("mouseover", (e) => {
                    element.style.backgroundColor = colorFunc();
                });
            });
        } else {
            container.forEach((element) => {
                element.addEventListener("mouseover", (e) => {
                    element.style.backgroundColor = "white";
                });
            });
        }
    });

    const clear = document.querySelector("#clear");
    clear.addEventListener("click", () => {
        container.forEach((element) => {
            element.style.backgroundColor = "black";
        });
    });

    const eraser = document.querySelector("#eraser");
    eraser.addEventListener("click", () => {
        container.forEach((element) => {
            element.addEventListener("mouseover", (e) => {
                element.style.backgroundColor = "black";
            });
        });
    });
}

function colorFunc() {
    let randomNumber = Math.floor(Math.random() * 10);
    switch (randomNumber) {
        case 0:
            return "blue";
        case 1:
            return "red";
        case 2:
            return "green";
        case 3:
            return "yellow";
        case 4:
            return "orange";
        case 5:
            return "purple";
        case 6:
            return "pink";
        case 7:
            return "brown";
        case 8:
            return "gray";
        case 9:
            return "maroon";
    }
}
