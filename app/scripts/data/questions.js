[
  {
    "id": 1,
    "code": "(function(){\n   return typeof arguments;\n})();",
    "versions": ["\"object\"", "\"array\"", "\"arguments\"", "\"undefined\""],
    "answer": "\"object\""
  }, {
  "id": 2,
  "code": "var s = 'Hello';\ntypeof s;",
  "versions": ["\"string\"", "\"object\"", "\"Object\"", "\"String\""],
  "answer": "\"string\""
}, {
  "id": 3,
  "code": "typeof (s['toString']())",
  "versions": ["\"object\"", "\"function\"", "\"undefined\"", "\"string\""],
  "answer": "\"string\""
}, {
  "id": 4,
  "code": "typeof null",
  "versions": ["\"null\"", "\"undefined\"", "\"object\"", "\"function\""],
  "answer": "\"object\""
}, {
  "id": 5,
  "code": "var Object = \"object\";\n typeof Object",
  "versions": ["\"string\"", "\"object\"", "Object", "function"],
  "answer": "\"string\""
}, {
  "id": 6,
  "code": "1.1.toString()",
  "versions": ["\"Syntax Error\"", "\"1.1\""],
  "answer": "\"1.1\""
}, {
  "id": 7,
  "code": "42 .toFixed(2)",
  "versions": ["\"Syntax Error\"", "\"42.00\""],
  "answer": "\"42.00\""
}, {
  "id": 8,
  "code": "4 + 2 .toFixed(2)",
  "versions": ["\"Syntax Error\"", "\"42.00\"", "\"6.00\""],
  "answer": "\"42.00\""
}, {
  "id": 9,
  "code": "[] == ![]",
  "versions": ["\"Syntax Error\"", "true", "false"],
  "answer": "true"
}, {
  "id": 10,
  "code": "[] + {}",
  "versions": ["\"Syntax Error\"", "0", "\"[object Object]\""],
  "answer": "0"
}, {
  "id": 11,
  "code": "{} + []",
  "versions": ["\"Syntax Error\"", "0", "\"[object Object]\""],
  "answer": "\"[object Object]\""
}, {
  "id": 12,
  "code": "Number({});\nNumber([]);",
  "versions": ["\"Syntax Error\"", "NaN 0", "NaN NaN", "0 0"],
  "answer": "Nan \n0"
}
]
