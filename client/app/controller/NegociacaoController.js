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

        let negociacao = this._createNegociacao();     
    
        this._negociacoes.adciona(negociacao);
        this._cleanForm();
        console.log(this._negociacoes.toArray());
    }

    _cleanForm(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }

    _createNegociacao(){
        return new Negociacao(
            DataConverter.toDate(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }

}