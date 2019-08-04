import Dep from './dep';

class Observer {
    constructor(value) {
        this.value = value
        this.walk(value)
    }

    walk(value) {
        Object.keys(value).forEach(key => defineReactive(this.value, key, value[key]))
    }
}

function defineReactive(obj, key, val) {
    const dep = new Dep()
    observe(val)
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: () => {
            if (Dep.target) {
              dep.depend();
            }
            return val;
        },
        set: newVal => {
            if (val === newVal) return
            val = newVal
            observe(newVal)
            dep.notify()
        }
    })
}

export default function observe(value) {
    if (!value || typeof value !== 'object') {
      return
    }
    return new Observer(value)
}
