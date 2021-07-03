module.exports = {
  testEnvironment: "jsdom",
  moduleDirectories: ['<rootDir>/node_modules/', '<rootDir>'],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "\\.(css|less|sass|scss)$": "<rootDir>/tests/mock/styleMock.js"
  }
};

// "\\.(css|less|scss|sass)$": "<rootDir>/test/mock/styleMock.js"