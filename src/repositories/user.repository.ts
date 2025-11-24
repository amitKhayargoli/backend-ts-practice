import { User } from "../types/user.type";

let users: User[] = [
  {
    id: "user1",
    username: "john_doe",
    email: "john@example.com",
    name: "John Doe",
    age: 30,
  },
  {
    id: "user2",
    username: "jane_smith",
    email: "jane@example.com",
    name: "Jane Smith",
    age: 25,
  },
];

export interface IUserRepository {
  createUser(user: User): User;
  getAllUsers(): User[];
  getUserByID(id: string): User | undefined;
  updateUserByID(id: string, updatedData: Partial<User>): User | undefined;
  deleteUserByID(id: string): User | undefined;
}

export class UserRepository implements IUserRepository {
  createUser(user: User): User {
    users.push(user);
    return user;
  }

  updateUserByID(id: string, updatedData: Partial<User>): User | undefined {
    const userIndex = users.findIndex((u) => u.id === id);

    if (userIndex === -1) {
      return undefined;
    }
    users[userIndex] = { ...users[userIndex], ...updatedData };
    return users[userIndex];
  }

  deleteUserByID(id: string): User | undefined {
    const userIndex = users.findIndex((u) => u.id === id);
    const deletedUser = users[userIndex];
    users.splice(userIndex, 1);
    return deletedUser;
  }

  getAllUsers(): User[] {
    return users;
  }
  getUserByID(id: string): User | undefined {
    return users.find((user) => user.id === id);
  }
}
