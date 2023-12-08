var theQoute = [
    {
    qoute : '“Be yourself; everyone else is already taken.”',
    auther : '--Oscar Wilde'
    } , 

    {
        qoute : '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”' , 
        auther : '--Albert Einstein'   
    } ,

    {
        qoute : '“A room without books is like a body without a soul.”' , 
        auther : '--Marcus Tullius Cicero'   
    } ,
    {
        qoute : '“Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.”' , 
        auther : '--Bernard M. Baruch'   
    } ,
    {
        qoute : '“You know you are in love when you can not fall asleep because reality is finally better than your dreams.”' , 
        auther : '--Dr. Seuss'   
    } ,
    {
        qoute : '“You only live once, but if you do it right, once is enough.”' , 
        auther : '--― Mae West'   
    } ,
    {
        qoute : '“Be the change that you wish to see in the world.”' , 
        auther : '--Mahatma Gandhi'   
    } ,
    {
        qoute : '“If you tell the truth, you do not have to remember anything.”' , 
        auther : '--Mark Twain'   
    } 
]
var thevalue ;
function getTheQoute(){
    var num = Math.floor(Math.random() * theQoute.length );
    if(num == thevalue){
    getTheQoute();
   }
   else {
    document.getElementById('getQoute').innerHTML = theQoute[num].qoute;
    document.getElementById('getAuther').innerHTML = theQoute[num].auther;
    thevalue = num;
   }
}

