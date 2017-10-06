define([
    'NotImplementedError',
    'StorageNotDefinedError',
    'Control'
], function (NotImplementedError, StorageNotDefinedError, Control) {
    return {
        NotImplementedError: NotImplementedError,
        StorageNotDefinedError: StorageNotDefinedError,
        Control: Control
    };
});