const rowsValue = document.querySelector("#rows");
const columnsValue = document.querySelector("#columns");

rowsValue.addEventListener("change", (e) => {
    const rows = e.target.value;
    rowsValue.value = rows;
    createGrid(rows, columnsValue.value);
});

columnsValue.addEventListener("change", (e) => {
    const columns = e.target.value;
    columnsValue.value = columns;
    createGrid(rowsValue.value, columns);
});

createGrid(rowsValue.value, columnsValue.value);

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
    updateButtons();
}

// Grid created. Now buttons.

function updateButtons() {
    const clear = document.querySelector("#clear");
    clear.addEventListener("click", () => {
        container.forEach((element) => {
            element.style.backgroundColor = "white";
        });
    });

    const eraser = document.querySelector("#eraser");
    eraser.addEventListener("click", () => {
        container.forEach((element) => {
            element.addEventListener("mouseover", (e) => {
                element.style.backgroundColor = "white";
            });
        });
    });

    const container = document.querySelectorAll(".container .column");
    const color = document.querySelector("#color");

    color.addEventListener("click", () => {
        changeMode();
    });

    if (color.value === "Black") {
        container.forEach((element) => {
            element.addEventListener("mouseover", (e) => {
                element.style.backgroundColor = colorFunc();
            });
        });
    } else {
        container.forEach((element) => {
            element.addEventListener("mouseover", (e) => {
                element.style.backgroundColor = "black";
            });
        });
    }

    function changeMode() {
        if (color.value === "Color") {
            container.forEach((element) => {
                element.addEventListener("mouseover", (e) => {
                    element.style.backgroundColor = colorFunc();
                    color.value = "Black";
                });
            });
        } else {
            container.forEach((element) => {
                element.addEventListener("mouseover", (e) => {
                    element.style.backgroundColor = "black";
                    color.value = "Color";
                });
                color.value = "Black";
            });
        }
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
                return "black";
        }
    }
}
