public class Employee {
    public String name;
    public int age;
    public String phone;
    public String address;
    public double salary;

    public void printSalary() {
        System.out.println("Salary of "+this.name+" is: "+this.salary);
    }
}
