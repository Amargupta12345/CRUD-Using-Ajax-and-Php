// reterving a data from  insert

let tbody = document.getElementById("tbody");

function showData() {
  tbody.innerHTML = "";
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "reterive.php", true);
  xhr.responseType = "json";
  xhr.onload = () => {
    if (xhr.status === 200) {
      //   console.log(xhr.response);
      if (xhr.response) {
        x = xhr.response;
      } else {
        x = "";
      }
      for (i = 0; i < x.length; i++) {
        tbody.innerHTML +=
          "<tr> <td>" +
          x[i].id +
          "</td><td>" +
          x[i].name +
          "</td><td>" +
          x[i].email +
          "</td><td>" +
          x[i].password +
          "</td><td> <button class ='btn btn-dark  btn-sm btn-edit' data-sid =" +
          x[i].id +
          "> Edit </button> <button class ='btn btn-dark btn-sm btn-del' data-sid =" +
          x[i].id +
          "> Delete </button> </td> </tr>";
      }
    } else {
      console.log("Problem occured");
    }
    dataDelete();
    dataEdit();
  };
  xhr.send();
}
showData();

/////// ajax request insert data
document.getElementById("btnadd").addEventListener("click", addstudent);

function addstudent(e) {
  e.preventDefault();
  console.log("add button clicked");

  let stuid = document.getElementById("studid").value;
  let nm = document.getElementById("nameid").value;
  let em = document.getElementById("emailid").value;
  let pw = document.getElementById("passwordid").value;

  // console.log(nm);
  // console.log(em);
  // console.log(pw);

  //creating a xhr object

  const xhr = new XMLHttpRequest();

  // initiallize

  xhr.open("POST", "insert.php", true);

  // set header XMLHttpRequest

  xhr.setRequestHeader("Content-Type", "application/json");

  // handle response

  xhr.onload = () => {
    if (xhr.status == 200) {
      document.getElementById("msg").innerHTML =
        "<div class= 'alert alert-dark mt-3  role= 'alert'>" +
        xhr.responseText +
        "</div>";

      document.getElementById("myform").reset();
      showData();
    } else {
      console.log("problem occured");
    }
  };

  const mydata = {id:stuid, name: nm, email: em, password: pw };

  const data = JSON.stringify(mydata);
  ////// send req and data
  xhr.send(data);
}

////////////// deletion of element
function dataDelete() {
  let x = document.getElementsByClassName("btn-del");
  // console.log(x);
  // console.log(x.length);

  for (let i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function () {
      id = x[i].getAttribute("data-sid");
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "delete.php", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onload =() =>{
          if(xhr.status ===200){
           document.getElementById("msg").innerHTML =
             "<div class= 'alert alert-dark mt-3  role= 'alert'>" +
             xhr.responseText +
             "</div>";

        
           showData();
          }else{
              console.log("problem occured");
          }
      };
      //object of data
      const mydata = { sid : id};
      ////////converts a data int json
      const data = JSON.stringify(mydata);
      ////// send req and data
      xhr.send(data);
    });
  }
}
////////////// edit of element
function dataEdit() {
  let x = document.getElementsByClassName("btn-edit");
    let stid = document.getElementById("studid");
    let nm = document.getElementById("nameid");
    let em = document.getElementById("emailid");
    let pw = document.getElementById("passwordid");

  // console.log(x);
  // console.log(x.length);

  for (let i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function () {
      id = x[i].getAttribute("data-sid");
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "edit.php", true);
      xhr.responseType ="json";
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onload =() =>{
          if(xhr.status ===200){
          a= xhr.response;
          stid.value  = a.id;
          nm.value  = a.name;
          em.value  = a.email;
          pw.value  = a.password;
          }else{
              console.log("problem occured");
          }
      };
      //object of data
      const mydata = { sid : id};
      ////////converts a data int json
      const data = JSON.stringify(mydata);
      ////// send req and data
      xhr.send(data);
    });
  }
}
