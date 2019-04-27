Vue.component ('todo-item',{
  template :
   '<div class="row container"><li class="col m10 s10">{{title}}</li><button class="col m2 s2 deep-purple darken-4 lime-text darken-4" v-on:click="$emit(`remove`)">supprimer</button></div>',
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



