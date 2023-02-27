const User = require('../entities/user.entity');
const schema = require ('./schema')
class UserRepository {
  constructor(mongoose) {
    this.mongoose = mongoose;
    this.UserModel = this.mongoose.model('User',schema );
  }

  async create(createUserDTO) {
    const user = new this.UserModel({  
        id: createUserDTO.id,
        imageUrl: createUserDTO.imageUrl,
        firstName: createUserDTO.firstName,
        lastName: createUserDTO.lastName,
        email: createUserDTO.email,
        contactNumber: createUserDTO.contactNumber,
        age: createUserDTO.age,
        dob: createUserDTO.dob,
        salary: createUserDTO.salary,
        address: createUserDTO.address
    });
    await user.save();
    return new User(
        user._id,
        user.id,
        user.imageUrl,
        user.firstName,
        user.lastName,
        user.email,
        user.contactNumber,
        user.age,
        user.dob,
        user.salary,
        user.address
    );
  }

  async findById(id) {
    const user = await this.UserModel.findById(id);
    if (!user) {
      return null;
    }
    return new User(
        user._id,
        user.id,
        user.imageUrl,
        user.firstName,
        user.lastName,
        user.email,
        user.contactNumber,
        user.age,
        user.dob,
        user.salary,
        user.address
    );
  }

  async findAll() {
    const users = await this.UserModel.find({});
    return users.map(user => new User(
      user._id.toString(),
      user.id,
      user.imageUrl,
      user.firstName,
      user.lastName,
      user.email,
      user.contactNumber,
      user.age,
      user.dob,
      user.salary,
      user.address
    ));
  }

  async update(id, updateUserDTO) {
    const user = await this.UserModel.findByIdAndUpdate(
      id,
      {
        firstName: updateUserDTO.firstName,
        lastName: updateUserDTO.lastName,
        email: updateUserDTO.email,
        contactNumber: updateUserDTO.contactNumber,
        age: updateUserDTO.age,
        dob: updateUserDTO.dob,
        salary: updateUserDTO.salary,
        address: updateUserDTO.address,
      },
      { new: true }
    );
    if (!user) {
      return null;
    }
    return new User(
        user._id.toString(),
        user.id,
        user.imageUrl,
        user.firstName,
        user.lastName,
        user.email,
        user.contactNumber,
        user.age,
        user.dob,
        user.salary,
        user.address
    );
  }

  async delete(id) {
    const result = await this.UserModel.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return false;
    }
    return true;
  }
}

module.exports = UserRepository;

