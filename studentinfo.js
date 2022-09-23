let student = [
  {
    rollno: "1",
    name: "Chirag Chauhan",
    city: "rajkot",
    standard: "12th",
    percentage: "80%",
    school: "S.G.Dholakiya",
  },
  {
    rollno: "2",
    name: "Akshay Chauhan",
    city: "Jamnagar",
    standard: "12th",
    percentage: "70%",
    school: "S.G.Dholakiya",
  },
  {
    rollno: "3",
    name: "Jay Soni",
    city: "Morbi",
    standard: "12th",
    percentage: "60%",
    school: "S.G.Dholakiya",
  },
  {
    rollno: "4",
    name: "Dipak Ranpara",
    city: "Ahemdabad",
    standard: "12th",
    percentage: "82%",
    school: "S.G.Dholakiya",
  },
  {
    rollno: "5",
    name: "Punit Bhalodiya",
    city: "rajkot",
    standard: "12th",
    percentage: "60%",
    school: "S.G.Dholakiya",
  },
  {
    rollno: "6",
    name: "Rahul Parmar",
    city: "Surat",
    standard: "12th",
    percentage: "60%",
    school: "S.G.Dholakiya",
  },
  {
    rollno: "7",
    name: "Prince Tanna",
    city: "rajkot",
    standard: "12th",
    percentage: "58%",
    school: "S.G.Dholakiya",
  },
  {
    rollno: "8",
    name: "Raj Chavda",
    city: "rajkot",
    standard: "12th",
    percentage: "76%",
    school: "S.G.Dholakiya",
  },
];

let tableHeader = [
  "Rollno",
  "Name",
  "City",
  "Standard",
  "Percentage",
  "School",
  "Remove",
  "Edit",
];
var clicked = false;
var recordi;
var btnSave = document.getElementById("btnsave");
btnSave.hidden = true;
var btnSubmit = document.getElementById("btnsubmit");
var labelIndex = document.getElementById("lblIndx");
var inputIndex = document.getElementById("indexvalue");

function getInsertedData(stud) {
  document.studentform.reset();
  if (student.length == 0) {
    //  btnSave.hidden = true;
    labelIndex.hidden = false;
    inputIndex.hidden = false;
    clicked = false;
  }
  console.log("=======keys===" + Object.keys(stud[0]));

  var table = document.createElement("TABLE");
  table.setAttribute("id", "studTable");
  table.border = "1";

  var tableBody = document.createElement("TBODY");
  table.appendChild(tableBody);

  var columnCount = tableHeader.length;
  console.log("column count==" + columnCount);

  //Adding header
  var tr = table.insertRow(-1);
  for (var i = 0; i < columnCount; i++) {
    var headerCell = document.createElement("TH");
    headerCell.innerHTML = tableHeader[i];

    tr.appendChild(headerCell);
  }
  //Add row
  for (var i = 0; i < stud.length; i++) {
    //row = table.insertRow(-1);
    tr = document.createElement("TR");
    tableBody.appendChild(tr);

    for (var j = 0; j < columnCount; j++) {
      //var cell = row.insertCell(-1);
      //console.log("checkkkkkkk-------------j====" + j);
      if (j < columnCount - 2) {
        //  console.log("-------firstp000000----" + j);
        var td = document.createElement("TD");
        td.innerHTML = Object.values(stud[i])[j];
      }

      if (j == columnCount - 2) {
        var td = document.createElement("TD");
        var btnRemove = document.createElement("input");

        btnRemove.setAttribute("type", "button");
        btnRemove.setAttribute("value", "Remove");
        btnRemove.style.marginBottom = "10px";
        // add btnRemove's 'onclick' event.
        btnRemove.setAttribute(`onclick`, `removeRow(${i})`);

        td.appendChild(btnRemove);
      }
      if (j == columnCount - 1) {
        var td = document.createElement("TD");
        var btnEdit = document.createElement("input");

        btnEdit.setAttribute("type", "button");
        btnEdit.setAttribute("value", "Edit");
        btnEdit.style.marginBottom = "10px";
        // add btnEdit's 'onclick' event.
        btnEdit.setAttribute(`onclick`, `editRow(${i})`);

        td.appendChild(btnEdit);
      }
      // if (j == 0) {
      //   td.innerHTML = i;
      // }
      tr.appendChild(td);
    }
  }
  var dvTable = document.getElementById("dvTable");
  dvTable.innerHTML = "";
  dvTable.appendChild(table);
}

