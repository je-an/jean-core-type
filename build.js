({
    baseUrl: '.',
    out: 'dist/jean-core-type.js',
    optimize: 'uglify2',
    name: "node_modules/jean-amd/dist/jean-amd",
    include: ["src/CoreType"],
    wrap: {
        start: 
        "(function (root, factory) { \n" +
        " \t if (typeof define === 'function' && define.amd) { \n" +
        "\t \t define([], factory); \n" +
        "\t} else if(typeof module === 'object' && module.exports) { \n" +
        "\t\t module.exports = factory(); \n " +
        "\t} else { \n" +
        "\t \troot.CoreType = root.CoreType || {}; \n" +
        "\t \troot.CoreType = factory();\n" +
        "\t}\n" +
        "}(this, function() {",
        end:
        "\n \t return require('src/CoreType'); \n" +
        "}));"
    },
    paths: {
        NotImplementedError: "src/error/NotImplementedError",
        StorageNotDefinedError: "src/error/StorageNotDefinedError",
        Control: "src/control/Control",
        jquery: "node_modules/jquery/dist/jquery",
        TypeCheck: "node_modules/jean-type-check/dist/jean-type-check"
    }
})