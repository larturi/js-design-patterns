interface Strategy {
    login(user: string, password: string): boolean;
}

class LoginContext {
    private strategy: Strategy;
   
    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    login(user: string, password: string): boolean {
        return this.strategy.login(user, password);
    }
}

class LoginDBStrategy implements Strategy {
    login(user: string, password: string): boolean {
        console.log("Nos dirigimos a la BD")
        if(user === "admin" && password === "123456") {
            return true;
        }
        return false;
    }
}

class LoginServiceStrategy implements Strategy {
    login(user: string, password: string): boolean {
        console.log("Nos dirigimos al servicio de autenticación")
        if(user === "admin" && password === "asdf") {
            return true;
        }
        return false;
    }
}

class LoginGoogleStrategy implements Strategy {
    login(user: string, password: string): boolean {
        console.log("Nos dirigimos al servicio de Google")
        if(user === "admin" && password === "google") {
            return true;
        }
        return false;
    }
}

const auth = new LoginContext(new LoginDBStrategy());
let respuesta = auth.login("admin", "123456");
console.log(respuesta);

auth.setStrategy(new LoginServiceStrategy());
respuesta = auth.login("admin", "2222");
console.log(respuesta);

auth.setStrategy(new LoginGoogleStrategy());
respuesta = auth.login("admin", "google");
console.log(respuesta);