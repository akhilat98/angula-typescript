export class Greetings{
    public strProp:string;
    private numProp:number;
    protected safeProp:any;
    static aStaticProp:string="I'm static";
    anonProp:any;

}
interface iDidSomething{
    Worked():string;
}

export class SpecialGreetings extends Greetings
{
    constructor()
    {
        super();
    }
    public getSafeProp()
    {
        return this.safeProp;
    }
    public Worked():string{
        return "worked a lot";
    }
}
var greetings = new Greetings();
var objGreetings = new SpecialGreetings();
console.log(objGreetings.getSafeProp());
console.log(Greetings.aStaticProp);
console.log(objGreetings.Worked());