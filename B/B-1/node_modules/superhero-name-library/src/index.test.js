const expect = require("chai").expect;
const superHero = require("./index");

describe("superhero-names-library", () => {
  describe("allNames", () => {
    it("should be an array of strings", function() {
      expect(superHero.allNames()).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === "string";
        });
      }
    });

    it("should contain `Iron Man`", function() {
      expect(superHero.allNames()).to.include("Iron Man");
    });
  });

  describe('random', function(){
      it('should return a random item from the superhero list', function(){
        let randomItem = superHero.random();
        expect(superHero.allNames()).to.include(randomItem)
      });
  })
});
