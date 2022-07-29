class Form {
    constructor(controls, action, btnLabel = 'Enviar') {
        this.controls = controls;
        this.action = action;
        this.btnLabel = btnLabel;
    }

    getContent() {
        return `<form method="post" action="${this.action}" class="section">
            ${this.controls.reduce((ac, c) => {
                return ac + `<div>
                    ${this.getLabel(c)}
                    ${this.getInput(c)}
                </div>`
            }, "")}
            <button type="submit" class="btn btn-primary w-100 mt-3">${this.btnLabel}</button>
        </form>`;
    }

    getLabel(control) {
        return `<label class="form-label">${control.text}</label>`;
    }

    getInput(control) {
        return `<input 
            type="${control.type}" 
            id="${control.name}" 
            name="${control.name}" 
            class="${control.class} mb-2"
        />`;
    }
}

class FormBuilder {
    constructor() {
        this.reset();
    }

    reset() {
        this.controls = [];
        this.action = "";
    }

    setAction(action) {
        this.action = action;
        return this;
    }

    setBtnLabel(btnLabel) {
        this.btnLabel = btnLabel;
        return this;
    }

    setText(name, text) {
        this.controls.push({
            name,
            text,
            type: "text",
            class: "form-control"
        });
        return this;
    }

    setEmail(name, text) {
        this.controls.push({
            name,
            text,
            type: "email",
            class: "form-control"
        });
        return this;
    }

    setCheckBox(name, text) {
        this.controls.push({
            name,
            text,
            type: "checkbox"
        });
        return this;
    }

    build() {
        const form = new Form(this.controls, this.action, this.btnLabel);
        this.reset();
        return form;
    }
}

class FormDirector {
    constructor(formBuilder) {
        this.setBuilder(formBuilder)
    }

    setBuilder(formBuilder) {
        this.formBuilder = formBuilder;
    }

    createPersonForm() {
        this.formBuilder.reset();
        this.formBuilder.setText("firstName", "Nombre")
                        .setText("lastName", "Apellido")
                        .setBtnLabel("Crear persona")
    }

    createContactForm() {
        this.formBuilder.reset();
        this.formBuilder.setAction("contact.php")
                        .setText("firstName", "Nombre")
                        .setEmail("email", "Email")
                        .setBtnLabel("Enviar informacion de contacto")
    }
}

// Implement

const frmBuilder = new FormBuilder();
const frmPerson = frmBuilder.setAction("add.php")
                            .setBtnLabel("Guardar")
                            .setText("firstName", "Nombre")
                            .setText("lastName", "Apellido")
                            .setEmail("email", "Email")
                            .setCheckBox("arte", "Te gusta el arte?")
                            .build();

form1.innerHTML = frmPerson.getContent();

const contactForm = frmBuilder.setAction("contact.php")
                              .setBtnLabel("Enviar informacion de contacto")
                              .setText("firstName", "Nombre")
                              .setEmail("email", "Email")
                              .build();

form2.innerHTML = contactForm.getContent();

const director = new FormDirector(frmBuilder);
director.createPersonForm();
form3.innerHTML = frmBuilder.build().getContent();

director.createPersonForm();
form4.innerHTML = frmBuilder.build().getContent();

director.createContactForm();
form5.innerHTML = frmBuilder.build().getContent();

