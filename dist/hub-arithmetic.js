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
         case "division":
            return "N/A";
      }
   }
}
