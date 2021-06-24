new Vue(
    {
        el: '#app',
        data: {
            buttonText: 'Show me!',
            name: '',
            classContent: 'hidden',
            imgContent: 'https://www.hellomagazine.com/imagenes/royalty/2016042169091/queen-elizabeth-celebrates-90th-birthday-windsor-castle/0-331-803/featured_5_3-t.jpg'
        },
        methods: {
            hiddenOrVisible: function () {
                if (this.classContent === 'hidden') {
                    this.buttonText = 'Hide me!'
                    this.classContent = 'visible';
                } else {
                    this.buttonText = 'Show me!'
                    this.classContent = 'hidden';
                }
            }
        }
    }
);