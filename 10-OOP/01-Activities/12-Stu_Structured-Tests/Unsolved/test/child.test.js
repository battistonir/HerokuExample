const Child = require("../child");

describe("Child", () => {
  describe("name", () => {
    it("If `name` is not a string or `name` is an empty string, an error is thrown.", () => {
      // Arrange
      const name = "Billy";
      // Act
      const testChild = new Child(name, 5);
      // Assert
      expect(testChild.name).toEqual(name);
    });
  });
  describe("age", () => {
    // Arrange
    const age = 9;
    // Act
    const child = new Child("Billy", age);
    // Assert
    expect(child.age).toEqual(age);
  });
});
