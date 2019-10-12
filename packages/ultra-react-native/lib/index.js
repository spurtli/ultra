'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styledComponents = require('styled-components/native');

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

const {
  default: styled,
  css,
  ThemeProvider
} = styledComponents;

function _templateObject() {
  const data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 20;\n  height: 40;\n  border-bottom-color: ", ";\n  border-bottom-width: 1;\n  margin-bottom: 16;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
const TextField = styled.TextInput(_templateObject(), ({
  theme
}) => theme.colors.textColor, ({
  theme
}) => theme.colors.tint1);

exports.TextField = TextField;
