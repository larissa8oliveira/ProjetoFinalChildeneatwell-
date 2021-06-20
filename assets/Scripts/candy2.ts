const {ccclass, property} = cc._decorator;

@ccclass
export default class candy2 extends cc.Component {

    onBeginContact(contact, selfCollider, otherCollider) {
        if ((otherCollider.node.name) == ('player2')){
            this.node.parent.getComponent('gametwo').pointc();
        }
        this.node.destroy();
        this.node.parent.getComponent('gametwo').spawnNewCandy();
    }
    
}