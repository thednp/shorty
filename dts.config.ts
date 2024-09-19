const config = {
  entries: [
    {
      filePath: "./src/index.ts",
      outFile: `./dist/shorty.d.ts`,
      noCheck: false,
      output: {
        exportReferencedTypes: false,
        umdModuleName: 'SHORTY',
        noBanner: true,
      }
    },
  ],
};

module.exports = config;
