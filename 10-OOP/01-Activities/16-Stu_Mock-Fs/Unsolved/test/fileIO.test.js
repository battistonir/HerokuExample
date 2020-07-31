const FileIO = require("../fileIO");
const fs = require("fs");

jest.mock("fs");

describe("FileIO", () => {
  describe("read", () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // Your code here
      // Arrange
      const fileIO = new FileIO();
      const fileName = "message.txt";
      let data;

      // Act
      fs.readFileSync.mockReturnValue("Hello World!");
      data = fileIO.read(fileName);

      // Assert
      expect(fs.readFileSync).lastCalledWith(fileName, "utf8");
    });
  });

  describe("write", () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // Your code here
      // Arrange
      const fileIO = new FileIO();
      const path = "message.txt";
      const data = "Hello World!";
      // Act
      fileIO.write(path, data);

      // Assert
      expect(fs.writeFileSync).lastCalledWith(path, data);
    });
  });
});

describe("append", () => {
  it("should call fs.appendFileSync with the passed in 'file' and 'data' argument", () => {
    // Arrange
    const fileIO = new FileIO();
    const file = "message.txt";
    const data = "Goodbye World!";
    // Act
    fileIO.append(file, data);
    // Assert
    expect(fs.appendFileSync).lastCalledWith(file, data);
  });
});
