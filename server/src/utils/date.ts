
// Helper function
// @Ref-link: https://stackoverflow.com/questions/1050720/how-to-add-hours-to-a-date-object
export function addHoursToDate(date: Date, hours: number): Date {
    const currentHours = date.getHours()
    return new Date(date.setHours(currentHours + hours))
}

export function removeHoursFromDate(date: Date, hours: number): Date {
    const currentHours = date.getHours()
    return new Date(date.setHours(currentHours - hours))
}
