const dot = require("../index");
const env = dot.config({
    examplePath: __dirname,
});

console.log(env);

test("string env", () => {
    expect(env.TEST_STR).toBe("HELLO WORLD");
});

test("true env", () => {
    expect(JSON.parse(env.TEST_TRUE)).toBe(true);
});

test("false env", () => {
    expect(JSON.parse(env.TEST_FALSE)).toBe(false);
});

test("number env", () => {
    expect(JSON.parse(env.TEST_NUMBER)).toBe(123);
});

test("float env", () => {
    expect(JSON.parse(env.TEST_FLOAT)).toBe(1234.34);
});