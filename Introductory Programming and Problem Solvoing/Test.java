import java.util.*;
public class Test {
    public static void main(String[] args) {
        Random random = new Random();
        ArrayList<String> moves = new ArrayList<String>(Arrays.asList("R","P","S"));
        while(true){
            System.out.println("\033[H\033[2J");//clears the screen
            String usermove = System.console().readLine("Moves:\nR - Rock\nP-Paper\nS-Scissor\n\nEnter your move:").toUpperCase();
            if (!moves.contains(usermove)){
                System.out.println("\nInvalid Move");
                continue;
            }
            String botmove = moves.get(random.nextInt(moves.size()));//randomly selecting the bot move
            System.out.println("Your move: "+usermove+"\nBot move: "+botmove);
            if (usermove.equals(botmove))  System.out.println("\n\tTie!");// tie condition
            else if (isUserWinner(usermove, botmove))  System.out.println("\n\tYou won!\n");
            else System.out.println("\n\tYou Lost!");
            String choice = System.console().readLine("Play Again? (Y/N): ");//asking if user wants to play again
            if(!choice.toUpperCase().equals("Y")){//if user enters something other than Y/y the program ends
                System.out.println("\n\nThank you for playing");
                break;
            }
        }
    }
    public static boolean isUserWinner(String usermove,String botmove){//returns if the user won the game.
        if(botmove.equals("R"))return usermove.equals("P");
        else if(botmove.equals("P"))return usermove.equals("S");
        else if(botmove.equals("S"))return usermove.equals("R");
        return false;
    }
}