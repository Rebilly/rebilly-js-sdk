
const { defaults: { moduleFileExtensions } } = require('jest-config')
 
module.exports = {
    transform: {
         '\\.js$': 'babel-jest',
    },
    moduleFileExtensions: [ ...moduleFileExtensions],
    moduleNameMapper: {
        // Add import path aliases
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@test/(.*)$': '<rootDir>/test/$1',
        '^@scripts/(.*)$': '<rootDir>/scripts/$1',
    },
    modulePathIgnorePatterns: ['<rootDir>/dist'],
    coverageReporters: ['lcov', 'text', 'text-summary'],
    collectCoverageFrom: ['src/**/**.js'],
    testMatch: [
        '**/test/unit/**/*.spec.(js|ts|tsx)',
    ],
};
