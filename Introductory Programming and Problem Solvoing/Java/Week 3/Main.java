import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;
public class Main {
    static HashMap<Integer,ArrayList<Integer>> memo = new HashMap<>();
    static final int[] currencies = {50,20,10,5,2,1};
    public static void main(String[] args) {
        System.out.print("Enter the change: ");
        int change = new Scanner(System.in).nextInt();
        ArrayList<Integer> combination = findCoinCombination(change, currencies);
        if(combination!=null){
            HashMap<Integer,Integer> map = new HashMap<>();
            for(int a:combination){
                Integer curr = map.get(a);
                if(curr!=null){
                    map.put(a, curr+1);
                }
                else map.put(a,1);
            }
            for(int a:currencies){
                Integer curr = map.get(a);
                if (curr!=null){
                    System.out.println(a+"\t*\t"+curr+"\t=\t"+(a*curr));
                }
            }
            System.out.println("\nTotal\t\t\t\t"+change);
        }
    }
    public static ArrayList<Integer> findCoinCombination(int sum,int[] coins){
        if(memo.get(sum) != null)return memo.get(sum);//memo is a static class variable
        if(sum==0)return new ArrayList<Integer>(0);
        if (sum<0)return null;
        ArrayList<Integer> bestSum  = new ArrayList<Integer>(0);
        
        for(int paisa : coins){
            int diff = sum-paisa;
            ArrayList<Integer> comb = findCoinCombination(diff, coins);
            if (comb!=null){
                comb.add(paisa);
                if(bestSum.size()!=0){
                    if (comb.size()<bestSum.size()) bestSum = (ArrayList<Integer>) comb.clone();
                }else bestSum = (ArrayList<Integer>) comb.clone();
            }
        }
        if (bestSum.size()==0)return null;
        memo.put(sum,bestSum);
        return bestSum;
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