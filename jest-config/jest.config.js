// jest.config.js
module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/config/setupTests.js'],
    moduleFileExtensions: ['js'],
    testMatch: ['<rootDir>/**/*.test.js'],
  };
  