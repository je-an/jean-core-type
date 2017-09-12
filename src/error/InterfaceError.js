define([], function () {
    var InterfaceError = function (message) {
        this.name = "Interface Error";
        this.message = (message || "Method must be implemented in Class");
    };
    InterfaceError.prototype = Error.prototype;
    return InterfaceError; 
}); 