//1. Dibuixem els elements.linea, punt, quad,... formes primitives.
//2. formes primitives les passem a un for/translate
//3. Construim l'objecte. class/function
//4. Passem variables a l'objecte display(variables);
//5. Array d'objectes.

let a = [];
let tamany =[2,5,8,20,14];
let ample =[20,50,80,10,140];
let alt=[20,50,80,10,140];
let paleta=['#FF6138','#FFFF9D', '#BEEB9F', '#79BD8F','#00A388'];
let espaix=[2,10,20,30,40];
let espaiy=[2,10,20,30,40];
let grossor=[1,2,3,4,5];
let velocitat=[0.5,1,0.2,10,2]

function setup(){
	createCanvas(192,157);
	background(255);
	for(let i=0; i<5; i=i+1 ){
		a.push(new Antena());
	}
}
function draw(){
	background(255);
	for(let i=0; i<a.length; i=i+1){
		a[i].move(velocitat[i]);
		a[i].display(tamany[i], ample[i], espaix[i], alt[i], espaiy[i], paleta[i], 1);
	}
}
class Antena{
	constructor(){
		this.x=random(width);
		this.y=random(height);
	}
	move(vel){
		this.vel=vel;
		this.x= this.x + random(-vel,vel);
		this.y= this.y + random(-vel,vel);
	}
	display(t,ampr, sx, altr, sy, c, g){
		stroke(c);
		strokeWeight(g);
		for(var posx=0; posx<ampr; posx=posx+sx){
			for(var posy=0; posy<altr; posy=posy+sy){
				push();
				translate(posx+this.x-ampr,posy+this.y-altr);
					line(0,t,t*2,t);
					line(t,0,t,t*2);
				pop();
			}
		}
	}
}