import { _decorator, Collider2D, Component, Contact2DType, EventTouch, Input, input, IPhysics2DContact, Node, Vec3 } from 'cc';
import { ResScreen } from './ResScreen';
const { ccclass, property } = _decorator;

@ccclass('Bird')
export class Bird extends Component {
    private vy:number = 0;
    private gravity:number = 500;

    start() {
        input.on(Input.EventType.TOUCH_START,this.onTouchStart,this);
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // will be called once when two colliders begin to contact
        // console.log('onBeginContact');
        // alert('game over!');
        ResScreen.Instance.node.active = true;
    }

    // onTouchStart(event: EventTouch) {
    //     const target = event.target as Node;    
    //     if (target?.name == 'LeftTouch') {
    //         this.jumpByStep(1);
    //     } else {
    //         this.jumpByStep(2);
    //     }
    // }

    onTouchStart(event: EventTouch){
        console.log("touch start");
        // this.node.translate(new Vec3(0,50,0));
        this.vy = 200;
    }

    update(deltaTime: number) {
        this.node.translate(new Vec3(0, this.vy*deltaTime,0));
        this.vy -= this.gravity*deltaTime;
    }
}

