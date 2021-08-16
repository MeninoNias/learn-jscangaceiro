class NegociacaoController{

    constructor(){
        let	$ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoes = new Negociacoes();
    }

    adcionar(event){
        event.preventDefault();

        let negociacao = new Negociacao(
            DataConverter.toDate(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );     
        
        this._negociacoes.adciona(negociacao);

        console.log(this._negociacoes.toArray());
    
    }


}