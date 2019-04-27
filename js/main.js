Vue.component ('todo-item',{
  template : '<li>{{title}}<span><button class="deep-purple darken-4 lime-text darken-4" v-on:click="$emit(`remove`)">supprimer</button></span></li>',
  props : ['title']
})

new Vue ({
  el : '#container-to-do-list',
  data : {
    newToDo : '',
    items : [
    ],
    nextToDo : 0
  },
    methods : {
    addNewList : function () {
      this.items.push({
        id : this.nextToDo++,
        title : this.newToDo
      })
      this.newToDo = ''
    }
  }
})



