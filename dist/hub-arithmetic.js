/*
 * HubArithmetic v1.0.0
 * (c) 2022 Mohamed
 * Released under the MIT License.
 */
class HubArithmetic {
   constructor() {
      this.version = "1.0.0";
   }

   propertiesOf(operation) {
      switch (operation.toLowerCase()) {
         case "addition":
            return [
               "commutative",
               "associative",
               "distributive",
               "additive identity",
            ];
         case "subtraction":
            return ["identity", "distributive"];
         case "multiplication":
            return [
               "commutative",
               "associative",
               "distributive",
               "multiplicative identity",
            ];
         default:
            return "N/A";
      }
   }

   improperToMixed(improper) {
      improper = improper.split("/");
      let dividend = +improper[0],
         divisor = +improper[1],
         reminder = 0;
      for (let i = 1; +improper[0] >= i; i += 1) {
         if (dividend % divisor === 0) break;
         reminder += 1;
         dividend -= 1;
      }
      return `${dividend / divisor ? `${dividend / divisor} ` : ""}${
         reminder ? `${reminder}/${divisor}` : ""
      }`;
   }

   mixedToImproper(mixed) {
      mixed = mixed.replace(" ", "/").split("/");
      return `${+mixed[0] * +mixed[2] + +mixed[1]}/${+mixed[2]}`;
   }

   wholeNumToPercent(got, total) {
      return (got * 100) / total;
   }

   percentToWholeNum(gotInPercent, total) {
      return (gotInPercent * total) / 100;
   }

   isEvenNum(num) {
      return !Boolean(num % 2);
   }

   isOddNum(num) {
      return Boolean(num % 2);
   }

   factorsOf(num) {
      let factors = [];
      for (let i = 1; num >= i; i += 1) {
         if (!(num % i)) factors.push(i);
         if (Math.ceil(num / 2) === i) break;
      }
      return [...factors, num];
   }
}
