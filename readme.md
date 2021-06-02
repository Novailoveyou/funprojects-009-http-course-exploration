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

`res.send()` would always try to figure out the correct Content-Type the best it can

`res.send('Hello from Express')` would be html

`res.send({"msg": "Hello From Express"})` or `res.send({msg: 'Hello From Express'})` would be json

However it's recommended to use `.json()` to send json like so `res.json({ msg: 'Hello From Express' })` use `.json()`

`res.send(req.header('host'))` to send host

`res.send(req.header('user-agent'))` to send user agent

`res.send(req.rawHeaders)` to send all headers

`res.send(req.body)` access data on a server from a client

`res.send(req.header('Content-Type'))` to send Content-Type header