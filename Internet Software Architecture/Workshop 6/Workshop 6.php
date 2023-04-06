<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php  
        // Name: Manoj Neupane
        // College ID: NP03CS4A220265
        // University ID: 2330700


        //1. Counting from 5to 15 using loop
        for($i = 5;$i<=15;$i++){
            echo "$i<br>"; // 5 to 15
        }

        //2. Print "Hello World" using PHP variable.
        $name = "Hello, World!";
        echo $name; // Hello, World!

        
        //3.Check student grade based on marks
        function check_grade($marks){
            $full_total = count($marks)*100;
            $total_obtained = array_sum($marks);
            $percent = ($total_obtained/$full_total)*100;
            if($percent>=70){
                return "A grade";
            }
            else if($percent>=60){
                return "B grade";
            }
            else if($percent>=50){
                return "C grade";
            }
            else if($percent>=40){
                return "D grade";
            }
            else{
                return "Fail.";
            }
        }
        check_grade(array(66,70,65,78,91,88)); // A Grade
        check_grade(array(20,10,40,35,42,32)); // D Grade
        

        //4. Factorial using loop.
        function factorial($number){
            $prod = 1;
            for($i = $number;$i>1;$i--){
                $prod*=$i;
            }
            return $prod;
        }
        factorial(5);//120
        factorial(6);//720


        //5.Create right triangle with * using for loop
        for($i= 1;$i<10;$i++){ // for 10 rows
            for($j = 0;$j<$i;$j++){ // j increases upto i
                echo "*";
            }
            echo "<br>";// new line
        }

        //6.Sorting associative array according to value.
        $list = array( 
            "Italy"=>"Rome", "Luxembourg"=>"Luxembourg", 
            "Belgium"=> "Brussels", "Denmark"=>"Copenhagen", 
            "Finland"=>"Helsinki", "France" => "Paris", 
            "Slovakia"=>"Bratislava", "Slovenia"=>"Ljubljana", 
            "Germany" => "Berlin", "Greece" => "Athens", 
            "Ireland"=>"Dublin", "Netherlands"=>"Amsterdam", 
            "Portugal"=>"Lisbon", "Spain"=>"Madrid", 
            "Sweden"=>"Stockholm", "United Kingdom"=>"London", 
            "Cyprus"=>"Nicosia", "Lithuania"=>"Vilnius", 
            "Czech Republic"=>"Prague", "Estonia"=>"Tallin", 
            "Hungary"=>"Budapest", "Latvia"=>"Riga", 
            "Malta"=>"Valetta", "Austria" => "Vienna",
            "Poland"=>"Warsaw");
        
        asort($list);// asort() sorts the associative array with value
        
        // after sort, displaying the values
        foreach($list as $country => $capital){ 
            echo "The capital of $country is $capital<br>";
        }
        

        //7. Palindrome
        function palin($string){
            $newString = "";
            for($i = strlen($string)-1;$i>=0;$i--){
                $newString .= $string[$i];
            }
            return $newString==$string;
        }
        palin("madam");//true
        palin("Manoj");//false


        // 8. Functino to Swap variables
        function swap(&$a,&$b){ // & means references
            $c = $b; // store b in c
            $b = $a; // copy a to b
            $a = $c; // copy c to a 
       }  
       

       //9. Multiples of a given number
        function print_multiples($value,$terms){ 
            for($i = $value;$i<=($value*$terms);$i+=$value){
                    echo "$i<br>";
            }
        }  
        print_multiples(5,10); // 5 to 50
        print_multiples(4,20); // 4 to 80



        // 10. Armstrong Numbers
        function is_armstrong($number){ 
            $number_string = (string)$number;
            $sum = 0;
            for($i = 0;$i<strlen($number_string);$i++){
                $digit = (int)$number_string[$i];
                $sum+= ($digit*$digit*$digit);
            }
            return $sum==$number;
            
        } 
        $numbers = array(5,7,153,0,407,65); 
        foreach($numbers as $num){
            if (is_armstrong($num))
                echo "<b>$num is armstrong</b><br>";
            else 
                echo "$num is not armstrong<br>";
        }
    ?>  
</body>
</html>