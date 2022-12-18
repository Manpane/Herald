import java.util.Scanner;
public class Cosine {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the angle: ");
        double angle = scanner.nextDouble();
        System.out.println("Cosine of "+angle+": "+cosine(angle, 20));
    }
    public static double cosine(double angle,int n){
        double value = 0;
        int denopow = 0;
        int negator = 1;
        for(int i = 0;i<n;i++){
            value+= negator*(Math.pow(angle, denopow)/factorial(denopow));
            negator*=-1;
            denopow+=2;
        }
        return value;
    }
    public static long factorial(int n){return n<1?1:factorial(n-1)*n;}
}
