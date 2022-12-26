public class Savings {
    /**
     * 
     * @param principal
     * @param time
     * @param rate in percent(%)
     * @return simple interest
     */
    public static double interest(double principal,float time,float rate){
        return principal*time*(rate/100);
    }
}
