var dw789 = {
    chunk: function chunk(array, size) {
        var result = [];
        var m = array.length;
        if (m % size == 0) {
            for (var i = 0; i < m; i++) {
                result.push(array.slice(i, i + size));
                i = i + size - 1;
            }
            return result;
        } else {
            for (var i = 0; i < m - m % size; i++) {
                result.push(array.slice(i, i + size));
                i = i + size - 1;
            }
            result.push(array.slice(m - m % size));
            return result;
        }
    },

    compact: function compact(array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == null || array[i] == 0 || array[i] == "" || array[i] == undefined || array[i] == NaN || array[i] == false) {
                array.splice(i, 1);
                i--;
            }
        }
        return array;
    },

    difference: function difference(array, values) {
        var map = {};
        var a = [];
        for (var i = 0; i < values.length; i++) {
            var char = values[i];
            if (!(char in map)) {
                map[char] = 1;
            }
        }
        for (var i = 0, j = 0; i < array.length; i++) {
            if (!(array[i] in map)) {
                a[j] = array[i];
                j++;
            }
        }
        return a;
    },

    drop: function drop(array, n = 1) {
        var a = [];
        if (n >= array.length || array.length == 0) {
            return [];
        }
        for (var i = n, j = 0; i < array.length; i++) {
            a[j] = array[i];
            j++;
        }
        return a;
    },

    dropRight: function dropRight(array, n = 1) {
        var a = [];
        if (n >= array.length || array.length == 0) {
            return [];
        }
        for (var i = 0, j = 0; i < array.length - n; i++) {
            a[j] = array[i];
            j++;
        }
        return a;
    },

    fill: function fill(array, value, start = 0, end = array.length) {
        for (var i = nums1; i < nums2; i++) {
            array[i] = value;
        }
        return array;
    }
}