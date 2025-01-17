import { _decorator, Component, Node, randomRangeInt, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Pipe')
export class Pipe extends Component {
    private wBackground:number = 288;
    private wPipa:number = 80;
    
    start() {
        this.node.translate(new Vec3(0, randomRangeInt(-100,100),0));
    }

    update(deltaTime: number) {
        this.node.translate(new Vec3(-3+deltaTime,0,0));
        if(this.node.position.x<=-196){
            if(this.node.position.y<0){
                this.node.translate(new Vec3(this.wBackground+this.wPipa,randomRangeInt(0,100),0));
            }else{
                this.node.translate(new Vec3(this.wBackground+this.wPipa,randomRangeInt(-100,0),0));
            }
        }
    }
}


