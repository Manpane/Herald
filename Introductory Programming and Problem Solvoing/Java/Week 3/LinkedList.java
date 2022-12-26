public class LinkedList {
    private Node head;
    private Node tail;
    public int length=0;

    private class Node{
        Node next;
        Node previous;
        Object data;
        public Node(Object data){this.data = data;}
    }
    
    public LinkedList(){}

    public void add(Object data){
        if (this.head==null){
            this.head = new Node(data);
            this.tail = head;
            this.length++;
            return;
        }
        Node newNode = new Node(data);
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
        this.length++;
        
    }
    
    public void addLeft(Object data){
        if (this.head==null){
            this.head = new Node(data);
            this.tail = head;
            this.length++;
            return;
        }
        Node newNode = new Node(data);
        this.head.previous = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    
    public void insert(Object data,int index) throws IndexOutOfBoundsException{
        if(index>length){
            throw new IndexOutOfBoundsException();
        }
        Node current = head;
        int i =0;
        while(current!=null){
            if(i==index){
                Node newNode = new Node(data);
                newNode.previous = current.previous;
                current.previous.next = newNode;
                current.previous = newNode;
                newNode.next = current;
                length++;
                break;
            }
            i++;
            current = current.next;
        }
        
    }
    
    public Object get(int index){
        if(index>length){
            throw new IndexOutOfBoundsException();
        }
        Node current = head;
        int i =0;
        while(current!=null){
            if(i==index){
                return current.data;
            }
            i++;
            current = current.next;
        }
        return null;
        
    }
    
    public Object[] getArray(){
        Object[] data = new Object[length];
        Node current = head;
        int i =0;
        while(current!=null){
            data[i] = current.data;
            i++;
            current = current.next;
        }
        return data;
    }
}
