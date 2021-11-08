/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

    "history-check": "Not Started",
    "history-tag": "grey",
    "3q-check": "Not started",
    "3q-tag": "grey",
    "bills-check": "Not started",
    "bills-tag": "grey",
    "tax-check": "Not started",
    "tax-tag": "grey",
    "tenancy-check": "Not started",
    "tenancy-tag": "grey",
    "other-check": "Not started",
    "other-tag": "grey",
    "summary-check": "Not started",
    "summary-tag": "grey",
    "submit-check": "Not started",
    "submit-tag": "grey",
    "start-date1": "Enter start date",
    "start-day1": "40",
    "start-month1": "13",
    "start-year1": "1991",
    "end-date1": "Enter end date",
    "evidence-comment1": "Enter comment",
    "start-date2": "Enter start date",
    "end-date2": "Enter end date",
    "evidence-comment2": "Enter coment"


}