const DayCare = require("../dayCare");
const Child = require("../child");

describe("DayCare", () => {
  describe("Initialization", () => {
    it("should create an object with 'children' array, 'capacity' number, and 'ageLimit' number", () => {
      const dayCare = new DayCare();

      expect(dayCare).toEqual({ children: [], capacity: 3, ageLimit: 6 });
    });
  });

  describe("addChild", () => {
    it("should add a child to the 'children' array", () => {
      const child = new Child("Tammy", 1);
      const dayCare = new DayCare();

      dayCare.addChild(child);

      expect(dayCare.children.length).toEqual(1);
      expect(dayCare.children[0]).toBe(child);
    });

    it("should not add a child over the 'ageLimit'", () => {
      // Arrange
      const child = new Child("Tammy", 8);
      const dayCare = new DayCare();
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      // Act
      dayCare.addChild(child);

      // Assert
      expect(mock).toBeCalledWith(
        "Unable to add child, they are over the age limit"
      );
      expect(dayCare.children.length).toEqual(0);
      mock.mockRestore();
    });

    it("should not add a child if already at capacity", () => {
      // Arrange
      const dayCare = new DayCare();
      const child = new Child("Alice", 4);
      dayCare.children = [
        new Child("Tammy", 1),
        new Child("Mark", 2),
        new Child("Alvin", 1),
      ];

      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});
      // Act
      dayCare.addChild(child);
      expect(mock).toBeCalledWith("At capacity, unable to add more children");
      // Assert
      expect(dayCare.children.length).toEqual(3);
      mock.mockRestore();
    });

    it("should throw an error if not provided a Child object as an argument", () => {
      // Arrange
      const err = new Error(
        "Expected parameter 'child' to be an instance of Child"
      );
      const cb = () => {
        const dayCare = new DayCare();
        dayCare.addChild();
      };
      const mock = jest.spyOn(console, "log");

      mock.mockImplementation(() => {});
      // Assert
      expect(mock).toBeCalledWith(
        "Expected parameter 'child' to be an instance of Child"
      );
      expect(cb).toThrowError(err);
      mock.mockRestore();
    });
  });

  describe("pickupChild", () => {
    it("should remove the first child found with a given name from 'children' and return it", () => {
      const dayCare = new DayCare();
      const child1 = new Child("Tammy", 1);
      const child2 = new Child("Mark", 2);
      const child3 = new Child("Alvin", 1);
      dayCare.children = [child1, child2, child3];

      const removed = dayCare.pickupChild(child2.name);

      expect(removed).toBe(child2);
      expect(dayCare.children.length).toEqual(2);
      expect(
        dayCare.children.some((child) => child.name === child2.name)
      ).toEqual(false);
    });

    it("should return undefined and remove no children if child is not in 'children'", () => {
      const dayCare = new DayCare();
      const child1 = new Child("Tammy", 1);
      const child2 = new Child("Mark", 2);
      const child3 = new Child("Alvin", 1);
      dayCare.children = [child1, child2, child3];

      const removed = dayCare.pickupChild("Fred");

      expect(typeof removed).toEqual("undefined");
      expect(dayCare.children).toEqual([child1, child2, child3]);
    });
  });
});
