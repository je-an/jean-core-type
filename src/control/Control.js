define(["jquery", "TypeCheck"], function ($, TypeCheck) {
    /**
     * Abstract class for all controls within jean environment
     * @alias Navbar 
     * @constructor
     * @abstract
     * @throws {TypeError} - If options.containerId must be provided
     * @param {Object} options - options object
     * @param {Object} containerId
     */
    var Control = function (options, defaultOptions) {
        if (!TypeCheck.isDefined(defaultOptions.containerId)) {
            throw new Error("options.containerId must be provided!");
        };
        this._options = $.extend(true, defaultOptions, options);
        this._insertContainerTag();
    };

    Control.prototype._insertContainerTag = function () {
        $(document.body).append("<section id='#" + this._options.containerId + "'></section>");
    };

    return Control;
});