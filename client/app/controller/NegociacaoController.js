class NegociacaoController{

    constructor(){
        let	$ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adcionar(event){
        event.preventDefault();
        
        let	data = new Date(this._inputData.value.replace(/-/g,	','));

        // let negociacao = new Negociacao(
        //     this._inputData.value,
        //     parseInt(this._inputQuantidade.value),
        //     parseFloat(this._inputValor.value)
        // );     
        
        console.log(negociacao);
    
    }


}