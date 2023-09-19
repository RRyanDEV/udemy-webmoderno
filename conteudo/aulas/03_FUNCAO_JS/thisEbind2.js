function Pessoa(){
    this.idade = 20

    /*
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000);
    */

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }.bind(this), 1000);
}

new Pessoa