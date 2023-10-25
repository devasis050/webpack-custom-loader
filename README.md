# webpack-custom-loader
 A quick start on webpack custom loader

https://kettanaito.com/blog/writing-custom-webpack-loader

https://webpack.js.org/contribute/writing-a-loader/

# loader intro

A loader exports a function that is called by web-pack.

***Note: It should not be an arrow function as the web-pack context information is available in `this`***


When we use a single loader for a resource, the loader is called with one string containing content of the file. The loader is expected to give back one or two values. The first value is a resulting JavaScript code as string or buffer
https://webpack.js.org/contribute/writing-a-loader/#simple-usage

# Custom css loader

In this example we have implemented a simple loader that loads css from scss file to js file.

Our objective is to to change the content of the file to look how a js code would look like.

What we aim to achieve; for scss files we convert the content to an object and export from the file.
The exported object then used as style object in caller js.

e.g.
Content of our scss file
`app.scss`

```
.box {
    border: solid red 10px;
    margin: 20px;
    padding: 10px;
}
```
In our loader, we get the content as string.

We first convert the string to object with help of a npm libray (https://www.npmjs.com/package/css-to-object).

This will convert the string to object
```
{
    .box: {
        border: 'solid red 10px',
        margin: '20px'
        padding: '10px'
    }
}
```
with minor tweak we change the key from '.box' to 'box'

Now we need to export this object. So updated content 

```
module.exports = {
    box: {
        border: 'solid red 10px',
        margin: '20px'
        padding: '10px'
    }
}
```

As we need to return as string, we return the above js code as string from our loader.

In the caller, we use as we use anyother js object

```
import styles from './app.scss'

<div style={styles.box}>
    I am from react
</div>
```


