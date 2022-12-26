import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while(true){
            System.out.println("Enter 2 numbers: ");
            int num1 = sc.nextInt();
            int num2 = sc.nextInt();
            Calculator calc = new Calculator(num1,num2);
            System.out.println("What to do?\n1. for addition\n2. for subtraction\n3. for multiplication\n4. for division\n5. for remainder");
            int choice = sc.nextInt();
            if(choice == 1) System.out.println("Sum: "+calc.sum());
            else if(choice == 2) System.out.println("Difference: "+calc.difference());
            else if(choice == 3) System.out.println("Product: "+calc.product());
            else if(choice == 4) System.out.println("Division: "+calc.quotient());
            else if(choice == 5) System.out.println("Remainder: "+calc.modulo());
            else{
                System.out.println("Invalid operation code.\n");
            }
        }
    }
}
