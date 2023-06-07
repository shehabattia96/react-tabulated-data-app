export class Filter {
    fieldName
    value
    operator
    constructor(fieldName, value, operator) {
        if (!fieldName || value === null || value === undefined || !operator) {
            throw new Error("fieldName, value and operator are required");
        }
        this.fieldName = fieldName
        this.value = value
        this.operator = operator
    }
    static equalTo(fieldName, value) {
        return new Filter(fieldName, value, "equalTo")
    }
    static greaterThan(fieldName, value) {
        return new Filter(fieldName, value, "greaterThan")
    }
    static lessThan(fieldName, value) {
        return new Filter(fieldName, value, "lessThan")
    }
    static greaterThanEqualTo(fieldName, value) {
        return new Filter(fieldName, value, "greaterThanEqualTo")
    }
    static lessThanEqualTo(fieldName, value) {
        return new Filter(fieldName, value, "lessThanEqualTo")
    }
    static arrayContains(fieldName, value) {
        return new Filter(fieldName, value, "arrayContains")
    }


    /**
     * Queries an array of data using the supplied filters, and returns the resulting array.
     * @param filtersArray 
     * @param arrayOfData 
     * @returns Filtered Array
     */
    static applyFilters(
        filtersArray: Filter[], arrayOfData: any[]
    ): any[] {
        if (filtersArray) {
            for (let filter of filtersArray) {
                switch (filter.operator) {
                    case "equalTo":
                        arrayOfData = arrayOfData.filter((currentValue) => (filter.fieldName.split(".")).reduce((acc, value) => acc && value in acc ? acc[value] : null, currentValue) == filter.value)
                        break;
                    case "greaterThan":
                        arrayOfData = arrayOfData.filter((currentValue) => (filter.fieldName.split(".")).reduce((acc, value) => acc && value in acc ? acc[value] : null, currentValue) > filter.value)
                        break;
                    case "greaterThanEqualTo":
                        arrayOfData = arrayOfData.filter((currentValue) => (filter.fieldName.split(".")).reduce((acc, value) => acc && value in acc ? acc[value] : null, currentValue) >= filter.value)
                        break;
                    case "lessThan":
                        arrayOfData = arrayOfData.filter((currentValue) => (filter.fieldName.split(".")).reduce((acc, value) => acc && value in acc ? acc[value] : null, currentValue) < filter.value)
                        break;
                    case "lessThanEqualTo":
                        arrayOfData = arrayOfData.filter((currentValue) => (filter.fieldName.split(".")).reduce((acc, value) => acc && value in acc ? acc[value] : null, currentValue) <= filter.value)
                        break;
                    case "arrayContains":
                        arrayOfData = arrayOfData.filter(currentValue => (filter.fieldName.split(".")).reduce((acc, value) => acc && value in acc ? acc[value] : null, currentValue).includes(filter.value))
                        break
                }
            }
        }
        return arrayOfData;
    }
}