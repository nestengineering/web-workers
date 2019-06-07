// navigator​.hardware​Concurrency
const partition = (arr, left, right) => {
    const pivot = arr[right];
    let index = left;
    for (let i = left; i < right; i++) {
        if (arr[i] < pivot) {
            const tmp = arr[index];
            arr[index] = arr[i];
            arr[i] = tmp;
            index++;
        }
    }
    const tmp = arr[right];
    arr[right] = arr[index];
    arr[index] = tmp;
    return index;
}

const quicksort = (arr, left, right) => {
    if (right - left <= 0) return;
    const partitionIndex = partition(arr, left, right);
    quicksort(arr, left, partitionIndex - 1);
    quicksort(arr, partitionIndex + 1, right);
}

const generateRandom = (len) => {
    const arr = [];
    for (i = 0; i < len; i += 1) { arr[i] = i; }
    // http://stackoverflow.com/questions/962802#962890
    let tmp, current, top = arr.length;
    if (top) while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = arr[current];
        arr[current] = arr[top];
        arr[top] = tmp;
    }
    return arr;
}

const calcSortingTime = (len) => {
    const arr = generateRandom(len);
    const startTime = new Date();
    quicksort(arr, 0, arr.length - 1);
    return (new Date()).getTime() - startTime.getTime();
}

const calcNativeSortingTime = (len) => {
    const arr = generateRandom(len);
    const startTime = new Date();
    arr.sort();
    return (new Date()).getTime() - startTime.getTime();
}

const compare = (len) => {
    const res1 = [];
    const res2 = [];
    for (let i = 0; i < 100; i++) {
        res1.push(calcSortingTime(len));
        res2.push(calcNativeSortingTime(len));
    }

    let avg1 = 0;
    let avg2 = 0;
    for (let i = 0; i < res1.length; i++) {
        avg1 += res1[i];
        avg2 += res2[i];
    }

    avg1 /= res1.length;
    avg2 /= res2.length;

    return { avg1, avg2 }
}



console.error(compare(100000));
