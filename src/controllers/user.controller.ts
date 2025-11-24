import { Request, Response } from "express";
import { CreateUserDTO } from "../dtos/user.dto";
import { User } from "../types/user.type";
import { UserService } from "../services/user.service";

let userService = new UserService();

export class UserController {
  createUser(req: Request, res: Response) {
    const parsedUser = CreateUserDTO.safeParse(req.body);

    if (!parsedUser.success) {
      return res
        .status(400)
        .json({ error: "Invalid user data", details: parsedUser.error });
    }

    const { id, username, email, name, age } = parsedUser.data;

    const newUser: User = userService.createUser({
      id,
      username,
      email,
      name,
      age,
    });

    return res.status(201).json(newUser);
  }

  getAllUsers(req: Request, res: Response) {
    const users: User[] = userService.getUsers();
    return res.status(200).json(users);
  }

  getUser(req: Request, res: Response) {
    const userId: string = req.params.userID;
    const requestedUser: User | undefined = userService.getUserByID(userId);

    if (!requestedUser) {
      console.log("User not found");
    }
  }
}
