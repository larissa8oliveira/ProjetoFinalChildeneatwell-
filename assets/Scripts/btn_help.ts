const {ccclass, property} = cc._decorator;

@ccclass
export default class btn_help extends cc.Component {

     onLoad () {
         this.node.on('touchstart', function(e){
             cc.director.loadScene('help');
         });
     }



    // update (dt) {}
}
