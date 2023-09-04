"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("stripe");;

/***/ }),

/***/ "(api)/./src/pages/api/products.ts":
/*!***********************************!*\
  !*** ./src/pages/api/products.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stripe__WEBPACK_IMPORTED_MODULE_0__]);\nstripe__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_0__[\"default\"](process.env.STRIPE_SECRET_KEY, {\n    apiVersion: \"2022-11-15\"\n});\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const products = await stripe.products.list({\n                active: true\n            });\n            const productWithPrices = await Promise.all(products.data.map(async (product)=>{\n                // @ts-ignore\n                const price = await stripe.prices.retrieve(product.default_price);\n                return {\n                    ...product,\n                    price: price.unit_amount / 100\n                };\n            }));\n            res.status(200).json(productWithPrices);\n        } catch (error) {\n            res.status(500).json({\n                error: error.message\n            });\n        }\n    } else {\n        res.setHeader(\"Allow\", \"GET\");\n        res.status(405).end(\"Method not Allowed\");\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Byb2R1Y3RzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzRCO0FBRTVCLE1BQU1DLFNBQVMsSUFBSUQsOENBQU1BLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsaUJBQWlCLEVBQVk7SUFDakVDLFlBQVk7QUFDZDtBQUVlLGVBQWVDLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN4QixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNVCxPQUFPUyxRQUFRLENBQUNDLElBQUksQ0FBQztnQkFDMUNDLFFBQVEsSUFBSTtZQUNkO1lBRUEsTUFBTUMsb0JBQW9CLE1BQU1DLFFBQVFDLEdBQUcsQ0FDekNMLFNBQVNNLElBQUksQ0FBQ0MsR0FBRyxDQUFDLE9BQU9DLFVBQVk7Z0JBQ25DLGFBQWE7Z0JBQ2IsTUFBTUMsUUFBUSxNQUFNbEIsT0FBT21CLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDSCxRQUFRSSxhQUFhO2dCQUNoRSxPQUFPO29CQUFFLEdBQUdKLE9BQU87b0JBQUVDLE9BQU9BLE1BQU1JLFdBQVcsR0FBSTtnQkFBSTtZQUN2RDtZQUdGZixJQUFJZ0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1o7UUFDdkIsRUFBRSxPQUFPYSxPQUFZO1lBQ25CbEIsSUFBSWdCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU9BLE1BQU1DLE9BQU87WUFBQztRQUM5QztJQUNGLE9BQU87UUFDTG5CLElBQUlvQixTQUFTLENBQUMsU0FBUztRQUN2QnBCLElBQUlnQixNQUFNLENBQUMsS0FBS0ssR0FBRyxDQUFDO0lBQ3RCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29kaWdvLy4vc3JjL3BhZ2VzL2FwaS9wcm9kdWN0cy50cz83YjY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFN0cmlwZSBmcm9tIFwic3RyaXBlXCI7XG5cbmNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkgYXMgc3RyaW5nLCB7XG4gIGFwaVZlcnNpb246IFwiMjAyMi0xMS0xNVwiLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBzdHJpcGUucHJvZHVjdHMubGlzdCh7XG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBwcm9kdWN0V2l0aFByaWNlcyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICBwcm9kdWN0cy5kYXRhLm1hcChhc3luYyAocHJvZHVjdCkgPT4ge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBjb25zdCBwcmljZSA9IGF3YWl0IHN0cmlwZS5wcmljZXMucmV0cmlldmUocHJvZHVjdC5kZWZhdWx0X3ByaWNlKTtcbiAgICAgICAgICByZXR1cm4geyAuLi5wcm9kdWN0LCBwcmljZTogcHJpY2UudW5pdF9hbW91bnQhIC8gMTAwIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihwcm9kdWN0V2l0aFByaWNlcyk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnNldEhlYWRlcihcIkFsbG93XCIsIFwiR0VUXCIpO1xuICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoXCJNZXRob2Qgbm90IEFsbG93ZWRcIik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdHJpcGUiLCJzdHJpcGUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NFQ1JFVF9LRVkiLCJhcGlWZXJzaW9uIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInByb2R1Y3RzIiwibGlzdCIsImFjdGl2ZSIsInByb2R1Y3RXaXRoUHJpY2VzIiwiUHJvbWlzZSIsImFsbCIsImRhdGEiLCJtYXAiLCJwcm9kdWN0IiwicHJpY2UiLCJwcmljZXMiLCJyZXRyaWV2ZSIsImRlZmF1bHRfcHJpY2UiLCJ1bml0X2Ftb3VudCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/products.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/products.ts"));
module.exports = __webpack_exports__;

})();