let array = [-8, 6, 0, 9, -4, 16];

function merge(array, p, q, r) {


    let k = p;
    let i;
    let j;

    let lowerHalf = [];
    let upperHalf = [];

    for (i = 0; k <= q; i++, k++) {
        lowerHalf[i] = array[k];
    }
    for (j = 0; k <= r; j++, k++) { //needs j to = 0 so it fills in second array starting at index [0] instead of skipping forward
        upperHalf[j] = array[k];
    }

    k = p;
    i = 0;
    j = 0;

    for (let k = 0; k <= r; k++) {
        if (i > array.length-1) {array[k] = upperHalf[j]; break;}
        if (j > array.length-1) {array[k] = lowerHalf[i]; break;}

        if (lowerHalf[i] < upperHalf[j]) {
            array[k] = lowerHalf[i];
            i++;
        } else {
            array[k] = upperHalf[j];
            j++
        }
    }



}

function mergeSort(array, p, r) {
    if (r > p) {
        let q = Math.floor((p+r)/2)
        mergeSort(array, p, q);
        mergeSort(array, q + 1, r);
        merge(array, p, q, r);
    }
}

mergeSort(array, 0, array.length - 1);

console.log(array);