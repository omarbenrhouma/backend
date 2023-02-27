class UserController {
    constructor(userService) {
      this.userService = userService;
    }

    async create(req, res, next) {
        try {
            const {id, imageUrl,firstName, lastName, email, contactNumber,age,dob,salary,address } = req.body;
            const createUserDTO = {
              id,
              imageUrl,
              firstName,
              lastName,
              email,
              contactNumber,
              age,
              dob,
              salary,
              address
            };
            const user = await this.userService.create(createUserDTO);
            res.status(201).json(user);
          } catch (err) {
            next(err);
          }
        }
      
        async findById(req, res, next) {
          try {
            const id = req.params.id;
            const user = await this.userService.findById(id);
            if (!user) {
              return res.sendStatus(404);
            }
            res.json(user);
          } catch (err) {
            next(err);
          }
        }
      
        async findAll(req, res, next) {
          try {
            const users = await this.userService.findAll();
            res.json(users);
          } catch (err) {
            next(err);
          }
        }
      
        async update(req, res, next) {
          try {
            const id = req.params.id;
            const { firstName, lastName, email, contactNumber,age,dob,salary,address } = req.body;
            const updateUserDTO = {
                firstName,
                lastName,
                email,
                contactNumber,
                age,
                dob,
                salary,
                address
            };
            const user = await this.userService.update(id, updateUserDTO);
            if (!user) {
              return res.sendStatus(404);
            }
            res.json(user);
          } catch (err) {
            next(err);
          }
        }
      
        async delete(req, res, next) {
          try {
            const id = req.params.id;
            const result = await this.userService.delete(id);
            if (!result) {
              return res.sendStatus(404);
            }
            res.sendStatus(204);
          } catch (err) {
            next(err);
          }
        }
      }
      
      module.exports = UserController;
        