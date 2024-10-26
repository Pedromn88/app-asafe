import { formatDate } from "./formatDate"

export const formatValue = (key, value) => {
    if (value) {
        switch (key) {
            case "datetime":
                return formatDate(value)
            case "value":
                return value.toFixed(2)
            case "percentage":
                return `${(value * 100).toFixed(2)}%`
            default:
                return value
        }
    }
}


export const colorGraphs = (type, isTransparent = false) => {
    switch (type) {
        case "Renovable":
            return isTransparent ? "rgba(53, 161, 81, 0.2)" : "rgb(53, 161, 81)";
        case "No renovable":
            return isTransparent ? "rgba(59, 159, 209, 0.2)" : "rgb(59, 159, 209)";
        default:
            return isTransparent ? "rgba(0, 0, 0, 0.2)" : "rgb(0, 0, 0)";
    }
};


export const compareDates = (date1, date2) => {
    const today = new Date();
    const parsedDate1 = new Date(date1);
    const parsedDate2 = new Date(date2);

    const isToday = parsedDate1.toDateString() === today.toDateString();

    const isDate1Greater = parsedDate1 > parsedDate2;

    return isToday || isDate1Greater;
};

export const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
};