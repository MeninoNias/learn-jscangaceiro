class DataConverter{

    constructor()	{
        throw new Error('Esta classe não pode ser instanciada');
    }

    static toText(date){
        return	`${date.getData()}/${date.getMonth()+1}/${date.getFullYear()}`;
    }
    static toDate(text){
        return new Date(...text.split('-').map((item, index) => item - index % 2));
    }
}