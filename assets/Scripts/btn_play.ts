const {ccclass, property} = cc._decorator;

@ccclass
export default class btn_play extends cc.Component {

     onLoad () {
         this.node.on('touchstart', function(e){
             cc.director.loadScene('Level1');
         });
     }



    // update (dt) {}
}
