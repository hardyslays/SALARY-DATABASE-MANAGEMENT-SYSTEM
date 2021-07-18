# SALARY-DATABASE-MANAGEMENT-SYSTEM
## INTRODUCTION
  In this project, I have done practical impementation of a web-based database management system using NodeJS, expressJS and MySQL. It is implmented in the form of a website which has 5 functionalities related to the management of employees and their annual salary details. The website contains of 5 major functionalities:
  1. ADDING A NEW EMPLOYEE: We can add a new employee with his/her personal details to the database.
  2. DISPLAYING EMPLOYEE LIST: We can see the list of employees currently present in the database.
  3. REMOVING AN EMPLOYEE: We can remove a particular employee and his/her salary details from the database.
  4. UPDATING THE SALARY DETAILS: We can update the salary details of a particular employee.
  5. DISPLAYING THE SALARY DETAILS: We can see the salary details of the employee updated into the database.

***
***

## STRUCTURE OF THE PROJECT:
  ### STRUCTURE OF DATABASE:
  The database (named Company) has 2 tables:
    1. Employee list: empId, empName, desg, age, Residency
    2. Salary Slip: empId, basic, da, hra, ta, Allowances, commision, perq, retire(for retirement benefites suc as GPF and PF), gross, net(for Net Income).
  
  ### STRUCTURE OF WEBSITE:
  The webstie sturcture is:
    * Landing Page (the main page where user is rediretced on running the server-side):
     1. ADD NEW EMPLOYEE page
     2. EMPLOYEE LIST page
     3. REMOVE EMPLOYEE page
     4. DISPLAY SALARY DETAILS page
     5. UPDATE SALARY DETAILS page
     6. EXIT page
  
  ***
  ***
  
  ## HOW TO RUN IT?
   To all the B.Tech. comrades there, who want to have a decent project for their submission, have it ;)
   
   ### STEPS FOR INSTALLATION:
   1. Clone the repo in your computer using "git clone".
   2. Create the database Company in your local MySQL server, by either running the "CreatingCompanyDatabase.sql" file in MySQL Workbench, or using the scripts in that file to manually create the database.
   3. Update the ".env" file with the details of USER and PASSWORD of your local MySQL server user (Ex. USER=root and PASSWORD=root).
   4. Open the folder of project in a terminal, and run these commands:
      * npm init -y {to initialize the project}
      * npm i {to install the required dependencies}
      * npm start {to fire up the server, this will also open the website on your default browser, no need to thank me} 
  
 ***

# HAPPY CODING!!!
