const app = new Vue({
   el: '#app',
    data: {
       title: 'My experiences',
       description: 'I have done some <strong>html</strong> site which is simple and looks <b>awesome</b>!',
        skills: [
            {text: 'HTML'},
            {text: 'Javascript'},
            {text: 'CSS'}
        ],
        websites: [
            {
                company: 'visual solutions',
                url: 'visualSolutions'
            },
            {
                company: 'fireworks',
                url: 'Fireworks'
            }
        ]
    },
    methods: {
       addSkill: function() {
           var input = document.getElementById('skillForm');

           if (input.value) {
               this.skills.push({
                  text: input.value
               });
               input.value = '';
           }
       },
        deleteSkill: function(index) {
           this.skills.splice(index, 1);
        }
    },
    filters: {
       capitalize: function(value) {
           if(!value) return '';
           value = value.toString();
           console.log(value.charAt(0).toUpperCase() , value.slice(1));
           return value.charAt(0).toUpperCase() + value.slice(1);
       },
        undercase: function(value) {
           if(!value) return '';
           value = value.toString();
           return value.toLowerCase();
        },
        url: function(value) {
           if(!value) return '';
           value = value.toString();
           return 'www.'+value+'.com.my';
        }
    }
});
