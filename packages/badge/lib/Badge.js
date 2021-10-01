"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var Badge = (0, _base["default"])("p", process.env.NODE_ENV === "production" ? {
  target: "e1x1xkxf0"
} : {
  target: "e1x1xkxf0",
  label: "Badge"
})(process.env.NODE_ENV === "production" ? {
  name: "1y3722s",
  styles: "border:1px solid #ccc;border-radius:4px;box-sizing:border-box;font-size:16px;font-weight:300;padding:10px 40px 10px 10px;width:150px"
} : {
  name: "1y3722s",
  styles: "border:1px solid #ccc;border-radius:4px;box-sizing:border-box;font-size:16px;font-weight:300;padding:10px 40px 10px 10px;width:150px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CYWRnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFc0IiLCJmaWxlIjoiLi4vc3JjL0JhZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5jb25zdCBCYWRnZSA9IHN0eWxlZC5wYFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZzogMTBweCA0MHB4IDEwcHggMTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgQmFkZ2U7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var _default = Badge;
exports["default"] = _default;