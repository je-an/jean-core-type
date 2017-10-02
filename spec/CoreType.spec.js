define([
    "CoreType"
],
    function (
        CoreType
    ) {
        describe('CoreType.spec.js', function () {
            describe("NotImplementedError", function () {
                var ie = {};
                beforeEach(function () {
                    ie = new CoreType.NotImplementedError();
                });
                describe("Constructor", function () {
                    it("Has all necessary members", function () {
                        var numberOfMembers = 2;
                        expect(Object.keys(ie).length).toEqual(numberOfMembers);
                    });
                    it("Has all necessary methods", function () {
                        var numberOfMethods = 0;
                        var methodCount = Object.keys(Object.getPrototypeOf(ie)).length;
                        expect(methodCount).toEqual(numberOfMethods);
                    });
                });
            });
            describe("StorageNotDefinedError", function () {
                var ie = {};
                beforeEach(function () {
                    ie = new CoreType.StorageNotDefinedError();
                });
                describe("Constructor", function () {
                    it("Has all necessary member", function () {
                        var numberOfMembers = 2;
                        expect(Object.keys(ie).length).toEqual(numberOfMembers);
                    });
                    it("Has all necessary methods", function () {
                        var numberOfMethods = 0;
                        var methodCount = Object.keys(Object.getPrototypeOf(ie)).length;
                        expect(methodCount).toEqual(numberOfMethods);
                    });
                });
            });
        });
    });
