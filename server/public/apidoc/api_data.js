define({ "api": [
  {
    "type": "get",
    "url": "/api/buildings",
    "title": "Get All Building",
    "name": "GetBuildings",
    "group": "Building",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "buildings",
            "description": "<p>List of Buildings.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "buildings.Id",
            "description": "<p>Unique Building Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "buildings.Name",
            "description": "<p>Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "buildings.Latitude",
            "description": "<p>Latitude.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "buildings.Longitude",
            "description": "<p>Longitude.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n   \"Id\": 1,\n   \"Name\": \"Building13i\",\n   \"Latitude\": \"35.9054198\",\n   \"Longitude\": \"-78.8648683\"\n}]",
          "type": "Object[]"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BuildingNotFound",
            "description": "<p>Building list not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Building Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Get All Building and Floor information.</p>",
    "version": "0.0.0",
    "filename": "server/routes/buildingRoute.js",
    "groupTitle": "Building"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "server/public/apidoc/main.js",
    "group": "C__Users_1000213_Desktop_RTI_BackendApplication_server_public_apidoc_main_js",
    "groupTitle": "C__Users_1000213_Desktop_RTI_BackendApplication_server_public_apidoc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/api/contactus",
    "title": "Get Contact Us Detail",
    "name": "GetContactUs",
    "group": "ContactUs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PageTitle",
            "description": "<p>PageTitle.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PageHeading",
            "description": "<p>Page Heading.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PageContent",
            "description": "<p>Page Content.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "EmailAddress",
            "description": "<p>Email Address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ContactNo",
            "description": "<p>Contact No.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"PageTitle\": \"Contact us\",\n   \"PageHeading\": \"Having trouble?\",\n   \"PageContent\": \"Please contact at the below email or the contact number provided.\",\n   \"EmailAddress\": \"issues@thecompany.com\",\n   \"ContactNo\": \"+912 345 567 5656\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ContactUsNotFound",
            "description": "<p>Contact Us not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"error\": \"Contact Us Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Get Contact Details.</p>",
    "version": "0.0.0",
    "filename": "server/routes/contactUsRoute.js",
    "groupTitle": "ContactUs"
  },
  {
    "type": "get",
    "url": "/api/faq",
    "title": "Get FAQ Detail",
    "name": "GetFAQ",
    "group": "FAQ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PageTitle",
            "description": "<p>PageTitle.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PageHeading",
            "description": "<p>Page Heading.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PageContent",
            "description": "<p>Page Content.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "FAQ",
            "description": "<p>List of Frequently Asked Question/Answer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"PageTitle\": \"FAQ\",\n   \"PageHeading\": \"Having Questions?\",\n   \"PageContent\": \"Please see the frequently asked questions below.\",\n     \"FAQ\": [{\n         \"FAQId\": 1,\n         \"Question\": \"Question Number One\",\n         \"Answer\": \"Answer 1\",\n         \"DisplayOrder\": 1\n     }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FAQNotFound",
            "description": "<p>FAQ not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"error\": \"FAQ Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Get All FAQ Details</p>",
    "version": "0.0.0",
    "filename": "server/routes/faqRoute.js",
    "groupTitle": "FAQ"
  },
  {
    "type": "get",
    "url": "/geo/building",
    "title": "Get GeoJson",
    "name": "GetBuildingGeoJson",
    "group": "GeoJson",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "GeoJson",
            "description": "<p>Data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"type\": \"FeatureCollection\",\n  \"features\": []\n}",
          "type": "Object"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": ".",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Get GeoJson.</p>",
    "version": "0.0.0",
    "filename": "server/routes/geojsonRoute.js",
    "groupTitle": "GeoJson"
  },
  {
    "type": "get",
    "url": "/geo/parking",
    "title": "Get GeoJson",
    "name": "GetParkingGeoJson",
    "group": "GeoJson",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "GeoJson",
            "description": "<p>Data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"type\": \"FeatureCollection\",\n  \"features\": []\n}",
          "type": "Object"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": ".",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Get GeoJson.</p>",
    "version": "0.0.0",
    "filename": "server/routes/geojsonRoute.js",
    "groupTitle": "GeoJson"
  },
  {
    "type": "post",
    "url": "/api/graph/acceptevent/:id",
    "title": "Accept Event",
    "name": "AcceptEvent",
    "group": "Graph",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "event",
            "description": "<p>Accept Event.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"IsSuccess\": true,\n   \"Message\": \"Meeting Accepted\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotAccepted",
            "description": "<p>Event not Accepted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"error\": \"Event Not Accepted\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Accept Event.</p>",
    "version": "0.0.0",
    "filename": "server/routes/graphRoute.js",
    "groupTitle": "Graph"
  },
  {
    "type": "post",
    "url": "/api/graph/CheckRoomAvailability",
    "title": "Check Room Availability",
    "name": "CheckRoomAvailability",
    "group": "Graph",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "search",
            "description": "<p>Search object to Check Room Availability.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"MeetingStartTime\":\"2018-01-27T12:00:00\",\n  \"MeetingEndTime\": \"2018-01-27T12:30:00\",\n  \"Location\": {\n               \"LocationEmailAddress\": \"confroom1@3iinfotechtest.onmicrosoft.com\"\n              }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "roomAvailabilityStatus",
            "description": "<p>Room Availability Status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"IsSuccess\": true,\n   \"Message\": \"Room Available\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RoomNotFound",
            "description": "<p>Room not Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"error\": \"Room Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Check Room Availability.</p>",
    "version": "0.0.0",
    "filename": "server/routes/graphRoute.js",
    "groupTitle": "Graph"
  },
  {
    "type": "get",
    "url": "/api/Graph/confroomevents/:startdate/:enddate/:emailAddress",
    "title": "Get ConfRoom Events",
    "name": "ConfRoomEvents",
    "group": "Graph",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>ConfRoom Events.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "events.Id",
            "description": "<p>Unique Id of Event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.Subject",
            "description": "<p>Subject.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "events.IsCancelled",
            "description": "<p>IsCancelled.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "events.IsOrganizer",
            "description": "<p>IsOrganizer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.ResponseStatus",
            "description": "<p>Response Status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.DisplayInNotification",
            "description": "<p>Display In Notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.StartDate",
            "description": "<p>Start Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.Notes",
            "description": "<p>Notes.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.EndDate",
            "description": "<p>End Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.Location",
            "description": "<p>Location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.RoomName",
            "description": "<p>Room Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "events.Attendees",
            "description": "<p>Attendees.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [{\n  \"Id\": \"AAMkADhkZDQyNTFhLTZkMjktNGRiNC05MGQxLWIxMjMyZDA2Y2NiOQBGAAAAAABEDQVPkXrOQ7PB3WVxPagfBwCKM_8X0n9kTaTGpyoXkofAAAAAAAENAACKM_8X0n9kTaTGpyoXkofAAAAe1oP3AAA=\",\n  \"Subject\": \"Test ConfRoom Event\",\n  \"IsCancelled\": false,\n  \"IsOrganizer\": false,\n  \"ResponseStatus\": \"notresponded\",\n  \"DisplayInNotification\": true,\n  \"StartDate\": \"2018-02-10T05:00:00.0000000\",\n  \"Notes\": \"Ba\",\n  \"EndDate\": \"2018-02-10T05:30:00.0000000\",\n  \"Location\": \"Conf Room 1\",\n  \"RoomName\": \"Conf Room 1\",\n  \"Attendees\": [\n      {\n          \"DispayName\": \"testing One\",\n          \"EmailAddress\": \"test1@3iinfotechtest.onmicrosoft.com\"\n      },\n      {\n          \"DispayName\": \"testing Two\",\n          \"EmailAddress\": \"test2@3iinfotechtest.onmicrosoft.com\"\n      }\n  ]\n }]",
          "type": "Object"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotFound",
            "description": "<p>No Event Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"No Event Found\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Get Conf. Room Events for given date range.</p>",
    "version": "0.0.0",
    "filename": "server/routes/graphRoute.js",
    "groupTitle": "Graph"
  },
  {
    "type": "post",
    "url": "/api/graph/event",
    "title": "Create Event",
    "name": "CreateEvent",
    "group": "Graph",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "event",
            "description": "<p>Event object to create new Event.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"MeetingName\": \"TEST API MEETING\",\n  \"MeetingDescription\": \"Test Meeting\",\n  \"MeetingStartTime\":\"2018-01-27T12:00:00\",\n  \"MeetingEndTime\": \"2018-01-27T12:30:00\",\n  \"Attendees\": [\n   {\n       \"DispayName\": \"Maulik Shah\",\n       \"EmailAddress\": \"maulik@3iinfotechtest.onmicrosoft.com\"\n   },\n   {\n       \"DispayName\": \"Mobile RTI\",\n       \"EmailAddress\": \"mobile@3iinfotechtest.onmicrosoft.com\"\n   },\n  {\n       \"DispayName\": \"Conf Room 1\",\n       \"EmailAddress\": \"confroom1@3iinfotechtest.onmicrosoft.com\"\n   }\n],\n\"Location\": {\n               \"LocationEmailAddress\": \"confroom1@3iinfotechtest.onmicrosoft.com\" ,\n               \"DisplayName\": \"Conf Room 1\"\n           }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "event",
            "description": "<p>Newly Created Event.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"IsSuccess\": true,\n   \"Message\": \"Meeting Created Successfully\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotCreated",
            "description": "<p>Event not Created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"error\": \"Event Not Created\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Create New Meeting .</p>",
    "version": "0.0.0",
    "filename": "server/routes/graphRoute.js",
    "groupTitle": "Graph"
  },
  {
    "type": "post",
    "url": "/api/graph/declineevent/:id",
    "title": "Decline Event",
    "name": "DeclineEvent",
    "group": "Graph",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "event",
            "description": "<p>Decline Event.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"IsSuccess\": true,\n   \"Message\": \"Meeting Declined\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotDeclined",
            "description": "<p>Event not Declined.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"error\": \"Event Not Declined\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Decline Event.</p>",
    "version": "0.0.0",
    "filename": "server/routes/graphRoute.js",
    "groupTitle": "Graph"
  },
  {
    "type": "post",
    "url": "/api/graph/forwardevent/:id",
    "title": "Forward Event",
    "name": "ForwardEvent",
    "group": "Graph",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "event",
            "description": "<p>Event object to forward Event.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\"ForwardAttendees\": [\n   {\n       \"DispayName\": \"Maulik Shah\",\n       \"EmailAddress\": \"maulik@3iinfotechtest.onmicrosoft.com\"\n   },\n   {\n       \"DispayName\": \"Mobile RTI\",\n       \"EmailAddress\": \"mobile@3iinfotechtest.onmicrosoft.com\"\n   },\n  {\n       \"DispayName\": \"Conf Room 1\",\n       \"EmailAddress\": \"confroom1@3iinfotechtest.onmicrosoft.com\"\n   }\n]}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "event",
            "description": "<p>Event Forwarded.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"IsSuccess\": true,\n   \"Message\": \"Meeting Forwarded Successfully\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotForwarded",
            "description": "<p>Event not Forwarded.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"error\": \"Event Not Forwarded\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Forward Event to other users.</p>",
    "version": "0.0.0",
    "filename": "server/routes/graphRoute.js",
    "groupTitle": "Graph"
  },
  {
    "type": "get",
    "url": "/api/Graph/event/:id",
    "title": "Get Event By Id",
    "name": "GetEventById",
    "group": "Graph",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "event",
            "description": "<p>Event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.Id",
            "description": "<p>Unique Id of Event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.Subject",
            "description": "<p>Subject.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "event.IsCancelled",
            "description": "<p>IsCancelled.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "event.IsOrganizer",
            "description": "<p>IsOrganizer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.ResponseStatus",
            "description": "<p>Response Status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.DisplayInNotification",
            "description": "<p>Display In Notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.StartDate",
            "description": "<p>Start Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.Notes",
            "description": "<p>Notes.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.EndDate",
            "description": "<p>End Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.Location",
            "description": "<p>Location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.RoomName",
            "description": "<p>Room Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "event.Attendees",
            "description": "<p>Attendees.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  \"Id\": \"AAMkADhkZDQyNTFhLTZkMjktNGRiNC05MGQxLWIxMjMyZDA2Y2NiOQBGAAAAAABEDQVPkXrOQ7PB3WVxPagfBwCKM_8X0n9kTaTGpyoXkofAAAAAAAENAACKM_8X0n9kTaTGpyoXkofAAAAe1oP3AAA=\",\n  \"Subject\": \"Testing Event\",\n  \"IsCancelled\": false,\n  \"IsOrganizer\": false,\n  \"ResponseStatus\": \"notresponded\",\n  \"DisplayInNotification\": true,\n  \"StartDate\": \"2018-02-14T04:00:00.0000000\",\n  \"Notes\": \"Ba\",\n  \"EndDate\": \"2018-02-14T04:30:00.0000000\",\n  \"Location\": \"Conf Room 4\",\n  \"RoomName\": \"Conf Room 4\",\n  \"Attendees\": [\n      {\n          \"DispayName\": \"testing One\",\n          \"EmailAddress\": \"test1@3iinfotechtest.onmicrosoft.com\"\n      },\n      {\n          \"DispayName\": \"testing Two\",\n          \"EmailAddress\": \"test2@3iinfotechtest.onmicrosoft.com\"\n      }\n  ]\n }",
          "type": "Object"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotFound",
            "description": "<p>No Event Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"No Event Found\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Get Events Detail by Event Id</p>",
    "version": "0.0.0",
    "filename": "server/routes/graphRoute.js",
    "groupTitle": "Graph"
  },
  {
    "type": "get",
    "url": "/api/Graph/events/:startdate/:enddate",
    "title": "Get Events",
    "name": "GetEvents",
    "group": "Graph",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>Events.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "events.Id",
            "description": "<p>Unique Id of Event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.Subject",
            "description": "<p>Subject.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "events.IsCancelled",
            "description": "<p>IsCancelled.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "events.IsOrganizer",
            "description": "<p>IsOrganizer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.ResponseStatus",
            "description": "<p>Response Status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.DisplayInNotification",
            "description": "<p>Display In Notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.StartDate",
            "description": "<p>Start Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.Notes",
            "description": "<p>Notes.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.EndDate",
            "description": "<p>End Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.Location",
            "description": "<p>Location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.RoomName",
            "description": "<p>Room Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "events.Attendees",
            "description": "<p>Attendees.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [{\n  \"Id\": \"AAMkADhkZDQyNTFhLTZkMjktNGRiNC05MGQxLWIxMjMyZDA2Y2NiOQBGAAAAAABEDQVPkXrOQ7PB3WVxPagfBwCKM_8X0n9kTaTGpyoXkofAAAAAAAENAACKM_8X0n9kTaTGpyoXkofAAAAe1oP3AAA=\",\n  \"Subject\": \"Test Event\",\n  \"IsCancelled\": false,\n  \"IsOrganizer\": false,\n  \"ResponseStatus\": \"notresponded\",\n  \"DisplayInNotification\": true,\n  \"StartDate\": \"2018-02-14T04:00:00.0000000\",\n  \"Notes\": \"Ba\",\n  \"EndDate\": \"2018-02-14T04:30:00.0000000\",\n  \"Location\": \"Conf Room 4\",\n  \"RoomName\": \"Conf Room 4\",\n  \"Attendees\": [\n      {\n          \"DispayName\": \"testing One\",\n          \"EmailAddress\": \"test1@3iinfotechtest.onmicrosoft.com\"\n      },\n      {\n          \"DispayName\": \"testing Two\",\n          \"EmailAddress\": \"test2@3iinfotechtest.onmicrosoft.com\"\n      }\n  ]\n }]",
          "type": "Object"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotFound",
            "description": "<p>No Event Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"No Event Found\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Get Events for given date range.</p>",
    "version": "0.0.0",
    "filename": "server/routes/graphRoute.js",
    "groupTitle": "Graph"
  },
  {
    "type": "get",
    "url": "/api/Graph/eventsBySubject/:subject",
    "title": "Get Events By Subject",
    "name": "GetEventsBySubject",
    "group": "Graph",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>Events.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "events.Id",
            "description": "<p>Unique Id of Event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.Subject",
            "description": "<p>Subject.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "events.IsCancelled",
            "description": "<p>IsCancelled.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "events.IsOrganizer",
            "description": "<p>IsOrganizer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.ResponseStatus",
            "description": "<p>Response Status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.DisplayInNotification",
            "description": "<p>Display In Notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.StartDate",
            "description": "<p>Start Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.Notes",
            "description": "<p>Notes.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.EndDate",
            "description": "<p>End Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.Location",
            "description": "<p>Location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.RoomName",
            "description": "<p>Room Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "events.Attendees",
            "description": "<p>Attendees.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [{\n  \"Id\": \"AAMkADhkZDQyNTFhLTZkMjktNGRiNC05MGQxLWIxMjMyZDA2Y2NiOQBGAAAAAABEDQVPkXrOQ7PB3WVxPagfBwCKM_8X0n9kTaTGpyoXkofAAAAAAAENAACKM_8X0n9kTaTGpyoXkofAAAAe1oP3AAA=\",\n  \"Subject\": \"Test Event-Subject\",\n  \"IsCancelled\": false,\n  \"IsOrganizer\": false,\n  \"ResponseStatus\": \"notresponded\",\n  \"DisplayInNotification\": true,\n  \"StartDate\": \"2018-02-14T04:00:00.0000000\",\n  \"Notes\": \"Ba\",\n  \"EndDate\": \"2018-02-14T04:30:00.0000000\",\n  \"Location\": \"Conf Room 4\",\n  \"RoomName\": \"Conf Room 4\",\n  \"Attendees\": [\n      {\n          \"DispayName\": \"testing One\",\n          \"EmailAddress\": \"test1@3iinfotechtest.onmicrosoft.com\"\n      },\n      {\n          \"DispayName\": \"testing Two\",\n          \"EmailAddress\": \"test2@3iinfotechtest.onmicrosoft.com\"\n      }\n  ]\n }]",
          "type": "Object"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotFound",
            "description": "<p>No Event Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"No Event Found\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Filter Events By Subject.</p>",
    "version": "0.0.0",
    "filename": "server/routes/graphRoute.js",
    "groupTitle": "Graph"
  },
  {
    "type": "get",
    "url": "/api/graph/users",
    "title": "Get User List",
    "name": "GetUsers",
    "group": "Graph",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of Users.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.DispayName",
            "description": "<p>Dispay Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.EmailAddress",
            "description": "<p>Email Address.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"DispayName\": \"Web Test\",\n  \"EmailAddress\": \"web@3iinfotechtest.onmicrosoft.com\"\n}]",
          "type": "Object[]"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>List of Users not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"User Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Get Users.</p>",
    "version": "0.0.0",
    "filename": "server/routes/graphRoute.js",
    "groupTitle": "Graph"
  },
  {
    "type": "get",
    "url": "/api/Graph/notificationevents/:startdate/:enddate",
    "title": "Notification Events",
    "name": "NotificationEvents",
    "group": "Graph",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>Notification Events.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "events.Id",
            "description": "<p>Unique Id of Event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.Subject",
            "description": "<p>Subject.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "events.IsCancelled",
            "description": "<p>IsCancelled.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "events.IsOrganizer",
            "description": "<p>IsOrganizer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.ResponseStatus",
            "description": "<p>Response Status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.DisplayInNotification",
            "description": "<p>Display In Notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.StartDate",
            "description": "<p>Start Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.Notes",
            "description": "<p>Notes.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.EndDate",
            "description": "<p>End Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.Location",
            "description": "<p>Location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.RoomName",
            "description": "<p>Room Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "events.Attendees",
            "description": "<p>Attendees.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [{\n  \"Id\": \"AAMkADhkZDQyNTFhLTZkMjktNGRiNC05MGQxLWIxMjMyZDA2Y2NiOQBGAAAAAABEDQVPkXrOQ7PB3WVxPagfBwCKM_8X0n9kTaTGpyoXkofAAAAAAAENAACKM_8X0n9kTaTGpyoXkofAAAAe1oP3AAA=\",\n  \"Subject\": \"Againiosadvancemuktesting\",\n  \"IsCancelled\": false,\n  \"IsOrganizer\": false,\n  \"ResponseStatus\": \"notresponded\",\n  \"DisplayInNotification\": true,\n  \"StartDate\": \"2018-02-14T04:00:00.0000000\",\n  \"Notes\": \"Ba\",\n  \"EndDate\": \"2018-02-14T04:30:00.0000000\",\n  \"Location\": \"Conf Room 4\",\n  \"RoomName\": \"Conf Room 4\",\n  \"Attendees\": [\n      {\n          \"DispayName\": \"testing One\",\n          \"EmailAddress\": \"test1@3iinfotechtest.onmicrosoft.com\"\n      },\n      {\n          \"DispayName\": \"testing Two\",\n          \"EmailAddress\": \"test2@3iinfotechtest.onmicrosoft.com\"\n      }\n  ]\n }]",
          "type": "Object"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotFound",
            "description": "<p>No Event Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"No Event Found\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Get Notification Events for given date range.</p>",
    "version": "0.0.0",
    "filename": "server/routes/graphRoute.js",
    "groupTitle": "Graph"
  },
  {
    "type": "put",
    "url": "/api/graph/event/:id",
    "title": "Update Event",
    "name": "UpdateEvent",
    "group": "Graph",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "event",
            "description": "<p>Event object to Update existing Event.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"MeetingName\": \"TEST API MEETING Update\",\n  \"MeetingDescription\": \"Test Meeting\",\n  \"MeetingStartTime\":\"2018-01-27T12:00:00\",\n  \"MeetingEndTime\": \"2018-01-27T12:30:00\",\n  \"Attendees\": [\n   {\n       \"DispayName\": \"Maulik Shah\",\n       \"EmailAddress\": \"maulik@3iinfotechtest.onmicrosoft.com\"\n   },\n   {\n       \"DispayName\": \"Mobile RTI\",\n       \"EmailAddress\": \"mobile@3iinfotechtest.onmicrosoft.com\"\n   },\n  {\n       \"DispayName\": \"Conf Room 1\",\n       \"EmailAddress\": \"confroom1@3iinfotechtest.onmicrosoft.com\"\n   }\n],\n\"Location\": {\n               \"LocationEmailAddress\": \"confroom1@3iinfotechtest.onmicrosoft.com\" ,\n               \"DisplayName\": \"Conf Room 1\"\n           }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "event",
            "description": "<p>Update Event.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"IsSuccess\": true,\n   \"Message\": \"Meeting Updated Successfully\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotCreated",
            "description": "<p>Event not Updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"error\": \"Event Not Updated\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Update Existing Meeting.</p>",
    "version": "0.0.0",
    "filename": "server/routes/graphRoute.js",
    "groupTitle": "Graph"
  },
  {
    "type": "post",
    "url": "/api/login/DeRegDevice",
    "title": "DeRegister Device",
    "name": "DeRegDevice",
    "group": "Login",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "deRegister",
            "description": "<p>Device DeRegistered.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"IsSuccess\": true,\n   \"Message\": \"Device Registration Removed\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DeRegDeviceNotWork",
            "description": "<p>Unable to DeRegister Device.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"error\": \" Error while DeRegistering Device\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>De Reg. Device Information from Azure Notification hub.</p>",
    "version": "0.0.0",
    "filename": "server/routes/authRoute.js",
    "groupTitle": "Login"
  },
  {
    "type": "post",
    "url": "/api/login/gettoken",
    "title": "Get Accesstoken From Code",
    "name": "GetAccesstokenFromCode",
    "group": "Login",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "login",
            "description": "<p>Login Object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \n  \"code\":\"xxx\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "access",
            "description": "<p>Login Successfull.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IntcInRva2VuX3R5cGVcIjpcIkJlYXJlclwiLF\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidCredential",
            "description": "<p>Invalid Credential.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"error\": \"Invalid Credential\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Validate Oraganization Azure AD User based on username and password.</p> <p>If user is valid generate encrypted token.</p>",
    "version": "0.0.0",
    "filename": "server/routes/authRoute.js",
    "groupTitle": "Login"
  },
  {
    "type": "post",
    "url": "/api/login/GetAllRegDevice",
    "title": "Get All RegDevice",
    "name": "GetAllRegDevice",
    "group": "Login",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "registeredDevices",
            "description": "<p>Object containing list of Registered Devices.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"IsSuccess\": true,\n   \"Message\": [\n       {\n           \"ETag\": \"1\",\n           \"ExpirationTime\": \"9999-12-31T23:59:59.999Z\",\n           \"RegistrationId\": \"6511414724598829061-6619075556571450620-2\",\n           \"Tags\": \"test2@3iinfotechtest.onmicrosoft.com\",\n           \"DeviceToken\": \"2B79CB0AC4B74AF46B3884FF7E85FC221D7408C2B45955E88F095F3D80EB8302\",\n           \"BodyTemplate\": \"{\\\"aps\\\":{\\\"alert\\\":\\\"$(message)\\\",\\\"badge\\\":1,\\\"content-available\\\":\\\"1\\\",\\\"title\\\":\\\"$(title)\\\",\\\"message\\\":\\\"$(message)\\\",\\\"meetingName\\\":\\\"$(meetingname)\\\",\\\"meetingRoom\\\":\\\"$(meetingroom)\\\",\\\"organizer\\\":\\\"$(orgaizername)\\\",\\\"startdateTime\\\":\\\"$(startdateTime)\\\",\\\"enddateTime\\\":\\\"$(enddateTime)\\\"}}\",\n           \"Expiry\": \"\",\n           \"TemplateName\": \"\",\n           \"_\": {\n               \"ContentRootElement\": \"AppleTemplateRegistrationDescription\",\n               \"id\": \"https://rtidevtest.servicebus.windows.net/RTIDEVENV/registrations/6511414724598829061-6619075556571450620-2?api-version=2013-07\",\n               \"title\": \"6511414724598829061-6619075556571450620-2\",\n               \"published\": \"2018-02-20T09:31:44Z\",\n               \"updated\": \"2018-02-20T09:31:44Z\",\n               \"link\": \"\"\n            }\n       }\n   ]\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RegisteredDeviceNotFond",
            "description": "<p>Registered Device Not Fond.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"error\": \"Registered Device Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Get All Reg. Device Information from Azure Notification hub.</p>",
    "version": "0.0.0",
    "filename": "server/routes/authRoute.js",
    "groupTitle": "Login"
  },
  {
    "type": "post",
    "url": "/api/login/RegisterDevice",
    "title": "Register Device",
    "name": "RegisterDevice",
    "group": "Login",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "registerDevice",
            "description": "<p>Register Device Object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"DeviceToken\":\"abcdefghijklmnopqrstuvwxyz\",\n  \"UserEmail\":\"confroom1@3iinfotechtest.onmicrosoft.com\",\n  \"DeviceType\":\"android\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "registerDevice",
            "description": "<p>Device Registered.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"IsSuccess\": true,\n   \"Message\": \"Device Registered Successfully\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DeviceNotRegistered",
            "description": "<p>Device not Registered.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"error\": \"Device Not Registered\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Test API For Mobile Device Registraton.</p>",
    "version": "0.0.0",
    "filename": "server/routes/authRoute.js",
    "groupTitle": "Login"
  },
  {
    "type": "post",
    "url": "/api/login/TestNotification",
    "title": "Send Test Notification",
    "name": "TestNotification",
    "group": "Login",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "testNotification",
            "description": "<p>Test Notification Object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"UserTag\":\"test@3i-infotech.com\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "testNotification",
            "description": "<p>Test Notification Send.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"IsSuccess\": true,\n   \"Message\": \"Notification Sent Successfully\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TestNotificationNotSend",
            "description": "<p>Test Notification not Send.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"error\": \" Error while sending notification\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Send Test Notification to Register User.</p>",
    "version": "0.0.0",
    "filename": "server/routes/authRoute.js",
    "groupTitle": "Login"
  },
  {
    "type": "post",
    "url": "/api/login/",
    "title": "Validate User",
    "name": "Validate_User",
    "group": "Login",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "login",
            "description": "<p>Login Object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \n  \"username\":\"xxx@domain.com\",\n  \"password\":\"password\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "login",
            "description": "<p>Login Successfull.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IntcInRva2VuX3R5cGVcIjpcIkJlYXJlclwiLF\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidCredential",
            "description": "<p>Invalid Credential.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"error\": \"Invalid Credential\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Validate Oraganization Azure AD User based on username and password.</p> <p>If user is valid generate encrypted token.</p>",
    "version": "0.0.0",
    "filename": "server/routes/authRoute.js",
    "groupTitle": "Login"
  },
  {
    "type": "post",
    "url": "/api/Navigation/OutDoorNavigation",
    "title": "Out-Door Navigation",
    "name": "POSTOutDoorNavigation",
    "group": "Navigation",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name Of Destionation Location. (eg. Conf Room 1)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Conf Room 1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "Navigation",
            "description": "<p>Out-Door Navigation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"Steps\": [\n       {\n           \"msg\": \"Come outside of BuildingA3i\",\n           \"usecordinate\": false\n       },\n       {\n           \"msg\": \"Move from BuildingA3i to Building13i\",\n           \"usecordinate\": true\n       },\n       {\n           \"msg\": \"Take elevator to go to the Building 1 Floor 1 and you will reach your destination.\",\n           \"usecordinate\": false\n       }\n   ],\n   \"Path\": [\n       {\n           \"lat\": 35.9044441,\n           \"lng\": -78.8678491\n       },\n       {\n           \"lat\": 35.9054198,\n           \"lng\": -78.8648683\n       },\n       {\n           \"lat\": 35.9054198,\n           \"lng\": -78.8648683\n       }\n   ],\n   \"SourceBuilding\": {\n       \"Id\": 2,\n       \"Name\": \"BuildingA3i\",\n       \"Latitude\": \"35.9044441\",\n       \"Longitude\": \"-78.8678491\"\n   },\n   \"DestinationBuilding\": {\n       \"Id\": 1,\n       \"Name\": \"Building13i\",\n       \"Latitude\": \"35.9054198\",\n       \"Longitude\": \"-78.8648683\",\n       \"FloorName\": \"Building 1 Floor 1\"\n   }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OutDoorNavigationNotFound",
            "description": "<p>OutDoor Navigation not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"error\": \"Out Door Navigation Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/navigationRoute.js",
    "groupTitle": "Navigation"
  },
  {
    "type": "post",
    "url": "/api/Navigation/FindDirection",
    "title": "Find Direction Navigation",
    "name": "PostFindDirectionNavigation",
    "group": "Navigation",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sourcelatitude",
            "description": "<p>Latitude of Source Location.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sourcelongitude",
            "description": "<p>Longitude Of Source Location.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destinationlatitude",
            "description": "<p>Latitude of Destination Location.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destinationlongitude",
            "description": "<p>Longitude of Destination Location.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"sourcelatitude\": 35.9052828250,\n  \"sourcelongitude\": -78.862943144,\n  \"destinationlatitude\": 35.865916280,\n  \"destinationlongitude\": -78.865916281\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "Navigation",
            "description": "<p>Find Direction Navigation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  [\n       {\n           \"lat\": 35.9044441,\n           \"lng\": -78.8678491\n       },\n       {\n           \"lat\": 35.9054198,\n           \"lng\": -78.8648683\n       },\n       {\n           \"lat\": 35.9054198,\n           \"lng\": -78.8648683\n       }\n   ]\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FindDirectionNotFound",
            "description": "<p>Find Direction Navigation not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"error\": \"Find Direction Navigation Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/navigationRoute.js",
    "groupTitle": "Navigation"
  },
  {
    "type": "post",
    "url": "/api/Navigation/POINavigation",
    "title": "Point Of Interest Navigation",
    "name": "PostPOINavigation",
    "group": "Navigation",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CurrentLat",
            "description": "<p>Latitude of Current Location.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CurrentLng",
            "description": "<p>Longitude Of Current Location.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "POILat",
            "description": "<p>Latitude of Point Of Interest Location.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "POILng",
            "description": "<p>Longitude of Point Of Interest Location.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"CurrentLat\": 35.9052828250,\n  \"CurrentLng\": -78.862943144,\n  \"POILat\": 35.865916280,\n  \"POILng\": -78.865916281\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "Navigation",
            "description": "<p>Point Of Interest Navigation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"Path\": [\n       {\n           \"lat\": 35.9044441,\n           \"lng\": -78.8678491\n       },\n       {\n           \"lat\": 35.9054198,\n           \"lng\": -78.8648683\n       },\n       {\n           \"lat\": 35.9054198,\n           \"lng\": -78.8648683\n       }\n   ],\n   \"SourceBuilding\": {\n       \"Id\": 6,\n       \"Name\": \"Building1\",\n       \"Latitude\": \"35.9055990976\",\n       \"Longitude\": \"-78.862943141\"\n   },\n   \"DestinationBuilding\": {\n       \"Id\": 27,\n       \"Name\": \"MHF\",\n       \"Latitude\": \"35.8996146626\",\n       \"Longitude\": \"-78.8659953035\"\n   }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "POINavigationNotFound",
            "description": "<p>Point Of Interest Navigation not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"error\": \"Point Of Interest Navigation Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/navigationRoute.js",
    "groupTitle": "Navigation"
  },
  {
    "type": "post",
    "url": "/api/Notification/DeRegDevice",
    "title": "DeRegister Device",
    "name": "DeRegDevice",
    "group": "Notification",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "deRegisterDevice",
            "description": "<p>DeRegister Device Object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"DeviceToken\":\"abcdefghijklmnopqrstuvwxyz\",\n  \"DeviceType\":\"android\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "deRegister",
            "description": "<p>Device DeRegistered.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"IsSuccess\": true,\n   \"Message\": \"Device Registration Removed\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DeRegDeviceNotWork",
            "description": "<p>Unable to DeRegister Device.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"error\": \" Error while DeRegistering Device\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/notificationRoute.js",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/api/Notification/RegisterDevice",
    "title": "Register Device",
    "name": "RegisterDevice",
    "group": "Notification",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "registerDevice",
            "description": "<p>Register Device Object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"DeviceToken\":\"abcdefghijklmnopqrstuvwxyz\",\n  \"DeviceType\":\"android\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "registerDevice",
            "description": "<p>Device Registered.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"IsSuccess\": true,\n   \"Message\": \"Device Registered Successfully\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DeviceNotRegistered",
            "description": "<p>Device not Registered.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"error\": \"Device Not Registered\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/notificationRoute.js",
    "groupTitle": "Notification"
  },
  {
    "type": "get",
    "url": "/api/pointOfInterest",
    "title": "Request Point of Interest List",
    "name": "GetPointOfInterest",
    "group": "PointOfInterest",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "pointOfInterests",
            "description": "<p>List of Points Of Interest.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pointOfInterests.Name",
            "description": "<p>Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pointOfInterests.ShortDescription",
            "description": "<p>Short Description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pointOfInterests.LongDescription",
            "description": "<p>Long Description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pointOfInterests.Latitude",
            "description": "<p>Latitude.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pointOfInterests.Longitude",
            "description": "<p>Longitude.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pointOfInterests.Email",
            "description": "<p>Email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pointOfInterests.ContactNo",
            "description": "<p>ContactNo.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pointOfInterests.Hours",
            "description": "<p>Hours.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  [{\n    \"Id\": 2,\n    \"Name\": \"Building 1\",\n    \"ShortDescription\": \"\",\n    \"LongDescription\": \"\",\n    \"Latitude\": \"35.8187764\",\n    \"Longitude\": \"-78.6733007\",\n    \"Email\": \"test@gmail.com\",\n    \"ContactNo\": \"8898898\",\n    \"Hours\": \"\"\n}]",
          "type": "Object[]"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "POINotFound",
            "description": "<p>Point of Interest not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Point of Interest Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/pointOfInterestRoute.js",
    "groupTitle": "PointOfInterest"
  },
  {
    "type": "post",
    "url": "/api/Room/findavailableRooms",
    "title": "Find Available Rooms",
    "name": "FindAvailableRooms",
    "group": "Room",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "findRoom",
            "description": "<p>Request Criteria to find available Rooms.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"AccessPointDetail\":{\n     \"FloorId\":4,\n     \"BuildingId\":2,\n     \"DisplayOrder\":2,\n     \"Cordinate\":\"\",\n     \"FilterByBuilding\":false \n  },\n  \"RoomSearch\":{\n     \"StartTime\":\"2018-02-28T12:00:00\",\n     \"EndTime\":\"2018-02-28T12:30:00\",\n     \"Duration\":30,\n     \"NoOfAttendees\":1,\n     \"RoomFacilities\":\"\",\n     \"ExcludeBuildingId\":\"\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "AvailableRooms",
            "description": "<p>Available Rooms.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"MoreRoomAvailable\": false,\n   \"BuildingData\": [\n       {\n           \"BuildingId\": 2,\n           \"BuildingName\": \"BuildingA3i\",\n           \"RoomList\": [\n               {\n                   \"Name\": \"Conf Room 6\",\n                   \"ExchangeLocationId\": \"confroom6@3iinfotechtest.onmicrosoft.com\",\n                   \"NoOfAttendees\": 4,\n                   \"Time\": \"30 sec away\",\n                   \"FloorId\": 2,\n                   \"FloorName\": \"Building A Floor 1\",\n                   \"RoomFacility\": [],\n                   \"DisplayOrder\": 1,\n                   \"TimeInSeconds\": 30\n               }\n           ],\n           \"TravellingTime\": \"0\"\n       }\n   ],\n   \"ExcludeBuildingId\": \"2,1,\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RoomNotFound",
            "description": "<p>Room not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"error\": \"Room Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/roomRoute.js",
    "groupTitle": "Room"
  },
  {
    "type": "get",
    "url": "/api/Room/GetAPNDetailByMacAddress/:macaddress",
    "title": "Get APN Detail By MacAddress",
    "name": "GetAPNDetailByMacAddress",
    "group": "Room",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "apn",
            "description": "<p>APN Detail.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apn.APName",
            "description": "<p>APName.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "apn.FloorId",
            "description": "<p>FloorId.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apn.FloorName",
            "description": "<p>FloorName.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "apn.BuildingId",
            "description": "<p>BuildingId.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apn.BuildingName",
            "description": "<p>BuildingName.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "apn.DisplayOrder",
            "description": "<p>DisplayOrder.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apn.Cordinate",
            "description": "<p>Cordinate.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"Id\": 1,\n \"APName\": \"APN-1\",\n \"FloorId\": 1,\n \"FloorName\": \"Building 1 Floor 1\",\n \"BuildingId\": 1,\n \"BuildingName\": \"Building13i\",\n \"DisplayOrder\": 1,\n \"Cordinate\": \"\"\n}",
          "type": "Object"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "APNDetailNotFound",
            "description": "<p>APN Detail Not Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"APN Detail Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/roomRoute.js",
    "groupTitle": "Room"
  },
  {
    "type": "get",
    "url": "/api/Room/GetAllConfRoom",
    "title": "Get All Conference Room",
    "name": "GetAllConfRoom",
    "group": "Room",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "rooms",
            "description": "<p>List of Conf Rooms.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rooms.Id",
            "description": "<p>Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rooms.Name",
            "description": "<p>Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rooms.FloorId",
            "description": "<p>FloorId.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rooms.FloorName",
            "description": "<p>FloorName.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rooms.BuildingName",
            "description": "<p>BuildingName.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rooms.QRCode",
            "description": "<p>QRCode.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rooms.ExchangeLocationId",
            "description": "<p>ExchangeLocationId.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rooms.Direction",
            "description": "<p>Direction.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rooms.NoOfAttendees",
            "description": "<p>NoOfAttendees.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rooms.NearestAccessPointId",
            "description": "<p>NearestAccessPointId.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "rooms.RoomFacility",
            "description": "<p>Room Facility Detail.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"Id\": 1,\n \"Name\": \"Conf Room 1\",\n \"FloorId\": 1,\n \"FloorName\": \"Building 1 Floor 1\",\n \"BuildingId\": 1,\n \"BuildingName\": \"Building13i\",\n \"QRCode\": \"confroom1@3iinfotechtest.onmicrosoft.com\",\n \"ExchangeLocationId\": \"confroom1@3iinfotechtest.onmicrosoft.com\",\n \"Direction\": \"East\",\n \"NoOfAttendees\": 4,\n \"NearestAccessPointId\": null,\n \"RoomFacility\": [\n   {\n       \"FacilityId\": 1,\n       \"FacilityName\": \"Telephone\",\n       \"IsSelected\": \"false\",\n       \"ImageUrl\": \"phone\"\n   }]\n}",
          "type": "Object"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RoomNotFound",
            "description": "<p>Room Not Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Room Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/roomRoute.js",
    "groupTitle": "Room"
  },
  {
    "type": "get",
    "url": "/api/Room/GetRoomByQRCode/:qrcode",
    "title": "Get Room By QRCode",
    "name": "GetRoomByQRCode",
    "group": "Room",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "room",
            "description": "<p>Room Detail.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "room.Id",
            "description": "<p>Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "room.Name",
            "description": "<p>Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "room.FloorId",
            "description": "<p>FloorId.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "room.FloorName",
            "description": "<p>FloorName.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "room.BuildingId",
            "description": "<p>BuildingId.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "room.BuildingName",
            "description": "<p>BuildingName.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "room.BuildingLatitude",
            "description": "<p>BuildingLatitude.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "room.BuildingLongitude",
            "description": "<p>BuildingLongitude.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "room.QRCode",
            "description": "<p>QRCode.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "room.ExchangeLocationId",
            "description": "<p>ExchangeLocationId.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "room.NoOfAttendees",
            "description": "<p>NoOfAttendees.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "room.NearestAccessPointId",
            "description": "<p>NearestAccessPointId.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "room.RoomFacility",
            "description": "<p>Room Facility Detail.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"Id\": 1,\n \"Name\": \"Conf Room 1\",\n \"FloorId\": 1,\n \"FloorName\": \"Building 1 Floor 1\",\n \"BuildingId\": 1,\n \"BuildingName\": \"Building13i\",\n \"BuildingLatitude\": \"35.9054198\",\n \"BuildingLongitude\": \"-78.8648683\",\n \"QRCode\": \"confroom1@3iinfotechtest.onmicrosoft.com\",\n \"ExchangeLocationId\": \"confroom1@3iinfotechtest.onmicrosoft.com\",\n \"NoOfAttendees\": 4,\n \"NearestAccessPointId\": null,\n \"RoomFacility\": [\n   {\n       \"FacilityId\": 1,\n       \"FacilityName\": \"Telephone\",\n       \"IsSelected\": \"false\",\n       \"ImageUrl\": \"phone\"\n   }]\n}",
          "type": "Object"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RoomNotFound",
            "description": "<p>No Room Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"No Room Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/roomRoute.js",
    "groupTitle": "Room"
  },
  {
    "type": "get",
    "url": "/api/Room/GetRoomFacility",
    "title": "Get Room Facility",
    "name": "GetRoomFacility",
    "group": "Room",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "roomFacility",
            "description": "<p>Room Room Facilities.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "roomFacility.FacilityId",
            "description": "<p>FacilityId.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roomFacility.FacilityName",
            "description": "<p>FacilityName.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "roomFacility.IsSelected",
            "description": "<p>IsSelected.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roomFacility.ImageUrl",
            "description": "<p>ImageUrl.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [{\n       \"FacilityId\": 1,\n       \"FacilityName\": \"Telephone\",\n       \"IsSelected\": \"false\",\n       \"ImageUrl\": \"phone\"\n }]",
          "type": "Object"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RoomFacilityNotFound",
            "description": "<p>Room Facility Not Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Room Facility Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/roomRoute.js",
    "groupTitle": "Room"
  },
  {
    "type": "get",
    "url": "/api/Room/GetRoomFacilityByExchangeLocationId/:exchangelocationid",
    "title": "Get Room Facility By ExchangeLocationId",
    "name": "GetRoomFacilityByExchangeLocationId",
    "group": "Room",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "roomFacility",
            "description": "<p>Room Facilities.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "roomFacility.FacilityId",
            "description": "<p>FacilityId.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roomFacility.FacilityName",
            "description": "<p>FacilityName.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "roomFacility.IsSelected",
            "description": "<p>IsSelected.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roomFacility.ImageUrl",
            "description": "<p>ImageUrl.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [{\n       \"FacilityId\": 1,\n       \"FacilityName\": \"Telephone\",\n       \"IsSelected\": \"false\",\n       \"ImageUrl\": \"phone\"\n }]",
          "type": "Object"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RoomFacilityNotFound",
            "description": "<p>Room Facility Not Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Room Facility Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/roomRoute.js",
    "groupTitle": "Room"
  },
  {
    "type": "post",
    "url": "/api/Room/searchavailableRooms",
    "title": "Search Available Rooms",
    "name": "SearchAvailableRooms",
    "group": "Room",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "searchRoom",
            "description": "<p>Criteria to Search available Rooms.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"AccessPointDetail\":{\n     \"FloorId\":0,\n     \"BuildingId\":0,\n     \"DisplayOrder\":2,\n     \"Cordinate\":\"\"\n  },\n  \"RoomSearch\":{\n     \"StartTime\":\"2018-02-28T12:00:00\",\n     \"EndTime\":\"2018-02-28T12:30:00\",\n     \"Duration\":30,\n     \"NoOfAttendees\":1,\n     \"RoomFacilities\":\"\",\n     \"RoomEmailAddress\":\"confroom2@3iinfotechtest.onmicrosoft.com\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "AvailableRooms",
            "description": "<p>Available Rooms.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"MoreRoomAvailable\": false,\n   \"BuildingData\": [\n       {\n           \"BuildingId\": 2,\n           \"BuildingName\": \"BuildingA3i\",\n           \"RoomList\": [\n               {\n                   \"Name\": \"Conf Room 6\",\n                   \"ExchangeLocationId\": \"confroom6@3iinfotechtest.onmicrosoft.com\",\n                   \"NoOfAttendees\": 4,\n                   \"Time\": \"30 sec away\",\n                   \"FloorId\": 2,\n                   \"FloorName\": \"Building A Floor 1\",\n                   \"RoomFacility\": [],\n                   \"DisplayOrder\": 1,\n                   \"TimeInSeconds\": 30\n               }\n           ],\n           \"TravellingTime\": \"0\"\n       }\n   ],\n   \"ExcludeBuildingId\": \"2,\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RoomNotFound",
            "description": "<p>Room not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"error\": \"Room Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/roomRoute.js",
    "groupTitle": "Room"
  },
  {
    "type": "get",
    "url": "/api/sync/:syncdate",
    "title": "Get Sync Update Status",
    "name": "GetSyncUpdateStatus",
    "group": "Sync",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "sync",
            "description": "<p>Sync Update Status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "sync.FAQ",
            "description": "<p>FAQ.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "sync.ContactUs",
            "description": "<p>ContactUs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "sync.Meeting",
            "description": "<p>Meeting.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"FAQ\": true,\n \"ContactUs\": true\n \"Meeting\": false\n}",
          "type": "Object"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SyncNotFound",
            "description": "<p>Error in Sync.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Error in Sync\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/syncRoute.js",
    "groupTitle": "Sync"
  },
  {
    "type": "get",
    "url": "/api/User/Profile",
    "title": "Get User Profile",
    "name": "GetUserProfile",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "SurName",
            "description": "<p>SurName.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "GivenName",
            "description": "<p>Given Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DisplayName",
            "description": "<p>Display Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>Email Address.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"SurName\": \"Shah\",\n  \"GivenName\": \"Maulik\",\n  \"DisplayName\": \"Maulik Shah\",\n  \"Email\": \"maulik@3iinfotechtest.onmicrosoft.com\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserProfileNotFound",
            "description": "<p>User Profile not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"error\": \"User Profile Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/userRoute.js",
    "groupTitle": "User"
  }
] });
