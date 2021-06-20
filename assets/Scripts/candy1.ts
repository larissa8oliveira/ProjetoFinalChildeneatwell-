const {ccclass, property} = cc._decorator;

@ccclass
export default class candy1 extends cc.Component {

    onBeginContact(contact, selfCollider, otherCollider) {
        if ((otherCollider.node.name) == ('player')){
            this.node.parent.getComponent('game').pointc();
        }
        this.node.destroy();
        this.node.parent.getComponent('game').spawnNewCandy();
    }
    
}