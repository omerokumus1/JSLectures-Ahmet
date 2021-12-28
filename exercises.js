{ // Bubble sort
    let arr = [5, 4, 8, 9, 6, 5, 47]
    bubbleSort(arr)
    console.log("Bubble sort result: "+arr.toString())
}

{ // Insertion Sort
    let arr = [5, 4, 8, 9, 6, 5, 47]
    insertionSort(arr)
    console.log("Insertion sort result: " + arr.toString())
}

function insertionSort(arr) {
    // |2 5 4 8 9 6 5 47
    // 2 |5 4 8 9 6 5 47
    // 2 4 |5 8 9 6 5 47
    // 2 4 5 |8 9 6 5 47
    // 2 4 5 5 |9 6 8 47
    // 2 4 5 5 6 |9 8 47
    // 2 4 5 5 6 8 |9 47
    // 2 4 5 5 6 8 9 |47

    /* TODO:
            1. Subarray (çubuğun konumu) takibi yap
            2. Çubuğun sağında bulunun sayıların minimum olanını bul
            3. Bulduğun minimum sayının indexini bul
            4. Çubuğun sağındaki sayı ile minimumu yer değiştir.
     */
    let minIndex;
    // 1. Subarray (çubuğun konumu) takibi yap
    for (let indexOfStick = 0; indexOfStick < arr.length; indexOfStick++) {
        // 3. Bulduğun minimum sayının indexini bul
        minIndex = findIndexOfMin(arr, indexOfStick)

        // 4. Çubuğun sağındaki sayı ile minimumu yer değiştir.
        swap(arr, indexOfStick, minIndex)
    }



    function findIndexOfMin(arr, indexOfStick) {
        // 2. Çubuğun sağında bulunun sayıların minimum olanını bul
        let min = findMinOfSubarray(arr, indexOfStick)
        for (let i = indexOfStick; i < arr.length; i++) {
            /* == vs ===:
             1 == "1" -> true döner: Veri tipi kontrolü yapmaz, değer kontrolü yapar
             1 === "1" -> false döner: hem veri tipi kontrolü hem de değer kontolü yapar
             1 === 3 -> false döner:
             */
            if (arr[i] === min)
                return i
        }

        function findMinOfSubarray(arr, indexOfStick) {
            let min = arr[indexOfStick]
            for (let i = indexOfStick; i < arr.length; i++) {
                if (arr[i] < min)
                    min = arr[i]
            }

            return min
        }
    }

    function swap(arr, indexOfStick, minIndex) {
        let temp = arr[indexOfStick]
        arr[indexOfStick] = arr[minIndex]
        arr[minIndex] = temp
    }

}

function bubbleSort(arr) {
    // 2 5 4 8 9 6 5 47
    // 2 4 5 8 9 6 5 47
    // 2 4 5 8 6 9 5 47
    // 2 4 5 8 6 5 9 47
    for (let i = 0; i < arr.length; i++) {
        iterateOver(arr);
    }

    // function scope
    function iterateOver(arr) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j + 1] < arr[j])
                swap(arr, j)
        }
        // function scope
        function swap(arr, index) {
            let temp = arr[index]
            arr[index] = arr[index + 1]
            arr[index + 1] = temp
        }
    }
}



