import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;
public class Main {
    static HashMap<Integer,ArrayList<Integer>> memo = new HashMap<>();
    static final int[] currencies = {1000,500,100,50,20,10,5,2,1};
    public static void main(String[] args) {
        System.out.print("Enter the change: ");
        int change = new Scanner(System.in).nextInt();
        ArrayList<Integer> combination = findSum(change, currencies);
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

    /**
     * 
     * @param sum the sum to make with given list of coins
     * @param coins the coins to make the sum with
     * @return null or ArrayList<Integer> with the best combination of coins to make to the sum
     * 
     * @baseCases
     * @
     * 1. IF the sum is already present in the memo object
     * @
     * 2. IF the sum is 0, the combination is found
     * @
     * 3. IF the sum is less than 0, combination not found
     */
    public static ArrayList<Integer> findSum(int sum,int[] coins){

        //base cases
        //if the change is already calculated, just return that
        if(memo.get(sum) != null)return memo.get(sum);

        // if the sum is 0, it means the change is found, returning empty array
        //This empty array is filled as the recursive tree moves up
        if(sum==0)return new ArrayList<Integer>(0);

        //if sum is less than 0, no change is possible with current combination
        if (sum<0)return null;

        //initialize the best combination as empty array
        ArrayList<Integer> bestSum  = new ArrayList<Integer>(0);
        
        //main algorithm
        for(int paisa : coins){
            int diff = sum-paisa;//calculate the remaining sum to calculate
            ArrayList<Integer> comb = findSum(diff, coins);// finding the sum for remaining
            
            if (comb!=null){// if combination is available with the remaining
                comb.add(paisa);// appending the current paisa to the list as it is valid combination
                if(bestSum.size()!=0){//cheking the shortest combination
                    if (comb.size()<bestSum.size()) bestSum = (ArrayList<Integer>) comb.clone();
                }else bestSum = (ArrayList<Integer>) comb.clone();//if no combination is choosen, setting the bestsum as current combination
            }
        }
        if (bestSum.size()==0){//bestsum size 0 means no combination found
            return null;
        }
        memo.put(sum,bestSum);//putting the calculated best combination for future use
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