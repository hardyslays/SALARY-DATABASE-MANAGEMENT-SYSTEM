const addEmpHTML = () => {
  // fetch('http://localhost:5000/add-emp')
  // .then(response => response.json())
  // .then(data => loadHTMLintoDOM(data));

  open("http://localhost:5000/src/add_employee/html.html", "_self");
};

const removeEmpHTML = () => {
  // fetch('http://localhost:5000/add-emp')
  // .then(response => response.json())
  // .then(data => loadHTMLintoDOM(data));

  open("http://localhost:5000/src/remove_emp/html.html", "_self");
};

const empList = () => {
  // fetch('http://localhost:5000/add-emp')
  // .then(response => response.json())
  // .then(data => loadHTMLintoDOM(data));

  open("http://localhost:5000/src/emp_list/html.html", "_self");
};

const checkSS = () => {
  // fetch('http://localhost:5000/add-emp')
  // .then(response => response.json())
  // .then(data => loadHTMLintoDOM(data));

  open("http://localhost:5000/src/check_ss/html.html", "_self");
};

const updateSS = () => {
  // fetch('http://localhost:5000/add-emp')
  // .then(response => response.json())
  // .then(data => loadHTMLintoDOM(data));

  open("http://localhost:5000/src/update_ss/html.html", "_self");
};

const exitIt = () => {
  window.location.replace(
    "http://localhost:5000/landing_page/exit.html",
    "_self"
  );
};
