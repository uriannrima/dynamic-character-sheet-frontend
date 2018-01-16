export const Item = function ({ name, page, weight }) {
    return {
        name: name || "",
        page: page || 0,
        weight: weight || 0
    }
}

export const Factory = function (length) {
    var items = [];
    for (var index = 0; index < length; index++) {
        items.push(new Item({}));
    }
    return items;
}
