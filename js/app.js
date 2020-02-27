let arrayA = [];
let arrayB = [];
let arrayC = [];

function startArray() {
    addItemA();
    addItemB();
    alert("Chuỗi A đã nhập là: " + arrayA.join(", "));
    alert("Chuỗi B đã nhập là: " + arrayB.join(", "));
    addArray();
    alert("Mảng C từ mảng A ghép với mảng B là: " + arrayC.join(", "));
}


function addItemA() {
    arrayA = [];
    let i = 1;
    let item;
    do {
        item = prompt("Nhập dữ liệu cho mảng A " + " Vị trí thứ: " + i + " Nhập quit để lưu dữ liệu");
        if (item !== "quit") {
            arrayA.push(item);
            i++;
        }
    } while (item !== "quit");
}

function addItemB() {
    arrayB = [];
    let i = 1;
    let item;
    do {
        item = prompt("Nhập dữ liệu cho mảng B " + " Vị trí thứ: " + i + " Nhập quit để lưu dữ liệu");
        if (item !== "quit") {
            arrayB.push(item);
            i++;
        }
    } while (item !== "quit");
}

function addArray() {
    for (let i = 0; i < arrayA.length; i++) {
        arrayC.push(arrayA[i]);
    }
    for (let j = 0; j < arrayB.length; j++) {
        arrayC.push(arrayB[j]);
    }
}