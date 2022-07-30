// Contexto
class DocumentContext {
    constructor() {
        this.state = new BlankState();
        this.content = "";
    }

    setState(state) {
        this.state = state;
    }

    write(text) {
        this.state.write(this, text);
    }
}

// State en blanco
class BlankState {
    write(documentContext, text) {
        documentContext.content = text;
        documentContext.setState(new EditionState());
    }
}

// State Modo Edicion
class EditionState {
    write(documentContext, text) {
        documentContext.content += " " + text;
    }
}

// State Modo Read Only
class ReadOnlyState {
    write(documentContext, text) {
        console.log("Documento aprobado ya no se modifica");
    }
}

const doc = new DocumentContext();

console.log('Inicio:');
doc.write("Esta es la primera oración.");
console.log('->', doc.content);

console.log('Escribo dos oraciones mas:');
doc.write("Esta es la segunda oración.");
doc.write("Esta es la tercera oración.");
console.log('->', doc.content);

console.log('Actualizo state a ReadOnly e intento escribir:');
doc.setState(new ReadOnlyState());
doc.write("Cuarta oración");

console.log('Actualizo state a Edición e intento escribir:');
doc.setState(new EditionState());
doc.write("Cuarta oración");
console.log('->', doc.content);