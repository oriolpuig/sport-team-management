/* eslint class-methods-use-this:
["error", { "exceptMethods": ["sayHello"] }] */

class HelloCtrl {
  sayHello(req, res) {
    res.json({ message: 'Hello world!' });
  }
}

export default new HelloCtrl();
