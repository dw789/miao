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
}