function GenerateTable() {
  var messagesRef = firebase.database().ref();
  messagesRef.push(student);
  console.log("check length====student object" + student.length);
  if (student.length == 0) {
    //  btnSave.hidden = true;
    labelIndex.hidden = false;
    inputIndex.hidden = false;
    clicked = false;
  }
  document.studentform.reset();
  // console.log("=======keys===" + Object.keys(student[0]));

  var table = document.createElement("TABLE");
  table.setAttribute("id", "studTable");
  table.border = "1";

  var tableBody = document.createElement("TBODY");
  table.appendChild(tableBody);
  //var columnCount = Object.keys(student[0]).length;
  var columnCount = tableHeader.length;
  console.log("column count==" + columnCount);

  //Adding header
  var tr = table.insertRow(-1);
  for (var i = 0; i < columnCount; i++) {
    var headerCell = document.createElement("TH");
    headerCell.innerHTML = tableHeader[i];

    tr.appendChild(headerCell);
  }

  for (var i = 0; i < student.length; i++) {
    //row = table.insertRow(-1);
    tr = document.createElement("TR");
    tableBody.appendChild(tr);

    for (var j = 0; j < columnCount; j++) {
      //var cell = row.insertCell(-1);
      //console.log("checkkkkkkk-------------j====" + j);
      if (j < columnCount - 2) {
        // console.log("-------firstp000000----" + j);
        var td = document.createElement("TD");
        td.innerHTML = Object.values(student[i])[j];
        function SortName(x, y) {
          return x.name.localeCompare(y.name);
        }

        student.sort(SortName);
      }
      if (j == columnCount - 2) {
        var td = document.createElement("TD");
        var btnRemove = document.createElement("input");

        btnRemove.setAttribute("type", "button");
        btnRemove.setAttribute("value", "Remove");
        btnRemove.style.marginBottom = "10px";
        // add btnRemove's 'onclick' event.
        btnRemove.setAttribute(`onclick`, `removeRow(${i})`);

        td.appendChild(btnRemove);
      }
      if (j == columnCount - 1) {
        var td = document.createElement("TD");
        var btnEdit = document.createElement("input");

        btnEdit.setAttribute("type", "button");
        btnEdit.setAttribute("value", "Edit");
        btnEdit.style.marginBottom = "10px";
        // add btnEdit's 'onclick' event.
        btnEdit.setAttribute(`onclick`, `editRow(${i})`);

        td.appendChild(btnEdit);
      }
      // if (j == 0) {
      //   td.innerHTML = i;
      // }
      tr.appendChild(td);
    }
  }
  var dvTable = document.getElementById("dvTable");
  dvTable.innerHTML = "";
  dvTable.appendChild(table);
}
// function removeRow(oButton) {
//   var empTab = document.createElement("studTable");
//   empTab.deleteRow(oButton.parentNode.rowIndex); // button -> td -> tr.
// }
function editRow(i) {
  //document.getElementById("output").value = "100";
  // btnSave.hidden = false;
  clicked = true;
  recordi = i;
  labelIndex.hidden = true;
  inputIndex.hidden = true;
  // btnSubmit.hidden = true;
  console.log("enter editrow=====");
  rollno.value = Object.values(student[i])[0];
  studName.value = Object.values(student[i])[1];
  city.value = Object.values(student[i])[2];
  standard.value = Object.values(student[i])[3];
  percentage.value = Object.values(student[i])[4];
  school.value = Object.values(student[i])[5];
  btnSave.setAttribute(`onclick`, `save(${i})`);
  //rollno.value = Object.values(student[i])[i];
}

function removeRow(i) {
  let arr1 = [];

  var indxno = i;
  labelIndex.hidden = false;
  inputIndex.hidden = false;
  clicked = false;
  //delete i;
  // student.splice(i, 1);
  console.log("remove row selected===" + i);
  for (var i = 0; i < student.length; i++) {
    if (i != indxno) {
      arr1.push(student[i]);
    }
  }
  student = arr1;
  GenerateTable();
}

function save(i) {
  // var rollno = document.getElementById("rollno").value;
  console.log("geetinggg------------" + student[i]["rollno"]);
  student[i]["rollno"] = rollno.value;
  student[i]["name"] = studName.value;
  student[i]["city"] = city.value;
  student[i]["standard"] = standard.value;
  student[i]["percentage"] = percentage.value;
  student[i]["school"] = school.value;
  //GenerateTable();
  clicked = false;
  labelIndex.hidden = false;
  inputIndex.hidden = false;
  GenerateTable();
  //btnSave.hidden = true;
  //btnSubmit.hidden = false;
}

function submitData() {
  if (clicked == true) {
    save(recordi);
    console.log("enter second time");
  } else {
    var rollno = document.getElementById("rollno").value;
    var studName = document.getElementById("studName").value;
    var city = document.getElementById("city").value;
    var standard = document.getElementById("standard").value;
    var percentage = document.getElementById("percentage").value;
    var school = document.getElementById("school").value;
    let indexof = document.getElementById("indexvalue").value;
    let totalIndex = indexof - 1;

    console.log("vllluuueee is ssrooolll===" + rollno);
    if (
      rollno == "" ||
      studName == "" ||
      city == "" ||
      standard == "" ||
      percentage == "" ||
      school == "" ||
      indexof == ""
    ) {
      alert("please fill all value");
    } else if (isNaN(rollno) || isNaN(indexof)) {
      alert("pelease enter no in where to insert and rollno.");
    } else if (student.length == 0 && totalIndex > 0) {
      alert("value start from 0 to insert data");
    } else {
      const createObj = {
        rollno,
        studName,
        city,
        standard,
        percentage,
        school,
      };

      let getarr1 = [];
      let getarr2 = [];

      // if (totalIndex <= 0) {
      //   getarr1.unshift(createObj);
      // }

      console.log("please check the totalindex value---------" + totalIndex);
      for (var i = 0; i < student.length; i++) {
        if (i < totalIndex) {
          console.log("i-----" + i);
          getarr1.push(student[i]);
          //getarr1.push(createObj);
        } else {
          getarr2.push(student[i]);
        }
      }

      if (totalIndex > student.length) {
        getarr2.push(createObj);
      } else {
        getarr1.push(createObj);
      }

      // student = getarr1.concat(getarr2);
      student = getarr1.concat(getarr2);

      getInsertedData(student);
      //GenerateTable(stud);
      // student.push(createObj);
    }
  }
}
