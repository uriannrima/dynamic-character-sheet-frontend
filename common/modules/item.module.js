var item = function ({ name, page, weight }) {
    return {
        name: name || "",
        page: page || 0,
        weight: weight || 0
    }
}

var factory = function (length) {
    var items = [];
    for (var index = 0; index < length; index++) {
        items.push(new item({}));
    }
    return items;
}

exports.Item = item;
exports.Factory = factory;