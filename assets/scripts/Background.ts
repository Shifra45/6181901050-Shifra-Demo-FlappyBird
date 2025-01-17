import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Background')
export class Background extends Component {
    frameCount: 0;
    secondCount: 0;

    private wBackground:number = 288;
    start() {

    }

    update(deltaTime: number) {
        // console.log(deltaTime);
        this.node.translate(new Vec3(-10*deltaTime,0,0));
        if(this.node.position.x<=(this.wBackground/2+this.wBackground*-1)){
            this.node.translate(new Vec3(this.wBackground,0,0));
        }
        // this.frameCount++;
        // if(this.frameCount%10==0){
        // }
        // this.secondCount += deltaTime;
        // if(this.secondCount>=0.5){
        //     this.secondCount-=0.5;
        // }
    }
}


