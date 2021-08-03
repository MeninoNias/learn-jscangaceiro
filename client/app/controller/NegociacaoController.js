class NegociacaoController{

    constructor(){
        let	$ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adcionar(event){
        event.preventDefault();

        let negociacao = new Negociacao(
            DataConverter.toDate(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );     
        
        console.log(negociacao);
    
    }


}