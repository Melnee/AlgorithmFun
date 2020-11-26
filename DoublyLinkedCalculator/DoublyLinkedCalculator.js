// ██╗     ██╗███████╗████████╗     ██████╗██╗      █████╗ ███████╗███████╗
// ██║     ██║██╔════╝╚══██╔══╝    ██╔════╝██║     ██╔══██╗██╔════╝██╔════╝
// ██║     ██║███████╗   ██║       ██║     ██║     ███████║███████╗███████╗
// ██║     ██║╚════██║   ██║       ██║     ██║     ██╔══██║╚════██║╚════██║
// ███████╗██║███████║   ██║       ╚██████╗███████╗██║  ██║███████║███████║
// ╚══════╝╚═╝╚══════╝   ╚═╝        ╚═════╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝

                   
class DoublyLinkedList{
    constructor(head = null){
        this.head = head;
    }
}

// ███╗   ██╗ ██████╗ ██████╗ ███████╗     ██████╗██╗      █████╗ ███████╗███████╗
// ████╗  ██║██╔═══██╗██╔══██╗██╔════╝    ██╔════╝██║     ██╔══██╗██╔════╝██╔════╝
// ██╔██╗ ██║██║   ██║██║  ██║█████╗      ██║     ██║     ███████║███████╗███████╗
// ██║╚██╗██║██║   ██║██║  ██║██╔══╝      ██║     ██║     ██╔══██║╚════██║╚════██║
// ██║ ╚████║╚██████╔╝██████╔╝███████╗    ╚██████╗███████╗██║  ██║███████║███████║
// ╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ ╚══════╝     ╚═════╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝                                                                     
                                   
 class Node{
     constructor(value, previous = null, next = null){
        this.value = value;
        this.previous = previous;
        this.next = next;
     }
 }






//  ██╗   ██╗███████╗███████╗██████╗     ██╗███╗   ██╗██████╗ ██╗   ██╗████████╗
//  ██║   ██║██╔════╝██╔════╝██╔══██╗    ██║████╗  ██║██╔══██╗██║   ██║╚══██╔══╝
//  ██║   ██║███████╗█████╗  ██████╔╝    ██║██╔██╗ ██║██████╔╝██║   ██║   ██║   
//  ██║   ██║╚════██║██╔══╝  ██╔══██╗    ██║██║╚██╗██║██╔═══╝ ██║   ██║   ██║   
//  ╚██████╔╝███████║███████╗██║  ██║    ██║██║ ╚████║██║     ╚██████╔╝   ██║   
//   ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝    ╚═╝╚═╝  ╚═══╝╚═╝      ╚═════╝    ╚═╝   

var newList = new DoublyLinkedList();

var testInput = "1+3+4+6+7";
var symbols = ["+", "-", "/", "*"];

for(var i = 0; i < testInput.length; i++){
    //create a new node to store the character
    var newNode = new Node(testInput[i]);
    //check if the list is empty
    if(newList.head == (null)){
        newList.head = newNode;
    //if it's not empty, place the new node at the end, using a runner
    }else{
        var runner = newList.head;
        while(runner.next != null){
            runner = runner.next;
        }
        runner.next = newNode;
    }
}


//to test that it worked, create a runner and print every value in the list

var runner = newList.head;
console.log(runner.value)
while(runner.next != null){
    console.log(runner.next.value);
    runner = runner.next;
}

//it worked!!! :D