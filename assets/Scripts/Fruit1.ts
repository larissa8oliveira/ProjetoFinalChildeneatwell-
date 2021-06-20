const {ccclass, property} = cc._decorator;

@ccclass
export default class Fruit1 extends cc.Component {

    onBeginContact(contact, selfCollider, otherCollider) {
        if ((otherCollider.node.name) == ('player')){
            this.node.parent.getComponent('game').pointf();
        }
        this.node.destroy();
        this.node.parent.getComponent('game').spawnNewFruit();
    }
    
}