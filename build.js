({
    baseUrl: '.',
    out: 'dist/CoreType.js',
    optimize: 'none',
    include: ["node_modules/almond/almond", "src/CoreType"],
    wrap: {
        start: 
        "(function (root, factory) { \n" +
        " \t if (typeof define === 'function' && define.amd) { \n" +
        "\t \t define([], factory); \n" +
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
        NotImplementedError: "src/error/NotImplementedError"
    }
})