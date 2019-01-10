var dw789 = {
    chunk: function chunk(array, size) {
        var result = []
        for (var i = 0; i < array.length; i++) {
            result.push(array.slice(i, i + size));
        }
        return result;
    },
}