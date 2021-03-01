export const simplified3DSecureSchema = {
    "paths": {
        "/3dsecure": {
            "parameters": [
            {
                "$ref": "#/components/parameters/organizationId"
            }
            ],
            "get": {
            "tags": [
                "3D Secure"
            ],
            "summary": "Retrieve a list of ThreeDSecure entries",
            "operationId": "Get3DSecureCollection",
            "parameters": [
                {
                "$ref": "#/components/parameters/collectionLimit"
                },
                {
                "$ref": "#/components/parameters/collectionOffset"
                }
            ],
            "responses": {
                "200": {
                "description": "A list was retrieved successfully.",
                "content": {
                    "application/json": {
                    "schema": {
                        "type": "array",
                        "items": {
                        "$ref": "#/components/schemas/ThreeDSecure"
                        }
                    }
                    }
                }
                },
            },
            },
            "post": {
            "tags": [
                "3D Secure"
            ],
            "summary": "Create a ThreeDSecure entry",
            "operationId": "Post3DSecure",
            "description": "Create a ThreeDSecure entry.\n",
            "requestBody": {
                "content": {
                "application/json": {
                    "schema": {
                    "$ref": "#/components/schemas/ThreeDSecure"
                    }
                }
                },
                "description": "ThreeDSecure resource.",
                "required": true
            },
            "responses": {
                "201": {
                "description": "ThreeDSecure entry was created.",
                "content": {
                    "application/json": {
                    "schema": {
                        "$ref": "#/components/schemas/ThreeDSecure"
                    }
                    }
                }
                },
            },
            }
        },
        "/3dsecure/{id}": {
            "parameters": [
                {
                    "$ref": "#/components/parameters/resourceId"
                },
                {
                    "$ref": "#/components/parameters/organizationId"
                }
            ],
            "get": {
            "summary": "Retrieve a ThreeDSecure entry",
            "operationId": "Get3DSecure",
            "description": "Retrieve a ThreeDSecure entry with specified identifier string.\n",
            "responses": {
                "200": {
                "description": "ThreeDSecure entry was retrieved successfully.",
                "content": {
                    "application/json": {
                    "schema": {
                        "$ref": "#/components/schemas/ThreeDSecure"
                    }
                    }
                }
                },
            },
            }
        },
    },
    "components": {
        "securitySchemes": {},
        "schemas": {
          "ThreeDSecure": {
            "type": "object",
            "required": [
              "enrolled",
              "enrollmentEci",
              "customerId",
              "gatewayAccountId",
              "paymentCardId",
              "websiteId",
              "currency",
              "amount"
            ],
            "properties": {
              "id": {
                "description": "The 3D Secure entry identifier string.",
                "readOnly": true,
                "allOf": [
                  {
                    "$ref": "#/components/schemas/ResourceId"
                  }
                ]
              },
              "customerId": {
                "description": "Related customer ID.",
                "allOf": [
                  {
                    "$ref": "#/components/schemas/ResourceId"
                  }
                ]
              },
              "gatewayAccountId": {
                "description": "Related gateway account ID.",
                "allOf": [
                  {
                    "$ref": "#/components/schemas/ResourceId"
                  }
                ]
              },
              "paymentCardId": {
                "description": "Related payment card ID.",
                "allOf": [
                  {
                    "$ref": "#/components/schemas/ResourceId"
                  }
                ]
              },
              "websiteId": {
                "description": "Related Website ID.",
                "allOf": [
                  {
                    "$ref": "#/components/schemas/ResourceId"
                  }
                ]
              },
              "enrolled": {
                "description": "Is the cardholder enrolled in 3DSecure.",
                "type": "string",
                "enum": [
                  "Y",
                  "N",
                  "U"
                ]
              },
              "enrollmentEci": {
                "description": "The 3D Secure entry enrollment eci.",
                "type": "string"
              },
              "eci": {
                "description": "The 3D Secure entry electronic commerce indicator.",
                "type": "integer"
              },
              "cavv": {
                "description": "The 3D Secure entry cardholder authentication verification value.",
                "type": "string"
              },
              "xid": {
                "description": "The 3D Secure entry transaction Id.",
                "type": "string"
              },
              "payerAuthResponseStatus": {
                "description": "The 3D Secure entry Auth Response Status.",
                "type": "string",
                "enum": [
                  "Y",
                  "N",
                  "U",
                  "A"
                ]
              },
              "signatureVerification": {
                "description": "If signature was verified.",
                "type": "string",
                "enum": [
                  "Y",
                  "N"
                ]
              },
              "amount": {
                "description": "Transaction amount.",
                "type": "number",
                "format": "double"
              },
              "currency": {
                "allOf": [
                  {
                    "$ref": "#/components/schemas/CurrencyCode"
                  }
                ]
              },
              "createdTime": {
                "description": "The 3D Secure entry created time.",
                "allOf": [
                  {
                    "$ref": "#/components/schemas/ServerTimestamp"
                  }
                ]
              },
              "_links": {
                "type": "array",
                "description": "The links related to resource.",
                "readOnly": true,
                "minItems": 1,
                "items": {
                  "$ref": "#/components/schemas/SelfLink"
                }
              }
            }
          },
        },
        "parameters": {
            "organizationId": {
              "name": "Organization-Id",
              "in": "header",
              "description": "Organization identifier in scope of which need to perform request (if not specified, the default organization will be used).",
              "schema": {
                "$ref": "#/components/schemas/ResourceId"
              },
              "required": false
            },
            "collectionLimit": {
              "name": "limit",
              "in": "query",
              "description": "The collection items limit.",
              "schema": {
                "type": "integer",
                "minimum": 0,
                "maximum": 1000
              }
            },
            "collectionOffset": {
              "name": "offset",
              "in": "query",
              "description": "The collection items offset.",
              "schema": {
                "type": "integer",
                "minimum": 0
              }
            },
            "resourceId": {
              "name": "id",
              "in": "path",
              "description": "The resource identifier string.",
              "required": true,
              "schema": {
                "type": "string",
                "maxLength": 50,
                "pattern": "^[@~\\-\\.\\w]+$"
              }
            },
            "collectionFilter": {
              "name": "filter",
              "in": "query",
              "description": "The collection items filter requires a special format.\nUse \",\" for multiple allowed values.  Use \";\" for multiple fields.\nSee the [filter guide](https://api-reference.rebilly.com/#section/Using-filter-with-collections) for more options and examples about this format.\n",
              "schema": {
                "type": "string"
              }
            },
            "collectionQuery": {
              "name": "q",
              "in": "query",
              "description": "The partial search of the text fields.",
              "schema": {
                "type": "string"
              }
            },
            "customerId": {
              "name": "customerId",
              "in": "path",
              "description": "The customer identifier string.",
              "required": true,
              "schema": {
                "type": "string",
                "maxLength": 50,
                "pattern": "^[@~\\-\\.\\w]+$"
              }
            },
          },
    },
};