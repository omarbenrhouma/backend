class UpdateUserDTO {
    constructor(firstName, lastName, email, contactNumber,age,dob,salary,address) {   
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.contactNumber = contactNumber;
        this.age = age;
        this.dob = dob;
        this.salary = salary;
        this.address = address;
    }
  }
  
  module.exports = UpdateUserDTO;
  