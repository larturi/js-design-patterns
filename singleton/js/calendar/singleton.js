class WeekDays {
    daysEs = ["Lunes", "Martes", "Miercoles", "Jueves", "Sabado", "Sábado", "Domingo"];
    daysEn = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    constructor(lang) {
        this.lang = lang;

        if (WeekDays.instance) {
            return WeekDays.instance;
        }

        WeekDays.instance = this;
    }

    getDays() {
        return this.lang === "es" ? this.daysEs : this.daysEn;
    }
}

const weekDays1 = new WeekDays('es');
const weekDays2 = new WeekDays();
console.log(weekDays1.getDays());
console.log(weekDays2.getDays());