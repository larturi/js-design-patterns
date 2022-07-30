// Refined Abstraction

class EncoderTextAbstraction {
    constructor(encoder) {
        this.encoder = encoder
    }

    encode(str) {
        return this.encoder.encode(str);
    }

    decode(str) {
        return this.encoder.decode(str);
    }
}

// Implementor 1
class Base64EncoderImplementor {
    encode(str) {
        return window.btoa(unescape(encodeURIComponent(str)));
    }
    decode(str) {
        return decodeURIComponent(escape(window.atob(str)));
    }
}

// Implementor 2
class HTMLEncoderImplementor {
    encode(str) {
        return str.split(".").reduce((ac, e) => {
            return ac + `<p>${e.trim()}</p>`
        }, '');
    }
    decode(str) {
        return str.split("</p>").reduce((ac, e) => {
            return e !== "" ?
                ac + e.replace("<p>", "") + ". " :
                ac + "";
        }, "");
    }
}

// Ejecución
const encoder1 = new EncoderTextAbstraction(new Base64EncoderImplementor());
console.log(encoder1.encode("Hola mundo"));
console.log(encoder1.decode("SG9sYSBtdW5kbw=="));

const encoder2 = new EncoderTextAbstraction(new HTMLEncoderImplementor());
console.log(encoder2.encode("Párrafo 1. Párrafo 2. Párrafo 3"));
console.log(encoder2.decode("<p>Párrafo 1</p><p>Párrafo 2</p><p>Párrafo 3</p>"));