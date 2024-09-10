// TODO: Define SuperHuman, SuperHero, and SuperVillain classes here\
//paraent class
//superhuman class
//constructor function
function SuperHuman( name, powerLevel ){
   
   this.name = name;
   this.powerLevel = powerLevel;
}

//superhero class
//child class
function SuperHero (name,alias,powerLevel){
   //The child class calls the parent class' constructor function from the child's constructor function using the call() meth
   SuperHuman.call(this,name,powerLevel)
   //child constructor
   this.alias = alias

}
//The Object.create() method copies the parent's prototype, and the new copy is assigned to the child's prototype to give the child class the same functionality as the parent class.
//The child class' prototype.constructor is explicitly set to the child's constructor function.
SuperHero.prototype = Object.create(SuperHuman.prototype);
SuperHero.prototype.constructor = SuperHero;

//superhero method check for who have more power
SuperHero.prototype.battle = function (villain) {
   return this.powerLevel >= villain.powerLevel;
};


//supervillain class
//child class
function SuperVillain(name,alias,powerLevel){
   SuperHuman.call(this, name, powerLevel)
   this.alias = alias
}
//The Object.create() method copies the parent's prototype, and the new copy is assigned to the child's prototype to give the child class the same functionality as the parent class.
//The child class' prototype.constructor is explicitly set to the child's constructor function.
SuperVillain.prototype = Object.create(SuperHuman.prototype);
SuperVillain.prototype.constructor = SuperVillain;
//supervullain method 
SuperVillain.prototype.getEvilChuckle = function () {
   return "Ha ha ha!";
};


