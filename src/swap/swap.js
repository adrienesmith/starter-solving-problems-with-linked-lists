/**
 * Given a list and two nodes, swap the position of the two nodes
 * @param {LinkedList} list
 * @param {Node} x
 * @param {Node} y
 */

const LinkedList = require("../lib/linkedList");

function swap(list, x, y) {
    if (!list.head) {
        return list;
    }

    let x_next = x.next;
    let x_prev = list.findWithPrevious(node => node === x)[1];
    let y_prev = list.findWithPrevious(node => node === y)[1];

    x.next = y.next;
    y.next = x_next;

    x_prev ? x_prev.next = y : list.head = y;
    y_prev ? y_prev.next = x : list.head = x;

    return list;
}
module.exports = swap;
