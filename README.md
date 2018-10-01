# typesafe-maths
Mathematics, but in a type safe manner!

```
const { add, substract, multiply, divide } = require('typesafe-maths');

add(2, 3) // 5
add('two', '3') // 5
multiply('one million', 2) // 2,000,000
```

This was inpired by [this tweet](https://twitter.com/tombomp/status/1046712282913345536) and really a 5 line wrapper around `text-to-number`. Please do not use this ever. Thanks.
