import observe from './dataBinding/observer';
import Watcher from './dataBinding/watcher';

class Vue {
    constructor(options = {}) {
      this.$options = options
      let data = (this._data = this.$options.data)
      observe(data)
    }
    $watch(expOrFn, cb) {
      new Watcher(this, expOrFn, cb)
    }
  }

  let demo = new Vue({
    data: {
      text: '',
    },
  });
  
  const p = document.getElementById('p');
  const input = document.getElementById('input');
  
  input.addEventListener('keyup', function(e) {
    demo.text = e.target.value;
  });
  
  demo.$watch('text', str => p.innerHTML = str);
