define([
    "NotImplementedError",
    "StorageNotDefinedError"
],
    function (
        NotImplementedError,
        StorageNotDefinedError
    ) {
        describe('CoreType.spec.js', function () {
            describe("NotImplementedError", function () {
                var ie = {};
                beforeEach(function () {
                    ie = new NotImplementedError();
                });
                describe("Constructor", function () {
                    it("TODO: Check if all members are available | EXPECTATION: EventDispatcher has all necessary members", function () {
                        var numberOfMembers = 2;
                        expect(Object.keys(ie).length).toEqual(numberOfMembers);
                    });
                    it("TODO: Check if all methods are available | EXPECTATION: EventDispatcher has all necessary methods", function () {
                        var numberOfMethods = 0;
                        var methodCount = Object.keys(Object.getPrototypeOf(ie)).length;
                        expect(methodCount).toEqual(numberOfMethods);
                    });
                });
            });
            describe("StorageNotDefinedError", function () {
                var ie = {};
                beforeEach(function () {
                    ie = new NotImplementedError();
                });
                describe("Constructor", function () {
                    it("TODO: Check if all members are available | EXPECTATION: EventDispatcher has all necessary members", function () {
                        var numberOfMembers = 2;
                        expect(Object.keys(ie).length).toEqual(numberOfMembers);
                    });
                    it("TODO: Check if all methods are available | EXPECTATION: EventDispatcher has all necessary methods", function () {
                        var numberOfMethods = 0;
                        var methodCount = Object.keys(Object.getPrototypeOf(ie)).length;
                        expect(methodCount).toEqual(numberOfMethods);
                    });
                });
            });
        });
    });
