import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "El usuario ya existe" });
    }

    const user = await User.create({ name, email, password });

    res.status(201).json({ id: user._id, email: user.email });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
