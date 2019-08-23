class Movie
{
    public name:String="Bahubali";
    public duration:number=3;

}
class Movie1 extends Movie{
    public director:String="rajamouli";
    public producer:String="arca media";
}
var m = new Movie();
console.log(m.name);
console.log(m.duration);
var m1 = new Movie1();
console.log(m1.producer);
console.log(m1.director);
