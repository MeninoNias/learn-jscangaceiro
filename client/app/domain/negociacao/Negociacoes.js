class Negociacoes{

    constructor(){
        this._negociacoes = [];
    }

    adciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    toArray(){
        return this._negociacoes;
    }

}