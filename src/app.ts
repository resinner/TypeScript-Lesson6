// function Logger(logString: string) {
//     return function (constructor: Function) {
//         console.log(logString);
//         console.log(constructor);
//     }
// }

// function AddProperty() {
//     return function (constructor: Function) {
//       console.log("AddProperty");
// constructor.prototype.modify = true;
//   };
// }

// @Logger("LOGING - CONTROLLER")
// @AddProperty()
// class Controller {
//   public id = 1;
//     public modify = false;
// }

// const controller = new Controller();

// console.log('Is modify?', controller.modify);


//================================================================


interface IDecoration {
    parent: string;
    template: string;
}

function ControllerDecoration(config: IDecoration) {
    return function <T extends { new(...arg: any[]): { content: string } }>(originalConstructor: T) {
        
        return class extends originalConstructor {
            private element: HTMLElement;
            private parent: HTMLElement;
            constructor(...args: any[]) {
                super(...args);
                this.parent = document.getElementById(config.parent)!;
                this.element = document.createElement(config.template);

                this.element.innerHTML = this.content;
                
                this.parent.appendChild(this.element);
                
            }
            //================================================================
            // const current = new constructor();

            // const getParent = document.getElementById(config.parent)!;
            // const createElement = document.createElement(config.template);

            // createElement.innerHTML = current.content;

            // constructor.prototype.element = createElement;
            // constructor.prototype.parent = getParent;
        
            // getParent.appendChild(createElement);
            
            //================================================================
        }
    }
}

@ControllerDecoration({
    parent: 'app',
    template: 'H1',
})
class Controller {
  public content = "My content";
    }

const controller1 = new Controller();
const controller2 = new Controller();
const controller3 = new Controller();
            