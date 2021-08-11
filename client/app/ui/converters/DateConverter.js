class DataConverter{

    constructor()	{
        throw new Error('Esta classe não pode ser instanciada');
    }

    static toText(date){
        return	`${date.getData()}/${date.getMonth()+1}/${date.getFullYear()}`;
    }
    static toDate(text){

        if(!/^\d{4}-\d{2}-\d{2}$/.test(date)){
            throw new Error('Deve estar no formato aaaa-mm-dd');
        }

        return new Date(...text.split('-').map((item, index) => item - index % 2));
    }
}