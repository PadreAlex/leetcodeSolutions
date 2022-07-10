// https://leetcode.com/problems/add-two-numbers/

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let listOfSums: ListNode = new ListNode(null);
    let returnVal: ListNode = listOfSums;
    let leftovers: number = 0;
    
    while (l1 || l2 ) {
        let sum = (l1?.val ? l1.val : 0) + (l2?.val ? l2.val : 0);
        listOfSums.next = new ListNode((sum+leftovers)% 10);
        leftovers = (sum + leftovers) >= 10 ? 1 : 0;

        listOfSums = listOfSums.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    
    if(leftovers) listOfSums.next = new ListNode(leftovers);
    
    return returnVal.next
};
