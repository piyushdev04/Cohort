const jwt = require("jsonwebtoken")
const z = require("zod")

const SECRET_KEY = "mySuperKey";

const userSchema = z.object({
    username: z.string().email(),
    password: z.string().min(6),
});


function generateJWT(username, password) {
    const validation = userSchema.safeParse({ username, password });

    if (!validation.success) {
        return null;
    }

    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    return token;
}

function decodeJWT(token) {
    try {
        const decoded = jwt.decode(token);
        return decoded ? true : false;
    } catch {
        return false;
    }
}

function verifyJWT(token) {
    try {
        jwt.verify(token, SECRET_KEY);
        return true;
    } catch {
        return false;
    }
}

module.exports = { generateJWT, decodeJWT, verifyJWT}