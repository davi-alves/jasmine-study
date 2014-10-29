/*global define, describe, it, expect, beforeEach*/
define(['numbers'], function (numbers) {
  'use strict';

  describe('The numbers module', function () {
    describe('The add method', function () {
      // assert
      var output;
      beforeEach(function () {
        this.numberInput1 = 1;
        this.numberInput2 = 2;
        this.stringInput1 = '2';
        this.stringInput2 = 'lero';
      });

      it(
        'should accept one or more numerial arguments and return the sum of them',
        function () {
          // act
          output = numbers.sum(this.numberInput1, this.numberInput2);

          // assert
          expect(output).toEqual(3);
        });

      it('should should try to parse strings', function () {
        // act
        output = numbers.sum(this.numberInput1, this.stringInput1);

        // assert
        expect(output).toEqual(3);
      });

      it('should ignore not parsable values', function () {
        // act
        output = numbers.sum(this.numberInput1, this.stringInput2);

        // assert
        expect(output).toEqual(1);
      });
    });
  });
});
