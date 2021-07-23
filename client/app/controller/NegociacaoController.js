class NegociacaoController{

    adcionar(event){
        event.preventDefault();
        
        let	$ = document.querySelector;
        let	inputData =	$('#data');
        let	inputQuantidade	= $('#quantidade');
        let	inputValor = $('#valor');

        console.log(inputData.value);
        console.log(parserInt(inputQuantidade.value));
        console.log(parseFloat(inputValor.value));
    }


}