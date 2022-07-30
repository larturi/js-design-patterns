namespace StateNameSpace {

    // Interface
    interface State {
        next(ticket: Ticket): number | null;
        add(ticket: Ticket, quantity: number): void;
    }

    // Context
    class Ticket {
        private state: State;

        quantity: number;
        readonly limit: number;
        private number: number;

        constructor(limit: number) {
            this.quantity = 0;
            this.limit = limit;
            this.number = 0;
            this.state = new EmptyState();
        }

        get getNumber(): number {
            return this.number++;
        }

        set setState(state: State) {
            this.state = state;
        }

        get getState() {
            return this.state;
        }

        next(): number | null {
            return this.state.next(this);
        }

        add(quantity: number): void {
            this.state.add(this, quantity);
        } 
    }

    // Estados
    class EmptyState implements State {
        next(ticket: Ticket): null {
            return null;
        }

        add(ticket: Ticket, quantity: number): void {
            if((ticket.quantity + quantity) < ticket.limit){
                ticket.quantity += quantity;
                ticket.setState = new WithDataState();
            }else if((ticket.quantity + quantity) === ticket.limit){
                ticket.quantity += quantity;
                ticket.setState = new FullState();
            }
        }

    }

    class WithDataState implements State {
        next(ticket: Ticket): number {
            ticket.quantity--;
            if(ticket.quantity<=0){
                ticket.setState = new EmptyState();
            }
            return ticket.getNumber;
        
        }
        add(ticket: Ticket, quantity: number): void {
            if((ticket.quantity + quantity) < ticket.limit){
                ticket.quantity += quantity;
                ticket.setState = new WithDataState();
            }else if((ticket.quantity + quantity) === ticket.limit){
                ticket.quantity += quantity;
                ticket.setState = new FullState();
            }
        }
    }

    class FullState implements State {
        next(ticket: Ticket): number {
            ticket.quantity--;
            if(ticket.quantity <=0)
                ticket.setState = new EmptyState();
            else
                ticket.setState = new WithDataState();
            return ticket.getNumber;
        }
        add(ticket: Ticket, quantity: number): void {
            console.log("Ticket lleno");
        }
    }


    // Ejecución
    const ticket = new Ticket(5);
    console.log('Creo un ticket con limite = 5. Estado:', ticket.getState);

    console.log('\nAgrego 5 tickets');
    ticket.add(5);

    console.log('\nPido proximo...', ticket.next());
    console.log('Estado:', ticket.getState);
    console.log('Pido proximo...', ticket.next());
    console.log('Estado:', ticket.getState);
    console.log('Pido proximo...', ticket.next());
    console.log('Estado:', ticket.getState);
    console.log('Pido proximo...', ticket.next());
    console.log('Estado:', ticket.getState);
    console.log('Pido proximo...', ticket.next());
    console.log('Estado:', ticket.getState);

    console.log('\nPido proximo (se vacia la ticketera)', ticket.next());
    console.log('Estado:', ticket.getState);


    console.log('\nAgrego 4 tickets');
    ticket.add(4);
    console.log(ticket.getState);

    console.log('\nAgrego 1 ticket');
    ticket.add(1);
    console.log(ticket.getState);


}