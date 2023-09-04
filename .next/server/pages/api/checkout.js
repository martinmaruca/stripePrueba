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
exports.id = "pages/api/checkout";
exports.ids = ["pages/api/checkout"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("stripe");;

/***/ }),

/***/ "(api)/./src/pages/api/checkout.ts":
/*!***********************************!*\
  !*** ./src/pages/api/checkout.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stripe__WEBPACK_IMPORTED_MODULE_0__]);\nstripe__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_0__[\"default\"](process.env.STRIPE_SECRET_KEY, {\n    apiVersion: \"2022-11-15\"\n});\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { price_id  } = req.query;\n        try {\n            const session = await stripe.checkout.sessions.create({\n                line_items: [\n                    {\n                        // @ts-ignore\n                        price: price_id,\n                        quantity: 1\n                    }\n                ],\n                mode: \"payment\",\n                success_url: `${req.headers.origin}/payment?success=true`,\n                cancel_url: `${req.headers.origin}/payment?canceled=true`\n            });\n            if (session.url) {\n                res.redirect(303, session.url);\n            }\n        } catch (error) {\n            res.status(error.statusCode || 500).json({\n                error: error.message\n            });\n        }\n    } else {\n        res.redirect(303, \"http://localhost:3000/\");\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NoZWNrb3V0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzRCO0FBRTVCLE1BQU1DLFNBQVMsSUFBSUQsOENBQU1BLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsaUJBQWlCLEVBQVk7SUFDakVDLFlBQVk7QUFDZDtBQUVlLGVBQWVDLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHSCxJQUFJSSxLQUFLO1FBRTlCLElBQUk7WUFDRixNQUFNQyxVQUFVLE1BQU1YLE9BQU9ZLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQUM7Z0JBQ3BEQyxZQUFZO29CQUNWO3dCQUNFLGFBQWE7d0JBQ2JDLE9BQU9QO3dCQUNQUSxVQUFVO29CQUNaO2lCQUNEO2dCQUNEQyxNQUFNO2dCQUNOQyxhQUFhLENBQUMsRUFBRWIsSUFBSWMsT0FBTyxDQUFDQyxNQUFNLENBQUMscUJBQXFCLENBQUM7Z0JBQ3pEQyxZQUFZLENBQUMsRUFBRWhCLElBQUljLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLHNCQUFzQixDQUFDO1lBQzNEO1lBRUEsSUFBSVYsUUFBUVksR0FBRyxFQUFFO2dCQUNmaEIsSUFBSWlCLFFBQVEsQ0FBQyxLQUFLYixRQUFRWSxHQUFHO1lBQy9CLENBQUM7UUFDSCxFQUFFLE9BQU9FLE9BQVk7WUFDbkJsQixJQUFJbUIsTUFBTSxDQUFDRCxNQUFNRSxVQUFVLElBQUksS0FBS0MsSUFBSSxDQUFDO2dCQUFFSCxPQUFPQSxNQUFNSSxPQUFPO1lBQUM7UUFDbEU7SUFDRixPQUFPO1FBQ0x0QixJQUFJaUIsUUFBUSxDQUFDLEtBQUs7SUFDcEIsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RpZ28vLi9zcmMvcGFnZXMvYXBpL2NoZWNrb3V0LnRzP2YxMzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgU3RyaXBlIGZyb20gXCJzdHJpcGVcIjtcblxuY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSBhcyBzdHJpbmcsIHtcbiAgYXBpVmVyc2lvbjogXCIyMDIyLTExLTE1XCIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB7IHByaWNlX2lkIH0gPSByZXEucXVlcnk7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcbiAgICAgICAgbGluZV9pdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHByaWNlOiBwcmljZV9pZCxcbiAgICAgICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIG1vZGU6IFwicGF5bWVudFwiLFxuICAgICAgICBzdWNjZXNzX3VybDogYCR7cmVxLmhlYWRlcnMub3JpZ2lufS9wYXltZW50P3N1Y2Nlc3M9dHJ1ZWAsXG4gICAgICAgIGNhbmNlbF91cmw6IGAke3JlcS5oZWFkZXJzLm9yaWdpbn0vcGF5bWVudD9jYW5jZWxlZD10cnVlYCxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc2Vzc2lvbi51cmwpIHtcbiAgICAgICAgcmVzLnJlZGlyZWN0KDMwMywgc2Vzc2lvbi51cmwpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIHJlcy5zdGF0dXMoZXJyb3Iuc3RhdHVzQ29kZSB8fCA1MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnJlZGlyZWN0KDMwMywgXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvXCIpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3RyaXBlIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TRUNSRVRfS0VZIiwiYXBpVmVyc2lvbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJwcmljZV9pZCIsInF1ZXJ5Iiwic2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjcmVhdGUiLCJsaW5lX2l0ZW1zIiwicHJpY2UiLCJxdWFudGl0eSIsIm1vZGUiLCJzdWNjZXNzX3VybCIsImhlYWRlcnMiLCJvcmlnaW4iLCJjYW5jZWxfdXJsIiwidXJsIiwicmVkaXJlY3QiLCJlcnJvciIsInN0YXR1cyIsInN0YXR1c0NvZGUiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/checkout.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/checkout.ts"));
module.exports = __webpack_exports__;

})();