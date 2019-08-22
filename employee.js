var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
        this.name = "akhila";
        this.age = 20;
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.greeting = function () {
        return "Hello" + this.name;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.designation = "developer";
        _this.salary = 10000;
        return _this;
    }
    Employee.prototype.getDesignation = function () {
        return this.designation;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.greeting = function () {
        return "Hi" + this.name;
    };
    Employee.sProperty = "static";
    return Employee;
}(Person));
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
