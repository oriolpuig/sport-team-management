
class HelloCtrl {
    sayHello(req, res, next) {
        res.json({ message: 'Hello world!' });
    }
}

export default new HelloCtrl();