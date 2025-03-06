const { generateJWT, decodeJWT, verifyJWT } = require("./index");

test("Should return null for invalid username/password", () => {
    expect(generateJWT("invalidEmail", "short")).toBeNull();
    expect(generateJWT("valid@email.com", "123")).toBeNull();
});

test("Should generate a valid JWT token", () => {
    const token = generateJWT("user@example.com", "securePass123");
    expect(token).not.toBeNull();
});

test("Should decode JWT successfully", () => {
    const token = generateJWT("user@example.com", "securePass123");
    expect(decodeJWT(token)).toBe(true);
    expect(decodeJWT("invalidToken")).toBe(false);
});

test("should verify a valid JWT", () => {
    const token = generateJWT("user@example.com", "securePass123");
    expect(verifyJWT(token)).toBe(true);
    expect(verifyJWT("invalidToken")).toBe(false);
});