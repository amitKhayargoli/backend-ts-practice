import { error } from "console";
import { CreateUserDTO } from "../dtos/user.dto";
import {
  IUserRepository,
  UserRepository,
} from "../repositories/user.repository";
import { User } from "../types/user.type";

let userRepository: IUserRepository = new UserRepository();

export class UserService {
  createUser(user: CreateUserDTO) {
    //business logice

    const existingUser = userRepository.getUserByID(user.id);

    if (existingUser) {
      throw new Error("User Already Exists");
    }

    const newUser: User = {
      id: user.id,
      username: user.username,
      email: user.email,
      name: user.name,
      age: user.age,
    };

    let created: User = userRepository.createUser(newUser);

    return created;
  }

  getUsers(): User[] {
    //transform logic //Map funtion lagauna milxa yaha
    let response: User[] = userRepository.getAllUsers();

    return response;
  }

  getUserByID(id: string): User | undefined {
    return userRepository.getUserByID(id);
  }

  updateUserByID(id: string, updatedData: Partial<User>): User | undefined {
    return userRepository.updateUserByID(id, updatedData);
  }

  deleteUserByID(id: string): User | undefined {
    return userRepository.deleteUserByID(id);
  }
}
