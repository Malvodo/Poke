let miPikachu;
let miCharizard;
let miGabite;
let miPokeball;

let img;
let img2;
let img3;
let img4;
let img5;

function preload() {
  img = loadImage('pokeball.png');
	img2 = loadImage('Fondo.jpg');
	img3 = loadImage('pikachu.png');
	img4 = loadImage('charizard.png');
	img5 = loadImage('gengar.png');
}

function setup() {
	createCanvas(1920, 1200);
	rectMode(CENTER);
	miPikachu = new Pikachu (255,188,9);
	miCharizard = new Charizard (255,188,9);
	miGabite = new Gabite (200,200,9);
	miPokeball = new Pokeball(20);
}

function draw() {
	image(img2, 0, 0);
	
	miPikachu.dibujar();
	miCharizard.dibujar();
	miGabite.dibujar();
	miPokeball.dibujar();
	
	
	if(mouseIsPressed){
		if(comprobarDisparo() === true){
			miPikachu.nuevoPikachu();
		}
	}
	
	if(mouseIsPressed){
		if(comprobarDisparo2() === true){
			miCharizard.nuevoCharizard();
		}
	}
	
	if(mouseIsPressed){
		if(comprobarDisparo3() === true){
			miGabite.nuevoGabite();
		}
	}
}

function comprobarDisparo(){
	if( (miPokeball.x > miPikachu.x - miPikachu.radio) && (miPokeball.x < miPikachu.x + miPikachu.radio) && (miPokeball.y > miPikachu.y - miPikachu.radio) && (miPokeball.y < miPikachu.y + miPikachu.radio)){
		return true;
	}else{
		return false;
	}
}

function comprobarDisparo2(){
	if( (miPokeball.x > miCharizard.x - miCharizard.radio) && (miPokeball.x < miCharizard.x + miCharizard.radio) && (miPokeball.y > miCharizard.y - miCharizard.radio) && (miPokeball.y < miCharizard.y + miCharizard.radio)){
		return true;
	}else{
		return false;
	}
}

function comprobarDisparo3(){
	if( (miPokeball.x > miGabite.x - miGabite.radio) && (miPokeball.x < miGabite.x + miGabite.radio) && (miPokeball.y > miGabite.y - miGabite.radio) && (miPokeball.y < miGabite.y + miGabite.radio)){
		return true;
	}else{
		return false;
	}
}

class Pokeball{
	constructor(){
		this.x = mouseX;
		this.y = mouseY;
	}
	
	dibujar(){
		noCursor();
		fill(255,0,0,20);
		
		this.x = mouseX;
		this.y = mouseY;
		
		image(img, this.x, this.y);
	}
}

class Pikachu{
	constructor(_ancho,_alto,_velocidad){
		this.ancho = _ancho;
		this.alto = _alto;
		this.radio = _ancho/2;
		this.velocidad = _velocidad;
		this.nuevoPikachu();
	}
	
	dibujar(){
		if(this.y<0 - this.radio){
			this.nuevoPikachu();
		}
		image(img3,this.x,this.y)
		this.y -= this.velocidad;
	}
	
	nuevoPikachu(){
		this.y = height + this.radio;
		this.x = random(this.radio,width - this.radio);
		this.c = color(random(255),random(255),random(255))
	}
}

class Charizard{
	constructor(_ancho,_alto,_velocidad){
		this.ancho = _ancho;
		this.alto = _alto;
		this.radio = _ancho/2;
		this.velocidad = _velocidad;
		this.nuevoCharizard();
	}
	
	dibujar(){
		if(this.y<0 - this.radio){
			this.nuevoCharizard();
		}
		image(img4,this.x,this.y,this.ancho,this.alto);
		this.y -= this.velocidad;
	}
	
	nuevoCharizard(){
		this.y = height + this.radio;
		this.x = random(this.radio,width - this.radio);
		this.c = color(random(255),random(255),random(255))
	}
}

class Gabite{
	constructor(_ancho,_alto,_velocidad){
		this.ancho = _ancho;
		this.alto = _alto;
		this.radio = _ancho/2;
		this.velocidad = _velocidad;
		this.nuevoGabite();
	}
	
	dibujar(){
		if(this.y<0 - this.radio){
			this.nuevoGabite();
		}
		image(img5,this.x,this.y,this.ancho,this.alto);
		this.y -= this.velocidad;
	}
	
	nuevoGabite(){
		this.y = height + this.radio;
		this.x = random(this.radio,width - this.radio);
		this.c = color(random(255),random(255),random(255))
	}
}