define(["InterfaceError"], function (InterfaceError) {
    describe('CoreType.spec.js', function () {
        describe("InterfaceError", function () {
            var ie = {}, numberOfMembers = 2 /*, numberOfMethods = 0 */;
            beforeEach(function () {
                ie = new InterfaceError();
            });
            describe("InterfaceError Constructor", function () {
                it("TODO: Check if members and methods are available | EXPECTATION: List has all necessary methods", function () {
                    // Member
                    expect(ie.name).not.toBeUndefined();
                    expect(ie.message).not.toBeUndefined();

                    // Prüft, ob alle Member vorhanden sind
                    var memberCount = Object.keys(ie).length;
                    expect(memberCount).toEqual(numberOfMembers);

                    // Methoden


                    // Prüft ob die 
                    /*  var methodCount = Object.keys(Object.getPrototypeOf(ie)).length;
                     expect(methodCount).toEqual(numberOfMethods); */
                });
            });
        });
    });
});
