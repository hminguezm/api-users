module.exports = {
  verbose: true,
  testEnvironment: 'node',
  transform: { '^.+\\.ts?$': 'ts-jest' },
  globals: { NODE_ENV: 'test' },
  moduleNameMapper: {
    '^@repositories/(.*)$': '<rootDir>/src/repositories/$1',
    '^@clients/(.*)$': '<rootDir>/src/clients/$1',
    '^@transformers/(.*)$': '<rootDir>/src/transformers/$1',
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@tests/(.*)$': '<rootDir>/__tests__/$1',
  },
  collectCoverage: true,
  coverageReporters: ['json', 'text'],
  coverageDirectory: 'coverage/'
};
