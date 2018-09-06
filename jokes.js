class Joke {
	constructor(name, content) {
		this.name = name;
		this.content = content;
	} 
	getname() {
		this.name;
	}
	setname(nameJoke) {
		this.name = nameJoke;
	}
	getcontent() {
		this.content;
	}
	setcontent(contentJoke) {
		this.content = contentJoke;
	}
	tell() {
		console.log(this.name, this.content);
	}
}
class GoodJoke extends Joke {
	constructor(name, content) {
		super(name, content);
		this.name = name;
		this.content = content;
		this.funny = true;
	}
	getfunny() {
		this.funny;
	}
	setfunny(funnyJoke) {
		this.funny = funnyJoke;
	}
}

class BadJoke extends Joke {
	constructor(name, content) {
		super (name, content);
		this.name = name;
		this.content = content;
		this.funny = false;
	}
	getfunny() {
		this.funny;
	}
	setfunny(funnyJoke) {
		this.funny = funnyJoke;
	}
}

let bad_joke = new BadJoke("knock knock", "knock, knock...");
let good_joke = new GoodJoke("question", "what are those!?");

good_joke.tell();
bad_joke.tell();

// console.log(bad_joke)
// console.log(good_joke)