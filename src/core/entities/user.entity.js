class User {
  constructor(_id,id,imageUrl,firstName, lastName, email, contactNumber,age,dob,salary,address) {
      this._id = _id;
      this.id = id;
      this.imageUrl = imageUrl;
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
  
  module.exports = User;
  