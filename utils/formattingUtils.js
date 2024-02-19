
/**
 * Generates a human-readable timespan string based on the given timespanObject.
 *
 * @param {object} timespanObject - The timespan object containing the start and end dates.
 * @return {string} The human-readable timespan string.
 */
export const humanReadableTimespan = (timespanObject) => {
    // Check if the timespanObject has an endDate
    if (timespanObject.endDate) {
        const beginString = 'Von ' + timespanObject.startDate.toLocaleDateString();
        const endString = 'bis ' + timespanObject.endDate.toLocaleDateString();
        return beginString + ' ' + endString;
    } else {
        return 'Ab ' + timespanObject.startDate.toLocaleDateString();
    }
};

/**
 * Converts a number of bytes into a human-readable file size string.
 *
 * @param {number} bytes - The number of bytes to convert.
 * @return {string} The human-readable file size string.
 */
export const humanReadableFileSize = (bytes) => {
    if (bytes === 0) return '0 B';
    const decimalPlaces = 2;
    const base = 1000;
    const decimalMultiplier = decimalPlaces < 0 ? 0 : decimalPlaces;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const index = Math.floor(Math.log(bytes) / Math.log(base));
    const size = parseFloat((bytes / Math.pow(base, index)).toFixed(decimalMultiplier));
    return size + ' ' + sizes[index];
}