# Check Your Javascript Knowledge

This project is created with an aim of collecting interesting, challenging `Javascript` questions at one place.

Start your [Quiz Website](http://nurolopher.github.io/Check-Your-Javascript-Knowledge/) now.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.


##Contribution Guide

If you want to add your questions just `fork` this project, then add your questions inside [questions.js](https://github.com/nurolopher/Check-Your-Javascript-Knowledge/blob/master/app/scripts/data/questions.js) file.

Question Format

```javascript
{
    "id": 1,
    "title": "Hello, It's me!",
    "code": "(function(){\n   return typeof arguments;\n})();",
    "versions": ["\"object\"", "\"array\"", "\"arguments\"", "\"undefined\""],
    "answer": "A"
  },

```

You can keep `title` as an empty string if your question has `code` which explains everything.
