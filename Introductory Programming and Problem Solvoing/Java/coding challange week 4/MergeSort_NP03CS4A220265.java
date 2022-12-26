import java.util.ArrayList;
import java.util.Scanner;
/**
 * This class is a coding challenge.
 * It has the methods to sort an array with merge sort algorithm.
 * For submission purpose, the filename is changed. So, to run this code, first change the filename to 'MergeSort.java'
 */
public class MergeSort_NP03CS4A220265 {

	/**
	 * This method fills up the array with it user input and returns it
	 * @param al ArrayList<Integer>
	 * @return ArrayList<Integer>
	 * 
	 */
	ArrayList<Integer> getInput(int numbers) {
		Scanner scanner = new Scanner(System.in);
		ArrayList<Integer> al = new ArrayList<>(numbers);
		for (int i = 0; i < numbers; i++) {
			System.out.print("Enter "+(i+1)+"th number : ");
			int number ;
			try {
				number = scanner.nextInt();
			} catch (Exception e) {
				System.out.println("Invalid Input");
				i--;
				continue;
			}
			al.add(number);
		}
		scanner.close();
		return al;
	}
	/**
	 * 
	 * This method takes 10 numbers from user and returs the ArrayList<Integer> containing the numbers
	 * 
	 * @param al
	 * @return ArrayList<Integer>
	 */
	ArrayList<Integer> getInput(ArrayList<Integer> al) {
		al = getInput(10);
		return al;
	}

	/**
	 * This method prints all the elements of the ArrayList al seperated with commas(,)
	 * @param al ArrayList<Integer>
	 * 
	 * @return null
	 */
	void getOutput(ArrayList<Integer> al) {
		System.out.print("[ ");
		for (int i = 0; i < al.size(); i++) {
			if(i==al.size()-1)  System.out.print(al.get(i));
			else 				System.out.print(al.get(i)+" , ");
		}
		System.out.print(" ]");
	}
	
	/**
	 * 	
	 * This method returns the merged ArrayList from the two input arrayLists.
	 * Both of the input arrayList are assumed to be sorted.
	 * 
	 * @param left
	 * @param right
	 * @return
	 */
	ArrayList<Integer> merge(ArrayList<Integer> left, ArrayList<Integer> right) {
		ArrayList<Integer> merged = new ArrayList<>(left.size()+right.size());
		int l = 0,r = 0;
		while(l<left.size() && r<right.size()){
			if(left.get(l)<right.get(r)){
				merged.add(left.get(l));
				l++;
			}else{
				merged.add(right.get(r));
				r++;
			}
		}
		while(l<left.size()){
			merged.add(left.get(l));
			l++;
		}
		while(r<right.size()){
			merged.add(right.get(r));
			r++;
		}
		return merged;
	}
	
	/**
	 * 
	 * This method returnssorted ArrayList from the unsorted input ArrayList<Integer> al.
	 * If the input array is empty or contains only one element, it is assumed as sorted and returned as it is.
	 * 
	 * This is the classic merge sort algorithm
	 * 
	 * @param al
	 * @param beg
	 * @param end
	 * @return
	 */
	public ArrayList<Integer> sort(ArrayList<Integer> al,int beg,int end) {
		if (al.size()<=1)return al;

		int mid = al.size()/2;
		ArrayList<Integer> left = new ArrayList<Integer>();
		ArrayList<Integer> right =new ArrayList<Integer>();

		for(int i = beg;i<mid;i++){
			left.add(al.get(i));
		}
		for(int i = mid;i<end;i++){
			right.add(al.get(i));
		}
		left = sort(left,0,left.size());
		right = sort(right,0,right.size());
		ArrayList<Integer> sorted = merge(left, right);
		return sorted;
	}

	/**
	 * sorts the input array in place
	 * @param al
	 */
	public ArrayList<Integer> sort(ArrayList<Integer> al){
		return sort(al, 0, al.size());
	}
	public static void main(String[] args) {
		MergeSort_NP03CS4A220265 sorter = new MergeSort_NP03CS4A220265();// MergeSort object creation
		ArrayList<Integer> al; // declaration of array
		al=sorter.getInput(10);//taking 10 numbers from user as input
		al=sorter.sort(al);//sorting the array 
		sorter.getOutput(al);	// printing the sorted array
	}

}
