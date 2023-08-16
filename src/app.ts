function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function AddProperty() {
    return function (constructor: Function) {
      console.log("AddProperty");
constructor.prototype.modify = true;
  };
}

@Logger("LOGING - CONTROLLER")
@AddProperty()
class Controller {
  public id = 1;
    public modify = false;
}

const controller = new Controller();

console.log('Is modify?', controller.modify);