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

The previous command will show the following result:

```yaml
> carl pokeapi.co/api/v2/pokemon/1
Response Status Code: 200
Content-Type: json
Content-Encoding: gzip
Showing a structured version of the body response:
{ abilities:
   [ { ability: [Object], is_hidden: true, slot: 3 },
     { ability: [Object], is_hidden: false, slot: 1 } ],
  base_experience: 64,
```

It even works with HTML pages:

```yaml
> carl github.com
Response Status Code: 200
Content-Type: html
Content-Encoding: gzip
Showing a structured version of the body response:
{ title: 'The world’s leading software development platform · GitHub',
  description: 'GitHub is where people build software. More than 31 million people use GitHub to discover, fork, and contribute to over 100 million projects.',
  language: 'en',
  author: undefined,
  publisher: 'GitHub',
  url: 'https://github.com' }
```

Or, alternatively, use the command prompt:

```
$ carl
```

```yaml
> carl
? Write or paste the url you want to use https://news.ycombinator.com/
Response Status Code: 200
Content-Type: html
Content-Encoding: gzip
Showing a structured version of the body response:
{ title: 'Hacker News',
  description: undefined,
  language: false,
  author: undefined,
  publisher: undefined,
  url: undefined }
```

## Features

- You can include the protocol in the url, or not. If you don't, carl will use **HTTPS** by default
- The currently supported Content-Types are `text/html` and `application/json`.
- For HTML pages, it returns structured data instead of the HTML code.

## Are you missing something?

Feel free to [open an issue](https://github.com/d4nidev/carl/issues/new) or even opening a [pull request](https://github.com/d4nidev/carl/fork).
