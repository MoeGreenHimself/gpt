let express = require('express');
let app = express();
let ejs = require('ejs');
const haikus = require('./haikus.json');
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {haikus: haikus});
});

app.listen(port);
{
  "name": "app-service-hello-world",
  "version": "0.0.1",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
      "abbrev": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
          "dev": true
      },
      "accepts": {
          "version": "1.3.8",
          "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
          "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",
          "requires": {
              "mime-types": "~2.1.34",
              "negotiator": "0.6.3"
          }
      },
      "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
              "color-convert": "^2.0.1"
          }
      },
      "array-flatten": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
          "integrity": "sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg=="
      },
      "async": {
          "version": "3.2.4",
          "resolved": "https://registry.npmjs.org/async/-/async-3.2.4.tgz",
          "integrity": "sha512-iAB+JbDEGXhyIUavoDl9WP/Jj106Kz9DEn1DPgYw5ruDn0e3Wgi3sKFm55sASdGBNOQB8F59d9qQ7deqrHA8wQ=="
      },
      "balanced-match": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
          "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="
      },
      "body-parser": {
          "version": "1.20.0",
          "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.20.0.tgz",
          "integrity": "sha512-DfJ+q6EPcGKZD1QWUjSpqp+Q7bDQTsQIF4zfUAtZ6qk+H/3/QRhg9CEp39ss+/T2vw0+HaidC0ecJj/DRLIaKg==",
          "requires": {
              "bytes": "3.1.2",
              "content-type": "~1.0.4",
              "debug": "2.6.9",
              "depd": "2.0.0",
              "destroy": "1.2.0",
              "http-errors": "2.0.0",
              "iconv-lite": "0.4.24",
              "on-finished": "2.4.1",
              "qs": "6.10.3",
              "raw-body": "2.5.1",
              "type-is": "~1.6.18",
              "unpipe": "1.0.0"
          }
      },
      "brace-expansion": {
          "version": "1.1.11",
          "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
          "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
          "requires": {
              "balanced-match": "^1.0.0",
              "concat-map": "0.0.1"
          }
      },
      "bytes": {
          "version": "3.1.2",
          "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
          "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg=="
      },
      "call-bind": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",
          "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",
          "requires": {
              "function-bind": "^1.1.1",
              "get-intrinsic": "^1.0.2"
          }
      },
      "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
              "ansi-styles": "^4.1.0",
              "supports-color": "^7.1.0"
          }
      },
      "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
              "color-name": "~1.1.4"
          }
      },
      "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
      },
      "concat-map": {
          "version": "0.0.1",
          "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
          "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg=="
      },
      "content-disposition": {
          "version": "0.5.4",
          "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",
          "integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",
          "requires": {
              "safe-buffer": "5.2.1"
          }
      },
      "content-type": {
          "version": "1.0.4",
          "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
          "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA=="
      },
      "cookie": {
          "version": "0.5.0",
          "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.5.0.tgz",
          "integrity": "sha512-YZ3GUyn/o8gfKJlnlX7g7xq4gyO6OSuhGPKaaGssGB2qgDUS0gPgtTvoyZLTt9Ab6dC4hfc9dV5arkvc/OCmrw=="
      },
      "cookie-signature": {
          "version": "1.0.6",
          "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
          "integrity": "sha512-QADzlaHc8icV8I7vbaJXJwod9HWYp8uCqf1xa4OfNu1T7JVxQIrUgOWtHdNDtPiywmFbiS12VjotIXLrKM3orQ=="
      },
      "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
              "ms": "2.0.0"
          }
      },
      "depd": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
          "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw=="
      },
      "destroy": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz",
          "integrity": "sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg=="
      },
      "ee-first": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
          "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow=="
      },
      "ejs": {
          "version": "3.1.8",
          "resolved": "https://registry.npmjs.org/ejs/-/ejs-3.1.8.tgz",
          "integrity": "sha512-/sXZeMlhS0ArkfX2Aw780gJzXSMPnKjtspYZv+f3NiKLlubezAHDU5+9xz6gd3/NhG3txQCo6xlglmTS+oTGEQ==",
          "requires": {
              "jake": "^10.8.5"
          }
      },
      "encodeurl": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
          "integrity": "sha512-TPJXq8JqFaVYm2CWmPvnP2Iyo4ZSM7/QKcSmuMLDObfpH5fi7RUGmd/rTDf+rut/saiDiQEeVTNgAmJEdAOx0w=="
      },
      "escape-html": {
          "version": "1.0.3",
          "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
          "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow=="
      },
      "etag": {
          "version": "1.8.1",
          "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
          "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg=="
      },
      "express": {
          "version": "4.18.1",
          "resolved": "https://registry.npmjs.org/express/-/express-4.18.1.tgz",
          "integrity": "sha512-zZBcOX9TfehHQhtupq57OF8lFZ3UZi08Y97dwFCkD8p9d/d2Y3M+ykKcwaMDEL+4qyUolgBDX6AblpR3fL212Q==",
          "requires": {
              "accepts": "~1.3.8",
              "array-flatten": "1.1.1",
              "body-parser": "1.20.0",
              "content-disposition": "0.5.4",
              "content-type": "~1.0.4",
              "cookie": "0.5.0",
              "cookie-signature": "1.0.6",
              "debug": "2.6.9",
              "depd": "2.0.0",
              "encodeurl": "~1.0.2",
              "escape-html": "~1.0.3",
              "etag": "~1.8.1",
              "finalhandler": "1.2.0",
              "fresh": "0.5.2",
              "http-errors": "2.0.0",
              "merge-descriptors": "1.0.1",
              "methods": "~1.1.2",
              "on-finished": "2.4.1",
              "parseurl": "~1.3.3",
              "path-to-regexp": "0.1.7",
              "proxy-addr": "~2.0.7",
              "qs": "6.10.3",
              "range-parser": "~1.2.1",
              "safe-buffer": "5.2.1",
              "send": "0.18.0",
              "serve-static": "1.15.0",
              "setprototypeof": "1.2.0",
              "statuses": "2.0.1",
              "type-is": "~1.6.18",
              "utils-merge": "1.0.1",
              "vary": "~1.1.2"
          }
      },
      "filelist": {
          "version": "1.0.4",
          "resolved": "https://registry.npmjs.org/filelist/-/filelist-1.0.4.tgz",
          "integrity": "sha512-w1cEuf3S+DrLCQL7ET6kz+gmlJdbq9J7yXCSjK/OZCPA+qEN1WyF4ZAf0YYJa4/shHJra2t/d/r8SV4Ji+x+8Q==",
          "requires": {
              "minimatch": "^5.0.1"
          },
          "dependencies": {
              "brace-expansion": {
                  "version": "2.0.1",
                  "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
                  "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
                  "requires": {
                      "balanced-match": "^1.0.0"
                  }
              },
              "minimatch": {
                  "version": "5.1.0",
                  "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-5.1.0.tgz",
                  "integrity": "sha512-9TPBGGak4nHfGZsPBohm9AWg6NoT7QTCehS3BIJABslyZbzxfV78QM2Y6+i741OPZIafFAaiiEMh5OyIrJPgtg==",
                  "requires": {
                      "brace-expansion": "^2.0.1"
                  }
              }
          }
      },
      "finalhandler": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.2.0.tgz",
          "integrity": "sha512-5uXcUVftlQMFnWC9qu/svkWv3GTd2PfUhK/3PLkYNAe7FbqJMt3515HaxE6eRL74GdsriiwujiawdaB1BpEISg==",
          "requires": {
              "debug": "2.6.9",
              "encodeurl": "~1.0.2",
              "escape-html": "~1.0.3",
              "on-finished": "2.4.1",
              "parseurl": "~1.3.3",
              "statuses": "2.0.1",
              "unpipe": "~1.0.0"
          }
      },
      "forwarded": {
          "version": "0.2.0",
          "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
          "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow=="
      },
      "fresh": {
          "version": "0.5.2",
          "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
          "integrity": "sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q=="
      },
      "function-bind": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
          "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A=="
      },
      "get-intrinsic": {
          "version": "1.1.2",
          "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.1.2.tgz",
          "integrity": "sha512-Jfm3OyCxHh9DJyc28qGk+JmfkpO41A4XkneDSujN9MDXrm4oDKdHvndhZ2dN94+ERNfkYJWDclW6k2L/ZGHjXA==",
          "requires": {
              "function-bind": "^1.1.1",
              "has": "^1.0.3",
              "has-symbols": "^1.0.3"
          }
      },
      "has": {
          "version": "1.0.3",
          "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
          "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
          "requires": {
              "function-bind": "^1.1.1"
          }
      },
      "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
      },
      "has-symbols": {
          "version": "1.0.3",
          "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.3.tgz",
          "integrity": "sha512-l3LCuF6MgDNwTDKkdYGEihYjt5pRPbEg46rtlmnSPlUbgmB8LOIrKJbYYFBSbnPaJexMKtiPO8hmeRjRz2Td+A=="
      },
      "http-errors": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz",
          "integrity": "sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==",
          "requires": {
              "depd": "2.0.0",
              "inherits": "2.0.4",
              "setprototypeof": "1.2.0",
              "statuses": "2.0.1",
              "toidentifier": "1.0.1"
          }
      },
      "iconv-lite": {
          "version": "0.4.24",
          "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
          "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
          "requires": {
              "safer-buffer": ">= 2.1.2 < 3"
          }
      },
      "ignore-by-default": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-1.0.1.tgz",
          "integrity": "sha512-Ius2VYcGNk7T90CppJqcIkS5ooHUZyIQK+ClZfMfMNFEF9VSE73Fq+906u/CWu92x4gzZMWOwfFYckPObzdEbA==",
          "dev": true
      },
      "inherits": {
          "version": "2.0.4",
          "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
          "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
      },
      "ipaddr.js": {
          "version": "1.9.1",
          "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
          "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g=="
      },
      "is-extglob": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
          "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
          "dev": true
      },
      "is-glob": {
          "version": "4.0.3",
          "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
          "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
          "dev": true,
          "requires": {
              "is-extglob": "^2.1.1"
          }
      },
      "jake": {
          "version": "10.8.5",
          "resolved": "https://registry.npmjs.org/jake/-/jake-10.8.5.tgz",
          "integrity": "sha512-sVpxYeuAhWt0OTWITwT98oyV0GsXyMlXCF+3L1SuafBVUIr/uILGRB+NqwkzhgXKvoJpDIpQvqkUALgdmQsQxw==",
          "requires": {
              "async": "^3.2.3",
              "chalk": "^4.0.2",
              "filelist": "^1.0.1",
              "minimatch": "^3.0.4"
          }
      },
      "media-typer": {
          "version": "0.3.0",
          "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
          "integrity": "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ=="
      },
      "merge-descriptors": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
          "integrity": "sha512-cCi6g3/Zr1iqQi6ySbseM1Xvooa98N0w31jzUYrXPX2xqObmFGHJ0tQ5u74H3mVh7wLouTseZyYIq39g8cNp1w=="
      },
      "methods": {
          "version": "1.1.2",
          "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
          "integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w=="
      },
      "mime": {
          "version": "1.6.0",
          "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
          "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg=="
      },
      "mime-db": {
          "version": "1.52.0",
          "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
          "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg=="
      },
      "mime-types": {
          "version": "2.1.35",
          "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
          "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
          "requires": {
              "mime-db": "1.52.0"
          }
      },
      "minimatch": {
          "version": "3.1.2",
          "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
          "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
          "requires": {
              "brace-expansion": "^1.1.7"
          }
      },
      "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A=="
      },
      "negotiator": {
          "version": "0.6.3",
          "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
          "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg=="
      },
      "nodemon": {
          "version": "2.0.19",
          "resolved": "https://registry.npmjs.org/nodemon/-/nodemon-2.0.19.tgz",
          "integrity": "sha512-4pv1f2bMDj0Eeg/MhGqxrtveeQ5/G/UVe9iO6uTZzjnRluSA4PVWf8CW99LUPwGB3eNIA7zUFoP77YuI7hOc0A==",
          "dev": true,
          "requires": {
              "chokidar": "^3.5.2",
              "debug": "^3.2.7",
              "ignore-by-default": "^1.0.1",
              "minimatch": "^3.0.4",
              "pstree.remy": "^1.1.8",
              "semver": "^5.7.1",
              "simple-update-notifier": "^1.0.7",
              "supports-color": "^5.5.0",
              "touch": "^3.1.0",
              "undefsafe": "^2.0.5"
          },
          "dependencies": {
              "anymatch": {
                  "version": "3.1.2",
                  "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.2.tgz",
                  "integrity": "sha512-P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg==",
                  "dev": true,
                  "requires": {
                      "normalize-path": "^3.0.0",
                      "picomatch": "^2.0.4"
                  }
              },
              "binary-extensions": {
                  "version": "2.2.0",
                  "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.2.0.tgz",
                  "integrity": "sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==",
                  "dev": true
              },
              "braces": {
                  "version": "3.0.2",
                  "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
                  "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
                  "dev": true,
                  "requires": {
                      "fill-range": "^7.0.1"
                  }
              },
              "chokidar": {
                  "version": "3.5.3",
                  "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.5.3.tgz",
                  "integrity": "sha512-Dr3sfKRP6oTcjf2JmUmFJfeVMvXBdegxB0iVQ5eb2V10uFJUCAS8OByZdVAyVb8xXNz3GjjTgj9kLWsZTqE6kw==",
                  "dev": true,
                  "requires": {
                      "anymatch": "~3.1.2",
                      "braces": "~3.0.2",
                      "fsevents": "~2.3.2",
                      "glob-parent": "~5.1.2",
                      "is-binary-path": "~2.1.0",
                      "is-glob": "~4.0.1",
                      "normalize-path": "~3.0.0",
                      "readdirp": "~3.6.0"
                  }
              },
              "debug": {
                  "version": "3.2.7",
                  "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
                  "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
                  "dev": true,
                  "requires": {
                      "ms": "^2.1.1"
                  }
              },
              "fill-range": {
                  "version": "7.0.1",
                  "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
                  "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
                  "dev": true,
                  "requires": {
                      "to-regex-range": "^5.0.1"
                  }
              },
              "fsevents": {
                  "version": "2.3.2",
                  "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",
                  "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",
                  "dev": true,
                  "optional": true
              },
              "glob-parent": {
                  "version": "5.1.2",
                  "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
                  "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
                  "dev": true,
                  "requires": {
                      "is-glob": "^4.0.1"
                  }
              },
              "has-flag": {
                  "version": "3.0.0",
                  "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
                  "integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
                  "dev": true
              },
              "is-binary-path": {
                  "version": "2.1.0",
                  "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
                  "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
                  "dev": true,
                  "requires": {
                      "binary-extensions": "^2.0.0"
                  }
              },
              "is-number": {
                  "version": "7.0.0",
                  "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
                  "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
                  "dev": true
              },
              "ms": {
                  "version": "2.1.3",
                  "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
                  "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
                  "dev": true
              },
              "readdirp": {
                  "version": "3.6.0",
                  "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
                  "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
                  "dev": true,
                  "requires": {
                      "picomatch": "^2.2.1"
                  }
              },
              "supports-color": {
                  "version": "5.5.0",
                  "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
                  "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
                  "dev": true,
                  "requires": {
                      "has-flag": "^3.0.0"
                  }
              },
              "to-regex-range": {
                  "version": "5.0.1",
                  "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
                  "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
                  "dev": true,
                  "requires": {
                      "is-number": "^7.0.0"
                  }
              }
          }
      },
      "nopt": {
          "version": "1.0.10",
          "resolved": "https://registry.npmjs.org/nopt/-/nopt-1.0.10.tgz",
          "integrity": "sha512-NWmpvLSqUrgrAC9HCuxEvb+PSloHpqVu+FqcO4eeF2h5qYRhA7ev6KvelyQAKtegUbC6RypJnlEOhd8vloNKYg==",
          "dev": true,
          "requires": {
              "abbrev": "1"
          }
      },
      "normalize-path": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
          "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
          "dev": true
      },
      "object-inspect": {
          "version": "1.12.2",
          "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.12.2.tgz",
          "integrity": "sha512-z+cPxW0QGUp0mcqcsgQyLVRDoXFQbXOwBaqyF7VIgI4TWNQsDHrBpUQslRmIfAoYWdYzs6UlKJtB2XJpTaNSpQ=="
      },
      "on-finished": {
          "version": "2.4.1",
          "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
          "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
          "requires": {
              "ee-first": "1.1.1"
          }
      },
      "parseurl": {
          "version": "1.3.3",
          "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
          "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ=="
      },
      "path-to-regexp": {
          "version": "0.1.7",
          "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
          "integrity": "sha512-5DFkuoqlv1uYQKxy8omFBeJPQcdoE07Kv2sferDCrAq1ohOU+MSDswDIbnx3YAM60qIOnYa53wBhXW0EbMonrQ=="
      },
      "picomatch": {
          "version": "2.3.1",
          "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
          "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
          "dev": true
      },
      "proxy-addr": {
          "version": "2.0.7",
          "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
          "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
          "requires": {
              "forwarded": "0.2.0",
              "ipaddr.js": "1.9.1"
          }
      },
      "pstree.remy": {
          "version": "1.1.8",
          "resolved": "https://registry.npmjs.org/pstree.remy/-/pstree.remy-1.1.8.tgz",
          "integrity": "sha512-77DZwxQmxKnu3aR542U+X8FypNzbfJ+C5XQDk3uWjWxn6151aIMGthWYRXTqT1E5oJvg+ljaa2OJi+VfvCOQ8w==",
          "dev": true
      },
      "qs": {
          "version": "6.10.3",
          "resolved": "https://registry.npmjs.org/qs/-/qs-6.10.3.tgz",
          "integrity": "sha512-wr7M2E0OFRfIfJZjKGieI8lBKb7fRCH4Fv5KNPEs7gJ8jadvotdsS08PzOKR7opXhZ/Xkjtt3WF9g38drmyRqQ==",
          "requires": {
              "side-channel": "^1.0.4"
          }
      },
      "range-parser": {
          "version": "1.2.1",
          "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
          "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg=="
      },
      "raw-body": {
          "version": "2.5.1",
          "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.1.tgz",
          "integrity": "sha512-qqJBtEyVgS0ZmPGdCFPWJ3FreoqvG4MVQln/kCgF7Olq95IbOp0/BWyMwbdtn4VTvkM8Y7khCQ2Xgk/tcrCXig==",
          "requires": {
              "bytes": "3.1.2",
              "http-errors": "2.0.0",
              "iconv-lite": "0.4.24",
              "unpipe": "1.0.0"
          }
      },
      "safe-buffer": {
          "version": "5.2.1",
          "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
          "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ=="
      },
      "safer-buffer": {
          "version": "2.1.2",
          "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
          "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
      },
      "semver": {
          "version": "5.7.1",
          "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
          "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
          "dev": true
      },
      "send": {
          "version": "0.18.0",
          "resolved": "https://registry.npmjs.org/send/-/send-0.18.0.tgz",
          "integrity": "sha512-qqWzuOjSFOuqPjFe4NOsMLafToQQwBSOEpS+FwEt3A2V3vKubTquT3vmLTQpFgMXp8AlFWFuP1qKaJZOtPpVXg==",
          "requires": {
              "debug": "2.6.9",
              "depd": "2.0.0",
              "destroy": "1.2.0",
              "encodeurl": "~1.0.2",
              "escape-html": "~1.0.3",
              "etag": "~1.8.1",
              "fresh": "0.5.2",
              "http-errors": "2.0.0",
              "mime": "1.6.0",
              "ms": "2.1.3",
              "on-finished": "2.4.1",
              "range-parser": "~1.2.1",
              "statuses": "2.0.1"
          },
          "dependencies": {
              "ms": {
                  "version": "2.1.3",
                  "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
                  "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
              }
          }
      },
      "serve-static": {
          "version": "1.15.0",
          "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.15.0.tgz",
          "integrity": "sha512-XGuRDNjXUijsUL0vl6nSD7cwURuzEgglbOaFuZM9g3kwDXOWVTck0jLzjPzGD+TazWbboZYu52/9/XPdUgne9g==",
          "requires": {
              "encodeurl": "~1.0.2",
              "escape-html": "~1.0.3",
              "parseurl": "~1.3.3",
              "send": "0.18.0"
          }
      },
      "setprototypeof": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
          "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw=="
      },
      "side-channel": {
          "version": "1.0.4",
          "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.4.tgz",
          "integrity": "sha512-q5XPytqFEIKHkGdiMIrY10mvLRvnQh42/+GoBlFW3b2LXLE2xxJpZFdm94we0BaoV3RwJyGqg5wS7epxTv0Zvw==",
          "requires": {
              "call-bind": "^1.0.0",
              "get-intrinsic": "^1.0.2",
              "object-inspect": "^1.9.0"
          }
      },
      "simple-update-notifier": {
          "version": "1.0.7",
          "resolved": "https://registry.npmjs.org/simple-update-notifier/-/simple-update-notifier-1.0.7.tgz",
          "integrity": "sha512-BBKgR84BJQJm6WjWFMHgLVuo61FBDSj1z/xSFUIozqO6wO7ii0JxCqlIud7Enr/+LhlbNI0whErq96P2qHNWew==",
          "dev": true,
          "requires": {
              "semver": "~7.0.0"
          },
          "dependencies": {
              "semver": {
                  "version": "7.0.0",
                  "resolved": "https://registry.npmjs.org/semver/-/semver-7.0.0.tgz",
                  "integrity": "sha512-+GB6zVA9LWh6zovYQLALHwv5rb2PHGlJi3lfiqIHxR0uuwCgefcOJc59v9fv1w8GbStwxuuqqAjI9NMAOOgq1A==",
                  "dev": true
              }
          }
      },
      "statuses": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",
          "integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ=="
      },
      "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
              "has-flag": "^4.0.0"
          }
      },
      "toidentifier": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
          "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA=="
      },
      "touch": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/touch/-/touch-3.1.0.tgz",
          "integrity": "sha512-WBx8Uy5TLtOSRtIq+M03/sKDrXCLHxwDcquSP2c43Le03/9serjQBIztjRz6FkJez9D/hleyAXTBGLwwZUw9lA==",
          "dev": true,
          "requires": {
              "nopt": "~1.0.10"
          }
      },
      "type-is": {
          "version": "1.6.18",
          "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
          "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
          "requires": {
              "media-typer": "0.3.0",
              "mime-types": "~2.1.24"
          }
      },
      "undefsafe": {
          "version": "2.0.5",
          "resolved": "https://registry.npmjs.org/undefsafe/-/undefsafe-2.0.5.tgz",
          "integrity": "sha512-WxONCrssBM8TSPRqN5EmsjVrsv4A8X12J4ArBiiayv3DyyG3ZlIg6yysuuSYdZsVz3TKcTg2fd//Ujd4CHV1iA==",
          "dev": true
      },
      "unpipe": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
          "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ=="
      },
      "utils-merge": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
          "integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA=="
      },
      "vary": {
          "version": "1.1.2",
          "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
          "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg=="
      }
  }
}
[# Logs
  logs
  *.log
  npm-debug.log*
  
  # Runtime data
  pids
  *.pid
  *.seed
  
  # Directory for instrumented libs generated by jscoverage/JSCover
  lib-cov
  
  # Coverage directory used by tools like istanbul
  coverage
  
  # nyc test coverage
  .nyc_output
  
  # Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)
  .grunt
  
  # node-waf configuration
  .lock-wscript
  
  # Compiled binary addons (http://nodejs.org/api/addons.html)
  build/Release
  
  # Dependency directories
  node_modules
  jspm_packages
  
  # Optional npm cache directory
  .npm
  
  # Optional REPL history
  .node_repl_history
  let express = require('express');
  let app = express();
  let ejs = require('ejs');
  const haikus = require('./haikus.json');
  const port = process.env.PORT || 3000;
  
  app.use(express.static('public'))
  app.set('view engine', 'ejs');
  
  app.get('/', (req, res) => {
    res.render('index', {haikus: haikus});
  });
  
  app.listen(port);
  
      {
          "text": "rain in seattle,\ndon't forget an umbrella,\nor it will be gloom",
          "image": "puddle_jumper_octodex.jpg"
      },
      {
          "text": "my tunes on repeat,\nit's time for me to dj,\nhave you heard this one?",
          "image": "vinyltocat.jpeg"
      },
      {
          "text": "snow is still falling,\nis it time for apres yet?\nlet's do one more run",
          "image": "snowtocat_final.jpg"
      },
      {
          "text": "beep boop bop beep boop,\ni am robot octocat,\ni think there's a bug",
          "image": "Robotocat.jpeg"
      },
      {
          "text": "same plot as before,\nso why is it still awesome?\ni think it's the hat",
          "image": "linktocat.jpg"
      }
  ]
  [# Logs
    logs
    *.log
    npm-debug.log*
    
    # Runtime data
    pids
    *.pid
    *.seed
    
    # Directory for instrumented libs generated by jscoverage/JSCover
    lib-cov
    
    # Coverage directory used by tools like istanbul
    coverage
    
    # nyc test coverage
    .nyc_output
    
    # Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)
    .grunt
    
    # node-waf configuration
    .lock-wscript
    
    # Compiled binary addons (http://nodejs.org/api/addons.html)
    build/Release
    
    # Dependency directories
    node_modules
    jspm_packages
    
    # Optional npm cache directory
    .npm
    
    # Optional REPL history
    .node_repl_history
    let express = require('express');
    let app = express();
    let ejs = require('ejs');
    const haikus = require('./haikus.json');
    const port = process.env.PORT || 3000;
    
    app.use(express.static('public'))
    app.set('view engine', 'ejs');
    
    app.get('/', (req, res) => {
      res.render('index', {haikus: haikus});
    });
    
    app.listen(port);
    
        {
            "text": "rain in seattle,\ndon't forget an umbrella,\nor it will be gloom",
            "image": "puddle_jumper_octodex.jpg"
        },
        {
            "text": "my tunes on repeat,\nit's time for me to dj,\nhave you heard this one?",
            "image": "vinyltocat.jpeg"
        },
        {
            "text": "snow is still falling,\nis it time for apres yet?\nlet's do one more run",
            "image": "snowtocat_final.jpg"
        },
        {
            "text": "beep boop bop beep boop,\ni am robot octocat,\ni think there's a bug",
            "image": "Robotocat.jpeg"
        },
        {
            "text": "same plot as before,\nso why is it still awesome?\ni think it's the hat",
            "image": "linktocat.jpg"
        }
    ]
    
    [# Logs
      logs
      *.log
      npm-debug.log*
      
      # Runtime data
      pids
      *.pid
      *.seed
      
      # Directory for instrumented libs generated by jscoverage/JSCover
      lib-cov
      
      # Coverage directory used by tools like istanbul
      coverage
      
      # nyc test coverage
      .nyc_output
      
      # Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)
      .grunt
      
      # node-waf configuration
      .lock-wscript
      
      # Compiled binary addons (http://nodejs.org/api/addons.html)
      build/Release
      
      # Dependency directories
      node_modules
      jspm_packages
      
      # Optional npm cache directory
      .npm
      
      # Optional REPL history
      .node_repl_history
      let express = require('express');
      let app = express();
      let ejs = require('ejs');
      const haikus = require('./haikus.json');
      const port = process.env.PORT || 3000;
      
      app.use(express.static('public'))
      app.set('view engine', 'ejs');
      
      app.get('/', (req, res) => {
        res.render('index', {haikus: haikus});
      });
      
      app.listen(port);
      
          {
              "text": "rain in seattle,\ndon't forget an umbrella,\nor it will be gloom",
              "image": "puddle_jumper_octodex.jpg"
          },
          {
              "text": "my tunes on repeat,\nit's time for me to dj,\nhave you heard this one?",
              "image": "vinyltocat.jpeg"
          },
          {
              "text": "snow is still falling,\nis it time for apres yet?\nlet's do one more run",
              "image": "snowtocat_final.jpg"
          },
          {
              "text": "beep boop bop beep boop,\ni am robot octocat,\ni think there's a bug",
              "image": "Robotocat.jpeg"
          },
          {
              "text": "same plot as before,\nso why is it still awesome?\ni think it's the hat",
              "image": "linktocat.jpg"
          }
      ]
      {
        "name": "app-service-hello-world",
        "version": "0.0.1",
        "lockfileVersion": 1,
        "requires": true,
        "dependencies": {
            "abbrev": {
                "version": "1.1.1",
                "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
                "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
                "dev": true
            },
            "accepts": {
                "version": "1.3.8",
                "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
                "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",
                "requires": {
                    "mime-types": "~2.1.34",
                    "negotiator": "0.6.3"
                }
            },
            "ansi-styles": {
                "version": "4.3.0",
                "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                "requires": {
                    "color-convert": "^2.0.1"
                }
            },
            "array-flatten": {
                "version": "1.1.1",
                "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
                "integrity": "sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg=="
            },
            "async": {
                "version": "3.2.4",
                "resolved": "https://registry.npmjs.org/async/-/async-3.2.4.tgz",
                "integrity": "sha512-iAB+JbDEGXhyIUavoDl9WP/Jj106Kz9DEn1DPgYw5ruDn0e3Wgi3sKFm55sASdGBNOQB8F59d9qQ7deqrHA8wQ=="
            },
            "balanced-match": {
                "version": "1.0.2",
                "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
                "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="
            },
            "body-parser": {
                "version": "1.20.0",
                "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.20.0.tgz",
                "integrity": "sha512-DfJ+q6EPcGKZD1QWUjSpqp+Q7bDQTsQIF4zfUAtZ6qk+H/3/QRhg9CEp39ss+/T2vw0+HaidC0ecJj/DRLIaKg==",
                "requires": {
                    "bytes": "3.1.2",
                    "content-type": "~1.0.4",
                    "debug": "2.6.9",
                    "depd": "2.0.0",
                    "destroy": "1.2.0",
                    "http-errors": "2.0.0",
                    "iconv-lite": "0.4.24",
                    "on-finished": "2.4.1",
                    "qs": "6.10.3",
                    "raw-body": "2.5.1",
                    "type-is": "~1.6.18",
                    "unpipe": "1.0.0"
                }
            },
            "brace-expansion": {
                "version": "1.1.11",
                "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
                "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
                "requires": {
                    "balanced-match": "^1.0.0",
                    "concat-map": "0.0.1"
                }
            },
            "bytes": {
                "version": "3.1.2",
                "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
                "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg=="
            },
            "call-bind": {
                "version": "1.0.2",
                "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",
                "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",
                "requires": {
                    "function-bind": "^1.1.1",
                    "get-intrinsic": "^1.0.2"
                }
            },
            "chalk": {
                "version": "4.1.2",
                "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
                "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
                "requires": {
                    "ansi-styles": "^4.1.0",
                    "supports-color": "^7.1.0"
                }
            },
            "color-convert": {
                "version": "2.0.1",
                "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                "requires": {
                    "color-name": "~1.1.4"
                }
            },
            "color-name": {
                "version": "1.1.4",
                "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
            },
            "concat-map": {
                "version": "0.0.1",
                "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
                "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg=="
            },
            "content-disposition": {
                "version": "0.5.4",
                "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",
                "integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",
                "requires": {
                    "safe-buffer": "5.2.1"
                }
            },
            "content-type": {
                "version": "1.0.4",
                "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
                "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA=="
            },
            "cookie": {
                "version": "0.5.0",
                "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.5.0.tgz",
                "integrity": "sha512-YZ3GUyn/o8gfKJlnlX7g7xq4gyO6OSuhGPKaaGssGB2qgDUS0gPgtTvoyZLTt9Ab6dC4hfc9dV5arkvc/OCmrw=="
            },
            "cookie-signature": {
                "version": "1.0.6",
                "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
                "integrity": "sha512-QADzlaHc8icV8I7vbaJXJwod9HWYp8uCqf1xa4OfNu1T7JVxQIrUgOWtHdNDtPiywmFbiS12VjotIXLrKM3orQ=="
            },
            "debug": {
                "version": "2.6.9",
                "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                "requires": {
                    "ms": "2.0.0"
                }
            },
            "depd": {
                "version": "2.0.0",
                "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
                "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw=="
            },
            "destroy": {
                "version": "1.2.0",
                "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz",
                "integrity": "sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg=="
            },
            "ee-first": {
                "version": "1.1.1",
                "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
                "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow=="
            },
            "ejs": {
                "version": "3.1.8",
                "resolved": "https://registry.npmjs.org/ejs/-/ejs-3.1.8.tgz",
                "integrity": "sha512-/sXZeMlhS0ArkfX2Aw780gJzXSMPnKjtspYZv+f3NiKLlubezAHDU5+9xz6gd3/NhG3txQCo6xlglmTS+oTGEQ==",
                "requires": {
                    "jake": "^10.8.5"
                }
            },
            "encodeurl": {
                "version": "1.0.2",
                "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
                "integrity": "sha512-TPJXq8JqFaVYm2CWmPvnP2Iyo4ZSM7/QKcSmuMLDObfpH5fi7RUGmd/rTDf+rut/saiDiQEeVTNgAmJEdAOx0w=="
            },
            "escape-html": {
                "version": "1.0.3",
                "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
                "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow=="
            },
            "etag": {
                "version": "1.8.1",
                "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
                "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg=="
            },
            "express": {
                "version": "4.18.1",
                "resolved": "https://registry.npmjs.org/express/-/express-4.18.1.tgz",
                "integrity": "sha512-zZBcOX9TfehHQhtupq57OF8lFZ3UZi08Y97dwFCkD8p9d/d2Y3M+ykKcwaMDEL+4qyUolgBDX6AblpR3fL212Q==",
                "requires": {
                    "accepts": "~1.3.8",
                    "array-flatten": "1.1.1",
                    "body-parser": "1.20.0",
                    "content-disposition": "0.5.4",
                    "content-type": "~1.0.4",
                    "cookie": "0.5.0",
                    "cookie-signature": "1.0.6",
                    "debug": "2.6.9",
                    "depd": "2.0.0",
                    "encodeurl": "~1.0.2",
                    "escape-html": "~1.0.3",
                    "etag": "~1.8.1",
                    "finalhandler": "1.2.0",
                    "fresh": "0.5.2",
                    "http-errors": "2.0.0",
                    "merge-descriptors": "1.0.1",
                    "methods": "~1.1.2",
                    "on-finished": "2.4.1",
                    "parseurl": "~1.3.3",
                    "path-to-regexp": "0.1.7",
                    "proxy-addr": "~2.0.7",
                    "qs": "6.10.3",
                    "range-parser": "~1.2.1",
                    "safe-buffer": "5.2.1",
                    "send": "0.18.0",
                    "serve-static": "1.15.0",
                    "setprototypeof": "1.2.0",
                    "statuses": "2.0.1",
                    "type-is": "~1.6.18",
                    "utils-merge": "1.0.1",
                    "vary": "~1.1.2"
                }
            },
            "filelist": {
                "version": "1.0.4",
                "resolved": "https://registry.npmjs.org/filelist/-/filelist-1.0.4.tgz",
                "integrity": "sha512-w1cEuf3S+DrLCQL7ET6kz+gmlJdbq9J7yXCSjK/OZCPA+qEN1WyF4ZAf0YYJa4/shHJra2t/d/r8SV4Ji+x+8Q==",
                "requires": {
                    "minimatch": "^5.0.1"
                },
                "dependencies": {
                    "brace-expansion": {
                        "version": "2.0.1",
                        "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
                        "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
                        "requires": {
                            "balanced-match": "^1.0.0"
                        }
                    },
                    "minimatch": {
                        "version": "5.1.0",
                        "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-5.1.0.tgz",
                        "integrity": "sha512-9TPBGGak4nHfGZsPBohm9AWg6NoT7QTCehS3BIJABslyZbzxfV78QM2Y6+i741OPZIafFAaiiEMh5OyIrJPgtg==",
                        "requires": {
                            "brace-expansion": "^2.0.1"
                        }
                    }
                }
            },
            "finalhandler": {
                "version": "1.2.0",
                "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.2.0.tgz",
                "integrity": "sha512-5uXcUVftlQMFnWC9qu/svkWv3GTd2PfUhK/3PLkYNAe7FbqJMt3515HaxE6eRL74GdsriiwujiawdaB1BpEISg==",
                "requires": {
                    "debug": "2.6.9",
                    "encodeurl": "~1.0.2",
                    "escape-html": "~1.0.3",
                    "on-finished": "2.4.1",
                    "parseurl": "~1.3.3",
                    "statuses": "2.0.1",
                    "unpipe": "~1.0.0"
                }
            },
            "forwarded": {
                "version": "0.2.0",
                "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
                "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow=="
            },
            "fresh": {
                "version": "0.5.2",
                "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
                "integrity": "sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q=="
            },
            "function-bind": {
                "version": "1.1.1",
                "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
                "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A=="
            },
            "get-intrinsic": {
                "version": "1.1.2",
                "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.1.2.tgz",
                "integrity": "sha512-Jfm3OyCxHh9DJyc28qGk+JmfkpO41A4XkneDSujN9MDXrm4oDKdHvndhZ2dN94+ERNfkYJWDclW6k2L/ZGHjXA==",
                "requires": {
                    "function-bind": "^1.1.1",
                    "has": "^1.0.3",
                    "has-symbols": "^1.0.3"
                }
            },
            "has": {
                "version": "1.0.3",
                "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
                "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
                "requires": {
                    "function-bind": "^1.1.1"
                }
            },
            "has-flag": {
                "version": "4.0.0",
                "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
            },
            "has-symbols": {
                "version": "1.0.3",
                "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.3.tgz",
                "integrity": "sha512-l3LCuF6MgDNwTDKkdYGEihYjt5pRPbEg46rtlmnSPlUbgmB8LOIrKJbYYFBSbnPaJexMKtiPO8hmeRjRz2Td+A=="
            },
            "http-errors": {
                "version": "2.0.0",
                "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz",
                "integrity": "sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==",
                "requires": {
                    "depd": "2.0.0",
                    "inherits": "2.0.4",
                    "setprototypeof": "1.2.0",
                    "statuses": "2.0.1",
                    "toidentifier": "1.0.1"
                }
            },
            "iconv-lite": {
                "version": "0.4.24",
                "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
                "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
                "requires": {
                    "safer-buffer": ">= 2.1.2 < 3"
                }
            },
            "ignore-by-default": {
                "version": "1.0.1",
                "resolved": "https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-1.0.1.tgz",
                "integrity": "sha512-Ius2VYcGNk7T90CppJqcIkS5ooHUZyIQK+ClZfMfMNFEF9VSE73Fq+906u/CWu92x4gzZMWOwfFYckPObzdEbA==",
                "dev": true
            },
            "inherits": {
                "version": "2.0.4",
                "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
                "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
            },
            "ipaddr.js": {
                "version": "1.9.1",
                "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
                "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g=="
            },
            "is-extglob": {
                "version": "2.1.1",
                "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
                "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
                "dev": true
            },
            "is-glob": {
                "version": "4.0.3",
                "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
                "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
                "dev": true,
                "requires": {
                    "is-extglob": "^2.1.1"
                }
            },
            "jake": {
                "version": "10.8.5",
                "resolved": "https://registry.npmjs.org/jake/-/jake-10.8.5.tgz",
                "integrity": "sha512-sVpxYeuAhWt0OTWITwT98oyV0GsXyMlXCF+3L1SuafBVUIr/uILGRB+NqwkzhgXKvoJpDIpQvqkUALgdmQsQxw==",
                "requires": {
                    "async": "^3.2.3",
                    "chalk": "^4.0.2",
                    "filelist": "^1.0.1",
                    "minimatch": "^3.0.4"
                }
            },
            "media-typer": {
                "version": "0.3.0",
                "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
                "integrity": "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ=="
            },
            "merge-descriptors": {
                "version": "1.0.1",
                "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
                "integrity": "sha512-cCi6g3/Zr1iqQi6ySbseM1Xvooa98N0w31jzUYrXPX2xqObmFGHJ0tQ5u74H3mVh7wLouTseZyYIq39g8cNp1w=="
            },
            "methods": {
                "version": "1.1.2",
                "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
                "integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w=="
            },
            "mime": {
                "version": "1.6.0",
                "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
                "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg=="
            },
            "mime-db": {
                "version": "1.52.0",
                "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
                "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg=="
            },
            "mime-types": {
                "version": "2.1.35",
                "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
                "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
                "requires": {
                    "mime-db": "1.52.0"
                }
            },
            "minimatch": {
                "version": "3.1.2",
                "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
                "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
                "requires": {
                    "brace-expansion": "^1.1.7"
                }
            },
            "ms": {
                "version": "2.0.0",
                "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A=="
            },
            "negotiator": {
                "version": "0.6.3",
                "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
                "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg=="
            },
            "nodemon": {
                "version": "2.0.19",
                "resolved": "https://registry.npmjs.org/nodemon/-/nodemon-2.0.19.tgz",
                "integrity": "sha512-4pv1f2bMDj0Eeg/MhGqxrtveeQ5/G/UVe9iO6uTZzjnRluSA4PVWf8CW99LUPwGB3eNIA7zUFoP77YuI7hOc0A==",
                "dev": true,
                "requires": {
                    "chokidar": "^3.5.2",
                    "debug": "^3.2.7",
                    "ignore-by-default": "^1.0.1",
                    "minimatch": "^3.0.4",
                    "pstree.remy": "^1.1.8",
                    "semver": "^5.7.1",
                    "simple-update-notifier": "^1.0.7",
                    "supports-color": "^5.5.0",
                    "touch": "^3.1.0",
                    "undefsafe": "^2.0.5"
                },
                "dependencies": {
                    "anymatch": {
                        "version": "3.1.2",
                        "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.2.tgz",
                        "integrity": "sha512-P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg==",
                        "dev": true,
                        "requires": {
                            "normalize-path": "^3.0.0",
                            "picomatch": "^2.0.4"
                        }
                    },
                    "binary-extensions": {
                        "version": "2.2.0",
                        "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.2.0.tgz",
                        "integrity": "sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==",
                        "dev": true
                    },
                    "braces": {
                        "version": "3.0.2",
                        "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
                        "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
                        "dev": true,
                        "requires": {
                            "fill-range": "^7.0.1"
                        }
                    },
                    "chokidar": {
                        "version": "3.5.3",
                        "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.5.3.tgz",
                        "integrity": "sha512-Dr3sfKRP6oTcjf2JmUmFJfeVMvXBdegxB0iVQ5eb2V10uFJUCAS8OByZdVAyVb8xXNz3GjjTgj9kLWsZTqE6kw==",
                        "dev": true,
                        "requires": {
                            "anymatch": "~3.1.2",
                            "braces": "~3.0.2",
                            "fsevents": "~2.3.2",
                            "glob-parent": "~5.1.2",
                            "is-binary-path": "~2.1.0",
                            "is-glob": "~4.0.1",
                            "normalize-path": "~3.0.0",
                            "readdirp": "~3.6.0"
                        }
                    },
                    "debug": {
                        "version": "3.2.7",
                        "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
                        "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
                        "dev": true,
                        "requires": {
                            "ms": "^2.1.1"
                        }
                    },
                    "fill-range": {
                        "version": "7.0.1",
                        "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
                        "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
                        "dev": true,
                        "requires": {
                            "to-regex-range": "^5.0.1"
                        }
                    },
                    "fsevents": {
                        "version": "2.3.2",
                        "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",
                        "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",
                        "dev": true,
                        "optional": true
                    },
                    "glob-parent": {
                        "version": "5.1.2",
                        "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
                        "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
                        "dev": true,
                        "requires": {
                            "is-glob": "^4.0.1"
                        }
                    },
                    "has-flag": {
                        "version": "3.0.0",
                        "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
                        "integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
                        "dev": true
                    },
                    "is-binary-path": {
                        "version": "2.1.0",
                        "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
                        "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
                        "dev": true,
                        "requires": {
                            "binary-extensions": "^2.0.0"
                        }
                    },
                    "is-number": {
                        "version": "7.0.0",
                        "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
                        "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
                        "dev": true
                    },
                    "ms": {
                        "version": "2.1.3",
                        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
                        "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
                        "dev": true
                    },
                    "readdirp": {
                        "version": "3.6.0",
                        "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
                        "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
                        "dev": true,
                        "requires": {
                            "picomatch": "^2.2.1"
                        }
                    },
                    "supports-color": {
                        "version": "5.5.0",
                        "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
                        "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
                        "dev": true,
                        "requires": {
                            "has-flag": "^3.0.0"
                        }
                    },
                    "to-regex-range": {
                        "version": "5.0.1",
                        "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
                        "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
                        "dev": true,
                        "requires": {
                            "is-number": "^7.0.0"
                        }
                    }
                }
            },
            "nopt": {
                "version": "1.0.10",
                "resolved": "https://registry.npmjs.org/nopt/-/nopt-1.0.10.tgz",
                "integrity": "sha512-NWmpvLSqUrgrAC9HCuxEvb+PSloHpqVu+FqcO4eeF2h5qYRhA7ev6KvelyQAKtegUbC6RypJnlEOhd8vloNKYg==",
                "dev": true,
                "requires": {
                    "abbrev": "1"
                }
            },
            "normalize-path": {
                "version": "3.0.0",
                "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
                "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
                "dev": true
            },
            "object-inspect": {
                "version": "1.12.2",
                "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.12.2.tgz",
                "integrity": "sha512-z+cPxW0QGUp0mcqcsgQyLVRDoXFQbXOwBaqyF7VIgI4TWNQsDHrBpUQslRmIfAoYWdYzs6UlKJtB2XJpTaNSpQ=="
            },
            "on-finished": {
                "version": "2.4.1",
                "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
                "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
                "requires": {
                    "ee-first": "1.1.1"
                }
            },
            "parseurl": {
                "version": "1.3.3",
                "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
                "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ=="
            },
            "path-to-regexp": {
                "version": "0.1.7",
                "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
                "integrity": "sha512-5DFkuoqlv1uYQKxy8omFBeJPQcdoE07Kv2sferDCrAq1ohOU+MSDswDIbnx3YAM60qIOnYa53wBhXW0EbMonrQ=="
            },
            "picomatch": {
                "version": "2.3.1",
                "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
                "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
                "dev": true
            },
            "proxy-addr": {
                "version": "2.0.7",
                "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
                "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
                "requires": {
                    "forwarded": "0.2.0",
                    "ipaddr.js": "1.9.1"
                }
            },
            "pstree.remy": {
                "version": "1.1.8",
                "resolved": "https://registry.npmjs.org/pstree.remy/-/pstree.remy-1.1.8.tgz",
                "integrity": "sha512-77DZwxQmxKnu3aR542U+X8FypNzbfJ+C5XQDk3uWjWxn6151aIMGthWYRXTqT1E5oJvg+ljaa2OJi+VfvCOQ8w==",
                "dev": true
            },
            "qs": {
                "version": "6.10.3",
                "resolved": "https://registry.npmjs.org/qs/-/qs-6.10.3.tgz",
                "integrity": "sha512-wr7M2E0OFRfIfJZjKGieI8lBKb7fRCH4Fv5KNPEs7gJ8jadvotdsS08PzOKR7opXhZ/Xkjtt3WF9g38drmyRqQ==",
                "requires": {
                    "side-channel": "^1.0.4"
                }
            },
            "range-parser": {
                "version": "1.2.1",
                "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
                "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg=="
            },
            "raw-body": {
                "version": "2.5.1",
                "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.1.tgz",
                "integrity": "sha512-qqJBtEyVgS0ZmPGdCFPWJ3FreoqvG4MVQln/kCgF7Olq95IbOp0/BWyMwbdtn4VTvkM8Y7khCQ2Xgk/tcrCXig==",
                "requires": {
                    "bytes": "3.1.2",
                    "http-errors": "2.0.0",
                    "iconv-lite": "0.4.24",
                    "unpipe": "1.0.0"
                }
            },
            "safe-buffer": {
                "version": "5.2.1",
                "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
                "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ=="
            },
            "safer-buffer": {
                "version": "2.1.2",
                "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
                "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
            },
            "semver": {
                "version": "5.7.1",
                "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
                "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
                "dev": true
            },
            "send": {
                "version": "0.18.0",
                "resolved": "https://registry.npmjs.org/send/-/send-0.18.0.tgz",
                "integrity": "sha512-qqWzuOjSFOuqPjFe4NOsMLafToQQwBSOEpS+FwEt3A2V3vKubTquT3vmLTQpFgMXp8AlFWFuP1qKaJZOtPpVXg==",
                "requires": {
                    "debug": "2.6.9",
                    "depd": "2.0.0",
                    "destroy": "1.2.0",
                    "encodeurl": "~1.0.2",
                    "escape-html": "~1.0.3",
                    "etag": "~1.8.1",
                    "fresh": "0.5.2",
                    "http-errors": "2.0.0",
                    "mime": "1.6.0",
                    "ms": "2.1.3",
                    "on-finished": "2.4.1",
                    "range-parser": "~1.2.1",
                    "statuses": "2.0.1"
                },
                "dependencies": {
                    "ms": {
                        "version": "2.1.3",
                        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
                        "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
                    }
                }
            },
            "serve-static": {
                "version": "1.15.0",
                "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.15.0.tgz",
                "integrity": "sha512-XGuRDNjXUijsUL0vl6nSD7cwURuzEgglbOaFuZM9g3kwDXOWVTck0jLzjPzGD+TazWbboZYu52/9/XPdUgne9g==",
                "requires": {
                    "encodeurl": "~1.0.2",
                    "escape-html": "~1.0.3",
                    "parseurl": "~1.3.3",
                    "send": "0.18.0"
                }
            },
            "setprototypeof": {
                "version": "1.2.0",
                "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
                "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw=="
            },
            "side-channel": {
                "version": "1.0.4",
                "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.4.tgz",
                "integrity": "sha512-q5XPytqFEIKHkGdiMIrY10mvLRvnQh42/+GoBlFW3b2LXLE2xxJpZFdm94we0BaoV3RwJyGqg5wS7epxTv0Zvw==",
                "requires": {
                    "call-bind": "^1.0.0",
                    "get-intrinsic": "^1.0.2",
                    "object-inspect": "^1.9.0"
                }
            },
            "simple-update-notifier": {
                "version": "1.0.7",
                "resolved": "https://registry.npmjs.org/simple-update-notifier/-/simple-update-notifier-1.0.7.tgz",
                "integrity": "sha512-BBKgR84BJQJm6WjWFMHgLVuo61FBDSj1z/xSFUIozqO6wO7ii0JxCqlIud7Enr/+LhlbNI0whErq96P2qHNWew==",
                "dev": true,
                "requires": {
                    "semver": "~7.0.0"
                },
                "dependencies": {
                    "semver": {
                        "version": "7.0.0",
                        "resolved": "https://registry.npmjs.org/semver/-/semver-7.0.0.tgz",
                        "integrity": "sha512-+GB6zVA9LWh6zovYQLALHwv5rb2PHGlJi3lfiqIHxR0uuwCgefcOJc59v9fv1w8GbStwxuuqqAjI9NMAOOgq1A==",
                        "dev": true
                    }
                }
            },
            "statuses": {
                "version": "2.0.1",
                "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",
                "integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ=="
            },
            "supports-color": {
                "version": "7.2.0",
                "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                "requires": {
                    "has-flag": "^4.0.0"
                }
            },
            "toidentifier": {
                "version": "1.0.1",
                "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
                "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA=="
            },
            "touch": {
                "version": "3.1.0",
                "resolved": "https://registry.npmjs.org/touch/-/touch-3.1.0.tgz",
                "integrity": "sha512-WBx8Uy5TLtOSRtIq+M03/sKDrXCLHxwDcquSP2c43Le03/9serjQBIztjRz6FkJez9D/hleyAXTBGLwwZUw9lA==",
                "dev": true,
                "requires": {
                    "nopt": "~1.0.10"
                }
            },
            "type-is": {
                "version": "1.6.18",
                "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
                "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
                "requires": {
                    "media-typer": "0.3.0",
                    "mime-types": "~2.1.24"
                }
            },
            "undefsafe": {
                "version": "2.0.5",
                "resolved": "https://registry.npmjs.org/undefsafe/-/undefsafe-2.0.5.tgz",
                "integrity": "sha512-WxONCrssBM8TSPRqN5EmsjVrsv4A8X12J4ArBiiayv3DyyG3ZlIg6yysuuSYdZsVz3TKcTg2fd//Ujd4CHV1iA==",
                "dev": true
            },
            "unpipe": {
                "version": "1.0.0",
                "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
                "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ=="
            },
            "utils-merge": {
                "version": "1.0.1",
                "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
                "integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA=="
            },
            "vary": {
                "version": "1.1.2",
                "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
                "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg=="
            }
        }
    }

    