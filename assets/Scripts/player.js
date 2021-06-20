cc.Class({
    extends: cc.Component,

    properties: {
    },
    onLoad: function () {
        this.node.on('touchmove', function(event){
            var delta= event.touch.getDelta();

            this.x +=delta.x;
        },this.node);

    },


   
});