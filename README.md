# carl

A Node.JS replacement for curl

## How to install

```
$ npm install -g carl-cli
```

## How to use

You can just use the URL as an argument to carl:

```
$ carl pokeapi.co/api/v2/pokemon/1
```

Or, alternatively, use the command prompt:

```
$ carl
```

## Features

- You can include the protocol in the url, or not. If you don't, carl will use _HTTPS_ by default
- The currently supported Content-Types are `text/html` and `application/json`.
- For HTML pages, it returns structured data instead of the HTML code.

## Are you missing something?

Feel free to [open an issue](https://github.com/d4nidev/carl/issues/new) or even opening a [pull request](https://github.com/d4nidev/carl/fork).
