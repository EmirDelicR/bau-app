// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// const HASH_SALT = 12;
// const EXPIRES_IN = "1h";

// const hash = async element => {
//   return await bcrypt.hash(element, HASH_SALT);
// };

// const validateHash = async (element, toCompereWith) => {
//   return await bcrypt.compare(element, toCompereWith);
// };

// const createJWT = data => {
//   return jwt.sign(data, process.env.MY_HASH_SECRET, { expiresIn: EXPIRES_IN });
// };

// const verifyJWT = token => {
//   return jwt.verify(token, process.env.MY_HASH_SECRET);
// };

// exports.hash = hash;
// exports.validateHash = validateHash;
// exports.createJWT = createJWT;
// exports.verifyJWT = verifyJWT;

export const testFunction = (name: string) => {
  return `My name is ${name}`;
};
