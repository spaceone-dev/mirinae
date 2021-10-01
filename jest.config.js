module.exports = {
    cacheDirectory: '.jest-cache',
    coverageDirectory: '.jest-coverage',
    coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
    coverageReporters: ['html', 'text'],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    },
    testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
    snapshotSerializers: [
        '@emotion/jest/serializer' /* if needed other snapshotSerializers should go here */
    ],
    testEnvironment: 'jsdom',
};
