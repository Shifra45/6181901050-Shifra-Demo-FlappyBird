import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ResScreen')
export class ResScreen extends Component {
    static Instance:ResScreen;

    start() {
        ResScreen.Instance = this;
        this.node.active = false;
    }

    update(deltaTime: number) {
        
    }

    doRestart(event, customData){
        director.loadScene("scene")
    }

}


