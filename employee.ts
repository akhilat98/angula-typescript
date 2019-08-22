interface iOperations{
    greeting():string;
}
class Person implements iOperations
{
    protected salary;
    public name:String="akhila";
    public age:number=20;
    public getName()
    {
        return this.name;
    }
    greeting(): string {
     return "Hello" + this.name;   
    }
}
class Employee extends Person
{
    static sProperty = "static";
    public designation:String="developer";
    public getDesignation()
    {
        return this.designation;
    }
    salary = 10000;
    public getSalary()
    {
        return this.salary;
    }
}
var p = new Person();
console.log(p.name);
console.log(p.age);
console.log(p.getName());
console.log(p.greeting());

var e = new Employee();
console.log(e.name);
console.log(e.age);
console.log(e.designation);
console.log(e.getDesignation());
console.log(e.greeting());
console.log(Employee.sProperty);
console.log(e.getSalary());
