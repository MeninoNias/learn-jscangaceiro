class NegociacoesView {

    constructor(seletor){
        this._elemento = document.querySelector(seletor);
    }

    update(model){
        this._elemento.innerHTML = this.template(model);
    }

    template(model){
        return	`
        <table class="table table-hover	table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.toArray().map(negociacao => {
                        return `
                        <tr>
                            <td>${DataConverter.toText(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>
                        `
                    }).join('')}
                </tbody>
                <tfoot>
                
                </tfoot>
        </table>															
     `
    }
}