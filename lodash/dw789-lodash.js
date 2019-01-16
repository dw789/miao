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
        for (var i = start; i < end; i++) {
            array[i] = value;
        }
        return array;
    },

    fromPairs(pairs) {
        var map = {};
        for (var i = 0; i < pairs.length; i++) {
            map[pairs[i][0]] = pairs[i][1];
        }
        return map;
    },


    head: function head(array) {
        if (array[0] == null) {
            return undefined;
        }
        return array[0];
    },

    flatten: function flatten(array) {

    },


    initial: function initial(array) {
        var a = [];
        if (array.length <= 1) {
            return [];
        }
        for (var i = 0, j = 0; i < array.length - 1; i++) {
            a[j] = array[i];
        }
        return a;
    },


    join: function join(array, separator = ",") {
        var str = "";
        for (var i = 0; i < array.length; i++) {
            if (i == array.length - 1) {
                str = str + array[i];
            } else {
                str = str + array[i] + separator;
            }
        }
        return str;
    },

    last: function last(array) {
        if (array == []) {
            return null;
        }
        return array[array.length - 1];
    },

    lastIndexOf: function lastIndexOf(array, value, fromIndex = array.length - 1) {
        for (var i = fromIndex; i >= 0; i--) {
            if (array[i] = value) {
                return i;
            }
        }
        return -1;
    },

    nth: function nth(array, n = 0) {
        if (n < 0) {
            return array[-n];
        }
        return array[n];
    },

    pull: function pull(array, ...values) {
        var a = [];
        for (var i = 0, j = 0; i < array.length; i++) {
            if (array[i] != values) {
                a[j] = array[i];
            }
        }
        return a;
    }
}