module.exports = {
  testEnvironment: "jsdom",
  "transform": {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest"
  },
   moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.cjs',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.cjs',
  }
};
    