
//Definition for singly-linked list.
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);
 
// var mergeTwoLists = function(l1, l2) {
//     if(!l1 || !l2) return l1 || l2
//     if(l1.val < l2.val){
//         l1.next = mergeTwoLists(l1.next, l2)
//         return l1
//     }
//     l2.next = mergeTwoLists(l1, l2.next)
//     return l2        
// };

var mergeTwoLists = function(l1, l2) {
    var head = new ListNode()
    cur = head

    while(l1 && l2){
        if(l1.val < l2.val){
            cur.next = l1;
            l1 = l1.next
        } else {
            cur.next = l2;
            l2 = l2.next
        }
        cur = cur.next
    }
    while(l1) {
        cur.next = l1;
        l1 = l1.next
        cur = cur.next
    }
    while(l2) {
        cur.next = l2;
        l2 = l2.next
        cur = cur.next
    }

    return head.next;
};


let r = (mergeTwoLists(l1,l2))
console.log(r.val)