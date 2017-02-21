# Front end workflow
![Build Status](https://img.shields.io/travis/rust-lang/rust.svg?style=flat-square)
![Npm version] (https://img.shields.io/npm/v/npm.svg?style=flat-square)
![MIT License] (https://img.shields.io/npm/l/express.svg?style=flat-square)

> Easy to extend front end workflow created with [gulp] (http://gulpjs.com/)

## File tree

```
src
 |
 | - index.html
 | - css
      |
      | - main.css (compiled less)
      | - less
           |
           | - imports.less (import less files here)
           | - *.less (website styles)
 |     
 | - js
     |
     | - main.js
     | - libs
          |
          | - jquery.min.css
      
 |
 | - imgs
     |
     | - *.jpg | png | gif | svg

dist
 |
 | - index.html
 | - css
      |
      | - main.css (minified css)
 |     
 | - js
     |
     | - main.js (minified js)
     | - libs
          |
          | - jquery.min.css
      
 |
 | - imgs
     |
     | - *.jpg | png | gif | svg (minified images)

```

## Installation

```
$ git clone https://github.com/Rodrigo96/Front-End-Workflow.git YOUR-SITE-NAME
$ npm install
```

## Usage

```
$ gulp server
```
Start a server at http://localhost:3000/ that watches for file changes and reloads the page accordingly.
Start BrowserSync server at http://localhost:3001/

```
$ gulp js
```
Lint main.js file.

```
$ gulp css
```
Lint, compile and prefix styles.

```
$ gulp
```
Development build.

```
$ gulp dist
```
Creates production ready code in dist folder.

The MIT License (MIT)
=====================

Copyright © 2017 Rodrigo Alves

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

