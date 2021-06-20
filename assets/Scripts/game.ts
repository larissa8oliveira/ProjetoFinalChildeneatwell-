const {ccclass, property} = cc._decorator;

@ccclass
export default class game extends cc.Component {
    
    @property (cc.Prefab)       
    FruitPrefab: cc.Prefab = null;
    @property (cc.Prefab)
    FruitPrefab1: cc.Prefab = null; 
    @property (cc.Prefab)    
    @property (cc.Prefab)       
    FruitPrefab2: cc.Prefab = null;


    @property (cc.Prefab)   
    CandyPrefab1: cc.Prefab = null;
    @property (cc.Prefab)   
    CandyPrefab2: cc.Prefab = null;
    @property(cc.Label)
    
    scoreFruit:cc.Label=null;
    @property(cc.Label)
    scoreCandy:cc.Label=null;
    
    @property
    xMin:  int  = -656;
    @property 
    xMax: int = 200;
    @property 
    yMin: int =300;
    @property
    yMax: int = 312; 
    @property
    scoref: int = 0; 
    @property
    scorec: int = 0; 

     onLoad () 
    {
        
        var game = cc.director.getPhysicsManager();
        game.enabled=true;
  
        this.spawnNewFruit();
        this.spawnNewCandy();

    }

     spawnNewFruit() {
        var fruits = [this.FruitPrefab,this.FruitPrefab1,this.FruitPrefab2];
        var random = Math.floor(Math.random()*fruits.length);
        var newfruit = cc.instantiate(fruits[random]);
         var posx = this.xMin + Math.random() * (this.xMax - this.xMin);
         var posy = this.yMin + Math.random() * (this.yMax - this.yMin);
        newfruit.setPosition(posx,posy);
        this.node.addChild(newfruit);
            
        
     
   
    }
    spawnNewCandy() {
        var candies = [this.CandyPrefab1,this.CandyPrefab2];
        var random = Math.floor(Math.random()*candies.length);
        var newcandy = cc.instantiate(candies[random]);
         var posx = this.xMin + Math.random() * (this.xMax - this.xMin);
         var posy = this.yMin + Math.random() * (this.yMax - this.yMin);
        newcandy.setPosition(posx,posy);
        this.node.addChild(newcandy);
        
    }
    pointf (){
        this.scoref += 1;
        this.scoreFruit.string = 'FRUTAS : ' + this.scoref.toString();
        if (this.scoref>=10){
            cc.director.loadScene('changelevels');
        }
    }
    pointc (){
        this.scorec += 1;
        this.scoreCandy.string = 'DOCES : ' + this.scorec.toString();
        if (this.scorec==3){
            cc.director.loadScene('gameover');
        }
    }

}