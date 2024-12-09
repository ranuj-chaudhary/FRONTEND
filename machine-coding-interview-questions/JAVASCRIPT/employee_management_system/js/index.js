(async function () {
  const res = await fetch("./data/employee.json");
  const data = await res.json();

  const employees = data;

  let selectedEmployeeId = employees[0].id;
  let selectedEmployee = employees[0] || {};

  const employeeList = document.querySelector(".employee__list");
  const employeeInfo = document.querySelector(".employee__profile");

  renderEmployees(employees);
  renderSingleEmployeeDetails(selectedEmployee);

  // Add Employee - START
  // 1) selector to add employee
  const addEmployeeModal = document.querySelector(".addEmployee");
  const createEmployee = document.querySelector(
    ".employee-header__create-employee"
  );
  const addEmployeeForm = document.querySelector(".addEmployee__create");

  // 2) modal form to add employee
  // open modal
  createEmployee.addEventListener("click", (e) => {
    addEmployeeModal.style.display = "flex";
  });

  // close modal
  addEmployeeModal.addEventListener("click", (e) => {
    if (e.target.className === "addEmployee") {
      addEmployeeModal.style.display = "none";
    }
  });

  // 3) set max age limit to date field in input element

  // set age of employee to enter below 18 years
  const dobInput = document.querySelector(".addEmployee__create--dob");

  const { currYear, currMonth, currDate } = getCurrDateByMonthDateYear();

  // age should be greater than 18
  dobInput.max = `${currYear - 18}-${
    currMonth < 10 ? "0" + currMonth : currMonth
  }-${currDate < 10 ? "0" + currDate : currDate}`;

  // 4) get employee data from employee form
  addEmployeeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // recieve formdata
    const formData = new FormData(addEmployeeForm);
    let values = [...formData.entries()];

    // create new employee
    const employee = {};
    values.forEach((emp) => {
      employee[emp[0]] = emp[1];
    });

    employee.id = employees[employees.length - 1].id + 1;
    employee.age =
      new Date().getFullYear() - parseInt(employee.dob.slice(0, 4));
    employee.imageUrl =
      employee.imageUrl || "https://cdn-icons-png.flaticon.com/512/0/93.png";

    // insert new employee to employees
    employees.push(employee);

    // render updated employees

    renderEmployees(employees);

    addEmployeeModal.style.display = "none";
  });

  // Select employee logic using event deligation
  employeeList.addEventListener("click", (e) => {
    if (e.target.className === "employee__delete-btn") {
      const id = e.target.parentNode.id;
      const index = employees.findIndex((emp) => emp.id === parseInt(id));
      employees.splice(index, 1);

      selectedEmployeeId = employees[0]?.id || -1;

      renderEmployees(employees);
    }

    if (
      e.target.closest(".employee__item") &&
      e.target.className !== "employee__delete-btn"
    ) {
      const id = e.target.closest(".employee__item").id;
      selectedEmployeeId = id;
      renderEmployees(employees);
    }

    if (selectedEmployeeId) renderSingleEmployeeDetails(selectedEmployee);
  });

  function renderEmployees(employees) {
    // edge case a) emplty previous data inside employee list
    employeeList.innerHTML = "";
    employees.forEach((emp) => {
      // create list element
      const employee = document.createElement("li");
      employee.classList.add("employee__item");

      // add class for initial selected list item;
      if (String(selectedEmployeeId) === String(emp.id)) {
        employee.classList.add("employee__item--selected");
        selectedEmployee = emp;
      }

      employee.setAttribute("id", emp.id);

      employee.innerHTML = `<span>${emp.firstname} ${emp.lastname}</span>
              <span class="employee__delete-btn">❌</span>`;

      employeeList.append(employee);
    });
  }

  function renderSingleEmployeeDetails(selectedEmployee) {
    if (selectedEmployeeId === -1) {
      employeeInfo.innerHTML = "";
      return;
    }

    employeeInfo.innerHTML = `<img
              class="employee__image"
              src="${selectedEmployee.imageUrl}"
              alt=""
            />
            <p class="employee__name"><span>Name: </span>${selectedEmployee.firstname} ${selectedEmployee.lastname}</p>
            <p class="employee__mobile-number">
              <span>Mob No:</span>${selectedEmployee.contactNumber}
            </p>
            <p class="employee__email">
              <span>Email: </span>${selectedEmployee.email}
            </p>
            <p class="employee__age"><span>Age:</span>${selectedEmployee.age}</p>`;
  }

  function getCurrDateByMonthDateYear() {
    const date = new Date();
    const currYear = date.getFullYear();
    const currMonth = date.getMonth();
    const currDate = date.getDate();
    return {
      currDate,
      currMonth,
      currYear,
    };
  }
})();
