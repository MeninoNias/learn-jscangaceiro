class DataConverter{

    constructor()	{
        throw new Error('Esta classe não pode ser instanciada');
    }

    static toText(date){
        return	data.getDate() + '/' + (data.getMonth()	+ 1) + '/' + data.getFullYear();
    }
    static toDate(text){
        return new Date(...text.split('-').map((item, index) => item - index % 2));
    }
}