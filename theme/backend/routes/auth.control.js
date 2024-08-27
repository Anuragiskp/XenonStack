import bcrypt from "bcryptjs";
import User from "../Schema/userModel.js";
import generateTokenAndSetCookie from "./utils/generateToken.js";

export const signup = async (req, res) => {
	try {
		const { email, username, password, confirmPassword} = req.body;

		if (password !== confirmPassword) {
			return res.status(400).json({ error: "Passwords don't match" });
		}

		const user = await User.findOne({ email });

		if (user) {
			return res.status(400).json({ error: "Username already exists" });
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			email,
			username,
			passwordHash: hashedPassword,
		});

		if (newUser) {
			await newUser.save();
            generateTokenAndSetCookie(newUser._id, res);

			res.status(201).json({
				_id: newUser._id,
				email: newUser.email,
				username: newUser.username,
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
	} catch (error) {
		console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		const isPasswordCorrect = await bcrypt.compare(password, user?.passwordHash || "");

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

		generateTokenAndSetCookie(user._id, res);

		res.status(200).json({
			_id: user._id,
			email: user.email,
			username: user.username,
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const logout = (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const fetchUserByEmail = async (req, res) => {
	try {
	  const { email } = req.params;
	  const user = await User.findOne({ email });
  
	  if (!user) {
		return res.status(404).json({ error: "User not found" });
	  }

	  console.log(user);
  
	  res.status(200).json(user);
	} catch (error) {
	  console.log("Error in fetchUserByEmail controller", error.message);
	  res.status(500).json({ error: "Internal Server Error" });
	}
  };
