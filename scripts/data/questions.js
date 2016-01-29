[
  {
    "id": 1,
    "code": "(function(){\n   return typeof arguments;\n})();",
    "versions": ["\"object\"", "\"array\"", "\"arguments\"", "\"undefined\""],
    "answer": "\"object\""
  },
  {
    "id": 2,
    "code": "var s = 'Hello';\ntypeof s;",
    "versions": ["\"string\"", "\"object\"", "\"Object\"", "\"String\""],
    "answer": "\"string\""
  },
  {
    "id": 3,
    "code": "typeof (s['toString']())",
    "versions": ["\"object\"", "\"function\"", "\"undefined\"", "\"string\""],
    "answer": "\"string\""
  },
  {
    "id": 4,
    "code": "typeof null",
    "versions": ["\"null\"", "\"undefined\"", "\"object\"", "\"function\""],
    "answer": "\"object\""
  },
  {
    "id": 5,
    "code": "var Object = \"object\";\n typeof Object",
    "versions": ["\"string\"", "\"object\"", "Object", "function"],
    "answer": "\"string\""
  },
  {
    "id": 6,
    "code": "1.1.toString()",
    "versions": ["\"error\"", "\"1.1\""],
    "answer": "\"1.1\""
  }
]
