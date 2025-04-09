using { soa.db } from '../db/data-model';

service MyService@(path:'FunctionExampleService') {

    // Function Definition

    function helloWorld(name: String(20)) returns String(100);
    @readonly
    entity EmployeeService as projection on db.master.employees;
   
  
}


// Function --> Can we create data using Function or not?
// Association --> Need explanation for association.

// Joule --> 
// 1st Priority API --> Consume standard API to the BAS.