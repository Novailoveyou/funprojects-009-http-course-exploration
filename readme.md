# HTTP Crash Course & Exploration

## About

This is me following Brad Traversy's [youtube video](https://youtu.be/iYM2zFP3Zn0)

Year 2019

## CLI

### To get started

Init package.json

```zsh
npm init -y
```

Install dependencies

```zsh
npm i express && npm i nodemon -D
```

## Things I learned

### Multiple responses

When having multiple responses make sure to put a `return` on before of all of them but the last one. You don't need a `return` only if it's a last one response

### Auto Content-Type detection

```js
res.send()
```

would always try to figure out the correct Content-Type the best it can

### HTML Content-Type detection

```js
res.send('Hello from Express')
```

would be html

### JSON Content-Type detection

```js
res.send({"msg": "Hello From Express"})
```

or

```js
res.send({msg: 'Hello From Express'})
```

would be json

### JSON Content-Type best practices

However it's recommended to use `.json()` to send json like so 

```js
res.json({ msg: 'Hello From Express' })
```

### Sending host header

```js
res.send(req.header('host'))
```

### Sending user agent

```js
res.send(req.header('user-agent'))
```

### Sending all headers

```js
res.send(req.rawHeaders)
```

### Accessing data on a server from a client

```js
res.send(req.body)
```

### Sending Content-Type header

```js
res.send(req.header('Content-Type'))
```
