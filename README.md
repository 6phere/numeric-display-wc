# Sixphere Polaris - Numeric Display Web Component


[![Version][version-badge]][version-url]
[![Node version][node-version-badge]][node-version-url]
[![MIT License][mit-license-badge]][mit-license-url]

[![Downloads][downloads-badge]][downloads-url]
[![Total downloads][total-downloads-badge]][downloads-url]

[![Packagephobia][packagephobia-badge]][packagephobia-url]
[![Bundlephobia][bundlephobia-badge]][bundlephobia-url]

------------------------------------------------------------------
![Sixphere][docs/imgs/sixphere_logo.jpeg]

Injectable custom element to display a number. It's based on [Sixphere LitElement](https://www.npmjs.com/package/@sixphere/lit-element). You can use [Sixphere DIWrapper](https://www.npmjs.com/package/@sixphere/diwrapper) library to inject a service.

![Polaris Numeric Display][docs/imgs/numeric-display-wc.png]

## Install
```bash
npm install '@sixphere-polaris/numeric-display-wc' --save
```

### Install dependencies
```bash
npm install '@sixphere/lit-element' --save
npm install 'lit-element' --save
npm install 'lit-html' --save
```

This package uses `@pika/web` to install the dependencies. So, add the following lines to your `package.json` file:
```javascript
"@pika/web": {
    "webDependencies": [
      "@sixphere/lit-element",
      "lit-element",
      "lit-html"
    ]
}
```

In order to install this dependencies you can follow the [install steps](https://github.com/pikapkg/web#quickstart) from `@pika/web` docs.


## HTML API

### Attributes

| Attribute | Values                                                 | Description                                                                               |
|-----------|--------------------------------------------------------|-------------------------------------------------------------------------------------------|
| title     | [Optional] String                                      | Title displayed below the indicator.                                                      |
| value     | [Optional] Number                                      | Data shown in the indicator. You must inject a service if this attribute is not provided. |
| min       | [Optional] Number - default: `-Infinity`               | Low boundary.                                                                             |
| max       | [Optional] Number - default: `+Infinity`               | High boundary.                                                                            |
| status    | [Optional] String (`success` \| `warning` \| `danger`) | Display color based on bootstrap colors.                                                  |

## How to use?

### Register as a custom element
```javascript
import {PolarisNumericDisplay} from '/web_modules/@sixphere-polaris/wcs/numeric-display.js'

CustomElements.define(PolarisNumericDisplay.is, PolarisNumericDisplay)
```

### Inject a service using DIWrapper
`PolarisNumericDisplay` implements the API proposed by [DIWrapper](https://www.npmjs.com/package/@sixphere/diwrapper) library. You can use DIWrapper to inject a service which implements an asynchronous `getData` method. `getData` method must returns an object with the following structure:
```js
{
    data: <Number>
}
```

Injection example:
```javascript
customElements.define(
    `${PolarisNumericDisplay.is}-injected`, 
    DIWrapper.for(PolarisNumericDisplay).bind([
        {
            constructor: MyService,
            args: []
        }
    ])
)
```

### HTML element

#### Display a title

```html
<polaris-numeric-display title="MyDisplay"></polaris-numeric-display>
```

#### Set a range
```html
<polaris-numeric-display min="2" max="8" value="4"></polaris-numeric-display>
```

#### Color it
```html
<polaris-numeric-display value="5" status="danger"></polaris-numeric-display>
```

# Author

[Sixphere](http://www.sixphere.com "Sixphere") is not only a group of experienced professionals, that keep a huge amount of knowledge, take care about what and how they do their job. They solve their partner problems in an agile way and are aware of their customer needs through emotional intelligence connections.

Sixphere is a simpler way of understanding IT services, based on a strong and well balanced mix-ture of principles.


# License
[MIT License][mit-license-url] © 2019 Sixphere


<!-- References -->
[typescript-url]: https://github.com/Microsoft/TypeScript
[java-url]: https://www.java.com/en/download
[nodejs-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[node-releases-url]: https://nodejs.org/en/download/releases
[vscode-url]: https://code.visualstudio.com
[vscode-lit-html-url]: https://github.com/mjbvz/vscode-lit-html
[web-component-tester-url]: https://github.com/Polymer/tools/tree/master/packages/web-component-tester
[lit-element-url]: https://github.com/Polymer/lit-element

<!-- Badges -->
<!-- [follow-me-badge]: https://flat.badgen.net/twitter/follow/Fernando Jiménez?icon=twitter -->

[version-badge]: https://flat.badgen.net/npm/v/@sixphere-polaris/numeric-display-wc?icon=npm
[lit-element-version-badge]: https://flat.badgen.net/npm/v/lit-element/latest?icon=npm&label=lit-element
[node-version-badge]: https://flat.badgen.net/npm/node/@sixphere-polaris/numeric-display-wc
[mit-license-badge]: https://flat.badgen.net/npm/license/@sixphere-polaris/numeric-display-wc

[downloads-badge]: https://flat.badgen.net/npm/dm/@sixphere-polaris/numeric-display-wc
[total-downloads-badge]: https://flat.badgen.net/npm/dt/@sixphere-polaris/numeric-display-wc?label=total%20downloads
[packagephobia-badge]: https://flat.badgen.net/packagephobia/install/@sixphere-polaris/numeric-display-wc
[bundlephobia-badge]: https://flat.badgen.net/bundlephobia/minzip/@sixphere-polaris/numeric-display-wc

<!-- Links -->
<!-- [follow-me-url]: https://twitter.com/Fernando Jiménez?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=diwrapper -->

[version-url]: https://www.npmjs.com/package/@sixphere-polaris/numeric-display-wc
[node-version-url]: https://nodejs.org/en/download
[mit-license-url]: /LICENSE

[downloads-url]: https://www.npmtrends.com/@sixphere-polaris/numeric-display-wc
[packagephobia-url]: https://packagephobia.now.sh/result?p=@sixphere-polaris/numeric-display-wc
[bundlephobia-url]: https://bundlephobia.com/result?p=@sixphere-polaris/numeric-display-wc

[circleci-url]: https://circleci.com/gh//diwrapper/tree/master
[daviddm-url]: https://david-dm.org//diwrapper

[codebeat-url]: https://codebeat.co/projects/<codebeat_path>
[codacy-url]: https://www.codacy.com/app/<codacy_path>
[lgtm-url]: https://lgtm.com/projects/g/<lgtm_path>