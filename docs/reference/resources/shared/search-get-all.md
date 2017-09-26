| Name | Type | Attribute | Description |
| - | - | - | - |
| limit | number | Optional | The amount of members to return per request.<br>Defaults to `100`. |
| offset | number | Optional | Member index from which to start returning results. <br>Defaults to `0`. |
| sort | string | Optional | The member field on which to sort on. Sorting is ascending by default. Use `-` (dash) to make it descending.<br>Example: `createdTime` and `-createdTime`. |
| q | string | Optional | A string to search for within the indexed member fields. This is useful for members that have any field match the search value. |


[guide-filters]: ../../guides/filters.md
