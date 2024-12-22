
# Assert

You can write easily test scripts in JavaScript. Tests allow you to ensure that your API is working as expected, to establish that integrations between services are functioning reliably, and to verify that new developments haven't broken any existing functionality. You can also use test code to aid the debugging process when something goes wrong with your API project.

## Assert Syntax

Simple Assertions are started using `??` followed by the field which should be checked. After the field follows the condition and the expected result.

<<< @../../examples/assert/assert.http{3 HTTP}

### Conditions

Conidtions are used to assert the field of the response

| Condition | Description | Example |
| - | - | - |
| == / equals | Field and expected value are equals | `?? status == 200` |
| != | Field and expected value are not equals | `?? status != 201` |
| > | Field is greater as expected | `?? status > 199` |
| >= | Field is greater or euqals as expected  | `?? status >= 200` |
| < | Field is lower as expected | `?? duration < 300` |
| <= | Field is lower or euqals as expected | `?? status <= 200` |
| startsWith | Field starts with expected | `?? status startsWith 20` |
| endsWith | Field end with expected | `?? status endsWith 00` |
| includes / contains | Field includes expected | `?? header content-type includes json` |
| exists / isTrue | Field exists/ is truthy | `?? header range exists` |
| isFalse | Field is falsy | `?? header range isFalse` |
| isNumber | Field is number | `?? status isNumber` |
| isBoolean | Field is boolean | `?? body active isBoolean` |
| isString | Field is string | `?? header content-type isString` |
| isArray | Field is Array | `?? body links isArray` |
| matches | Field matches expected regex | `?? status matches ^\\d+` |
| sha256 | Field matches sha256 hash | `?? body sha256 eji/gfOD9pQzrW6QDTWz4jhVk/dqe3q11DVbi6Qe4ks=` |
| sha512 | Field matches sha512 hash | `?? body sha512 DbaK1OQdOya6P8SKXafJ9ha4E+d8tOlRGH4fKjfCutlAQQififYBLue0TiH4Y8XZVT47Zl7a6GQLsidLVVJm6w==` |
| md5 | Field matches md5 hash | `?? body md5 m7WPJhkuS6APAeLnsTa72A==` |

### Status Assert

Check the received HTTP response status code. Status assert consists of the keyword status followed by a condition and a expected value.


<<< @../../examples/assert/status.http{3 HTTP}

### Header Assert

Check the value of a received response header. Header assert consists of the keyword header followed by the name of the header and a valid condition.

<<< @../../examples/assert/header.http{3 HTTP}

### Duration Assert

Check the total duration (sending plus receiving time in milliseconds) of the request. Use keyword duration followed by a optional Timings Identifer (firstByte, download, wait, request, tcp, tls, total) and a condition. 

<<< @../../examples/assert/duration.http{3 HTTP}

### Body Assert

Check the value of the received HTTP response body when decoded as a string. Body assert consists of the keyword body followed by a condition and the expected value. 

<<< @../../examples/assert/body.http{3 HTTP}

If the body is JSON you could also assert spefic fields of the body. You could use keyword body followed by the property name and a condition to assert the property.

<<< @../../examples/assert/body_property.http{3 HTTP}

### Javascript Assert

With Javascript Assert you could assert already extracted variables or more complex field access logic. You could use keyword js followed by the Javascript to execute and a condition to assert the field

<<< @../../examples/assert/javascript.http{3 HTTP}

### XPath Assert

Check the value of a XPath query on the received HTTP body decoded as a string. XPath assert consists of the keyword xpath followed by a condition and a expected value.

<<< @../../examples/assert/xpath.http{3 HTTP}

## Extended Asserts

To enable more complex checks, these can also be executed via script tags. For this purpose an auxiliary method `test` is offered.


<<< @../../examples/assert/scripting.http{3-8 HTTP}


<<< @../../examples/assert/chai.http{4-9 HTTP}


::: tip
[Auxiliary methods](https://github.com/AnWeber/httpyac/blob/790a1b0409bd9eed6ef0ff26a2fc017952d58231/src/models/testFunction.ts#L6-L14) are provided for standard tests such as Status and Content-Type
:::


<<< @../../examples/assert/auiliary_methods.http{2-11 HTTP}
