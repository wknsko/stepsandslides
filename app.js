const text1st = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. In rutrum. Quisque porta. Nulla quis diam. Aliquam id dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Pellentesque pretium lectus id turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam ornare wisi eu metus. Mauris tincidunt sem sed arcu. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Aliquam erat volutpat. Cras pede libero, dapibus nec, pretium sit amet, tempor quis.';
const text2nd = 'Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Etiam dictum tincidunt diam. Integer lacinia. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Sed ac dolor sit amet purus malesuada congue. Etiam quis quam. Suspendisse nisl. Praesent in mauris eu tortor porttitor accumsan. Aenean id metus id velit ullamcorper pulvinar. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Etiam bibendum elit eget erat. Integer malesuada. Nunc dapibus tortor vel mi dapibus sollicitudin. Aliquam erat volutpat.';
const text3rd = 'Vivamus porttitor turpis ac leo. Nulla non arcu lacinia neque faucibus fringilla. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Integer tempor. Fusce wisi. In rutrum. Nullam eget nisl. Aliquam erat volutpat. Maecenas aliquet accumsan leo. Phasellus faucibus molestie nisl. Nulla quis diam.';
const text4th = 'Duis viverra diam non justo. Integer in sapien. Fusce tellus. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Quisque tincidunt scelerisque libero. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Fusce tellus. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Quisque tincidunt scelerisque libero.';
const text5th = 'Praesent id justo in neque elementum ultrices. Curabitur sagittis hendrerit ante. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Curabitur bibendum justo non orci. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Fusce wisi. Maecenas libero. Maecenas aliquet accumsan leo. Phasellus rhoncus. Nulla est. Aenean id metus id velit ullamcorper pulvinar. Mauris dictum facilisis augue. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Duis risus. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.';

const App = {
  data() {
    return {
      title: 'Learn Vue',
      activeIdx: 0,
      isActive: true,
      startAgain: false,
      menu: [
        {name: 'Basics', text: text1st, active: true},
        {name: 'Components', text: text2nd, active: false},
        {name: 'Router', text: text3rd, active: false},
        {name: 'Vuex', text: text4th, active: false},
        {name: 'Composition', text: text5th, active: false}
      ]
    }
  },
  methods: {
    prev() {
      if(this.activeIdx > 1){
        this.menu[this.activeIdx].active = false;
        this.isActive = false;
        this.activeIdx--;
        let num = this.activeIdx;
        this.menu[num].active = true;
      } else {
        this.menu[this.activeIdx].active = false;
        this.isActive = true;
        this.activeIdx--;
        let num = this.activeIdx;
        this.menu[num].active = true;
      }

    },
    reset() {
      this.menu[this.activeIdx].active = false;
      this.activeIdx = 0;
      this.isActive = true;
      let num = this.activeIdx;
      this.menu[num].active = true;

    },
    nextOrFinish() {
      if(this.activeIdx === 0){
        this.menu[this.activeIdx].active = false;
        this.activeIdx++
        this.isActive = false;
        let num = this.activeIdx;
        this.menu[num].active = true;
      } else if(this.activeIdx !== this.menu.length - 1) {
        this.menu[this.activeIdx].active = false;
        this.activeIdx ++;
        this.isActive = false;
        let num = this.activeIdx;
        this.menu[num].active = true;

      } else {
        this.menu[this.activeIdx].active = false;
        this.activeIdx = 0;
        this.isActive = true;
        let num = this.activeIdx;
        this.menu[num].active = true;

      }
    } ,
    setActive(idx) {
      this.menu[this.activeIdx].active = false;
      this.menu[idx].active = true;
      this.activeIdx = idx;
    },


  },
  computed: {

  }
}

Vue.createApp(App).mount('#app');
