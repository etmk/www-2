---
title: 'Usage'
---

For using MQL, you need to provide at least a target [url](/docs/api/api-parameters/url)

```js
const mql = require('@microlink/mql')

const { status, data, response } = await mql('https://microlink.io')
```

It will returns a `object` with the following properties:
  
  - `status`: The [status](http://localhost:8000/docs/api/api-basics/format#status) associated with the response.
  - `data`: The [data](http://localhost:8000/docs/api/api-basics/format#data) response from the API. 
  - `response`: The Node.js response object.

If something does not go as expected (thas means API returns a [status](/docs/api/api-basics/format#status) different to  `success`) it will throws a `MicrolinkError`

```js
const mql = require('@microlink/mql')

// The library exposes `MicrolinkError` constructor
const { MicrolinkError } = mql

;(async () => {
  try {
    mql('https://kikobeats.com', {
      screenshot: true,
      waitFor: 30000
    })
  } catch (error) {
    console.log(error instanceof MicrolinkError) // => true
    console.log(error.name) // => RequestError
    console.log(error.hostname) // => api.microlink.io
    console.log(error.status) // => fail
    console.log(error.url) // => 'https://api.microlink.io/?url=https%3A%2F%2Fkikobeats.com&screenshot=true&video=true&waitFor=40000&force=true'
    console.log(error.code) // => EFAILED
    console.log(error.message) // => EFAILED, Request timed out
    console.log(error.statusCode) // => 500
  }
})()
```

<Figcaption children="A `MicrolinkError` always have associated `status`, `message` and `code`." />

## API

```js

const mql = require('@microlink/mql')

const { status, data,response } = mql(url, [options])
```

### url

**Required**<br/>

Type: `string`

The target URL for getting content.

### options

Type: `object`<br/>

You can pass any API Parameters from [Microlink API](/docs/api/getting-started/overview) as option

```js
const { status, data, response } = await mql('https://kikobeats.com', {
  screenshot: 'iPad',
  palette: true,
  waitFor: 3000
})

console.log(`My screenshot at ${data.screenshot.url}`)
```

Additionally, you can setup:

#### apiKey

Type: `string`<br/>
Default: `undefined`

The API Key used for [authenticating](/docs/api/api-basics/authentication) your requests as `x-api-key` header.

When the `apiKey` is provided, the `pro.microlink.io` endpoint will used.

#### cache

Type: `string`<br/>
Default: `undefined`

You can enable cache for saving API calls if they have been previously done

```js
const mql = require('@microlink/mql')
const cache = new Map()

;(async () => {
  let data

  data = await mql('https://kikobeats.com', { cache })
  console.log(data.response.fromCache)
  // => false

  data = await mql('https://kikobeats.com', { cache })
  console.log(data.response.fromCache)
  // => true
})()
```

It's just available on the Node.js bundle.

#### retry

Type: `number`<br/>
Default: `3`

See [got#retry](https://www.npmjs.com/package/got#retry).

#### timeout

Type: `number`<br/>
Default: `25000`

See [got#timeout](https://www.npmjs.com/package/got#timeout).


