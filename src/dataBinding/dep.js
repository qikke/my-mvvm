class Dep {
    constructor() {
        this.subs = []
    }

    depend() {
        this.subs.push(Dep.target);
    }

    notify() {
        this.subs.forEach(sub => sub.update())
    }
}

Dep.target = null;

export default Dep
