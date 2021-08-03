class DataConverter{

    toText(date){
        return	data.getDate() + '/' + (data.getMonth()	+ 1) + '/' + data.getFullYear();
    }
    toDate(text){
        return new Date(...text.split('-').map((item, index) => item - index % 2));
    }
}