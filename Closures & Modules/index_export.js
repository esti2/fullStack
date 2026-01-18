const StringFormatter = function () {
    const capitalizeFirst = function (str) {
        return str[0].toUpperCase() + str.substring(1).toLowerCase();
    }

    const toSkewerCase = function (str) {
        return str.replaceAll(' ', '-');
    }
    return { capitalizeFirst, toSkewerCase }
}

module.exports = StringFormatter;
