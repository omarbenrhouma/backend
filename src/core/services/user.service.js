const User = require('../entities/user.entity');
const CreateUserDTO = require('../dtos/create-user.dto');
const UpdateUserDTO = require('../dtos/update-user.dto');

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async create(createUserDTO) {
    const user = await this.userRepository.create(createUserDTO);
    return user;
  }

  async findById(id) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      return null;
    }
    return user;
  }

  async findAll() {
    const users = await this.userRepository.findAll();
    return users;
  }

  async update(id, updateUserDTO) {
    const user = await this.userRepository.update(id, updateUserDTO);
    if (!user) {
      return null;
    }
    return user;
  }

  async delete(id) {
    const result = await this.userRepository.delete(id);
    if (!result) {
      return false;
    }
    return true;
  }
}

module.exports = UserService;
