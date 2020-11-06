// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// BONUS: Aggiungere un’immagine presa anch’essa da un data
let app = new Vue({
    el: '#root',
    data: {
        textTitle: 'Hello Boolean!!',
        imageUrl: "#"
    },
    methods: {
        showImage() {
            if(this.imageUrl == "#") {
                this.imageUrl = "https://memegenerator.net/img/instances/68132525.jpg";
            } else {
                this.imageUrl = "#";
            }
        }
    }
});
