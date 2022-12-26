public class Calculator {
    private double number1;
    private double number2;
    public Calculator(double num1,double num2){
        this.number1 = num1;
        this.number2 = num2;
    }   
    public double sum(){
        return this.number1+this.number2;
    }
    public double product(){
        return this.number1*this.number2;
    }
    public double quotient(){
        return this.number1/this.number2;
    }
    public double difference(){
        return this.number1-this.number2;
    }
    public double modulo(){
        return this.number1%this.number2;
    }
}
