| Name | Type | Attribute | Description |
| - | - | - | - |
| limit | number | Optional | The amount of members to return per request.<br>Defaults to `100`. |
| offset | number | Optional | Member index from which to start returning results. <br>Defaults to `0`. |
| sort | string | Optional | The member field on which to sort on. Sorting is ascending by default. Use `-` (dash) to make it descending.<br>Example: `createdTime` and `-createdTime`. |
| filter | string | Optional | A list of one or more member fields and their values, used to filter the collection results.<br>Example: `status:active`.<br> See the [filters guide][guide-filters] for more details. |
| q | string | Optional | A string to search for within the indexed member fields. This is useful for members that have any field match the search value. |
| criteria | string | Optional | A stringified JSON object representing a Rebilly compatible criteria.<br> See the [criteria guide][guide-criteria] for more details.  |


[guide-filters]: ../../guides/filters.md
[guide-criteria]: ../../guides/criteria.md
