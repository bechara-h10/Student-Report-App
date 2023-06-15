let studentInfo = {};
const allButtons = document.querySelectorAll(".add-row-button");
const saveButton = document.querySelector(".save-button");
changeName();
loadTables();
document.getElementById("student-name").addEventListener("click", changeName);
function addRow(tableElem) {
  const report = prompt("أدخل الملاجظة");
  const newRow = document.createElement("tr");
  const newData = document.createElement("td");
  const iconData = document.createElement("td");
  iconData.innerHTML = `<i class="fa-solid fa-eraser"></i>`;
  iconData.addEventListener("click", () => {
    const tableName = tableElem.dataset.name;
    studentInfo[tableName] = studentInfo[tableName].filter(
      (value) => value !== newData.innerText
    );
    newRow.remove();
  });
  newData.innerText = report;
  newRow.append(newData, iconData);
  tableElem.append(newRow);
  studentInfo[tableElem.dataset.name].push(newData.innerText);
}

function Export() {
  const elementToPrint = document.createElement("div");
  elementToPrint.append(
    document.getElementById("student-name").cloneNode(true)
  );
  elementToPrint.append(
    document.getElementById("interview-table").cloneNode(true)
  );
  elementToPrint.append(document.getElementById("ps1-table").cloneNode(true));
  elementToPrint.append(document.getElementById("ps2-table").cloneNode(true));
  elementToPrint.append(document.getElementById("ps3-table").cloneNode(true));
  elementToPrint.style =
    "display:flex;justify-content:center;align-items:center;flex-direction:column";
  html2pdf().from(elementToPrint).save();
  localStorage.setItem(studentInfo.name, JSON.stringify(studentInfo));
}

function changeName() {
  const studentName = prompt("أدخل اسم التلميذ");
  document.getElementById("student-name").innerText += `${studentName}`;
  getStudentInfo(studentName);
}

function getStudentInfo(studentName) {
  studentInfo = JSON.parse(localStorage.getItem(studentName)) || {
    name: studentName,
    interviewTable: [],
    ps1Table: [],
    ps2Table: [],
    ps3Table: [],
  };
}

function loadTables() {
  studentInfo.interviewTable.forEach((report) => {
    const newRow = document.createElement("tr");
    const newData = document.createElement("td");
    const iconData = document.createElement("td");
    iconData.innerHTML = `<i class="fa-solid fa-eraser"></i>`;
    iconData.addEventListener("click", () => {
      studentInfo["interviewTable"] = studentInfo["interviewTable"].filter(
        (value) => value !== newData.innerText
      );
      newRow.remove();
    });
    newData.innerText = report;
    newRow.append(newData, iconData);
    document.getElementById("interview-table").append(newRow);
  });
  studentInfo.ps1Table.forEach((report) => {
    const newRow = document.createElement("tr");
    const newData = document.createElement("td");
    const iconData = document.createElement("td");
    iconData.innerHTML = `<i class="fa-solid fa-eraser"></i>`;
    iconData.addEventListener("click", () => {
      studentInfo["ps1Table"] = studentInfo["ps1Table"].filter(
        (value) => value !== newData.innerText
      );
      newRow.remove();
    });
    newData.innerText = report;
    newRow.append(newData, iconData);
    document.getElementById("ps1-table").append(newRow);
  });
  studentInfo.ps2Table.forEach((report) => {
    const newRow = document.createElement("tr");
    const newData = document.createElement("td");
    const iconData = document.createElement("td");
    iconData.innerHTML = `<i class="fa-solid fa-eraser"></i>`;
    iconData.addEventListener("click", () => {
      studentInfo["ps2Table"] = studentInfo["ps2Table"].filter(
        (value) => value !== newData.innerText
      );
      newRow.remove();
    });
    newData.innerText = report;
    newRow.append(newData, iconData);
    document.getElementById("ps2-table").append(newRow);
  });
  studentInfo.ps3Table.forEach((report) => {
    const newRow = document.createElement("tr");
    const newData = document.createElement("td");
    const iconData = document.createElement("td");
    iconData.innerHTML = `<i class="fa-solid fa-eraser"></i>`;
    iconData.addEventListener("click", () => {
      studentInfo["ps3Table"] = studentInfo["ps3Table"].filter(
        (value) => value !== newData.innerText
      );
      newRow.remove();
    });
    newData.innerText = report;
    newRow.append(newData, iconData);
    document.getElementById("ps3-table").append(newRow);
  });
}

allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    addRow(document.getElementById(button.dataset.table));
  });
});

saveButton.addEventListener("click", Export);
