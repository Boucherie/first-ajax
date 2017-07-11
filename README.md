# Your First (Several) Asynchronous Requests

[See assignment in Alexa.](https://alexa.bitmaker.co/cohorts/67/assignments/2055/latest)

##step 0 - setup and knowledge check

1. What HTTP method did your browser use to make the request?

GET

2. How many milliseconds did it take your browser to complete it?

88ms

3. What HTTP status code did the server return? What does that mean?

200 OK - Request successful

4. Look at the "Initiator" and "Type" columns. Was this an xhr/JavaScript/AJAX request or a normal browser request?

normal browser request

##step 1 - your first AJAX request

5. Method: GET     Status: 200 OK (73ms)

6. Type:  document      Initiator: other (same as before)


##Step 3 - Using Information in the Response

content : Wow what a ride! I came all the way from the server!

##Step 4 - When Things Go Wrong...

3. new status code- 500 - Internal Server Error


##Step 6 - All Together Now!

/pong - Status Code 500, type xhr; initiator jquery.min.js; time 233ms;

#console messages:
send @ jquery.min.js:4
ajax @ jquery.min.js:4
(anonymous) @ ajax.js:18
jquery.min.js:4 XHR finished loading: GET "http://first-ajax-api.herokuapp.com/pong".
send @ jquery.min.js:4
ajax @ jquery.min.js:4
(anonymous) @ ajax.js:18
##ajax.js:30 POST FAILED
ajax.js:33 Object {readyState: 4, getResponseHeader: function, getAllResponseHeaders: function, setRequestHeader: function, overrideMimeType: function…}
##ajax.js:34 I'm sorry, Dave. I'm afraid I can't do that.
##ajax.js:35 error
##ajax.js:39 Request completed!

/ping - status code 200; ping-  xhr; initiator;  jquery.min.js; ping took 85ms

#console messages:
#ajax.js:24 Wow what a ride! I came all the way from the server!
#ajax.js:38 Request completed!


##Step 7 - The Hive Mind (Shared State)

number of times count page visited by Bitmakers: 38038
refreshed and clicked again to confirm working

##Step 9 - Receiving HTML in the Response

Investigate the Request and Response "Headers" in your Network Tab. What is the 'Accepts' of the Request, and the 'Content-Type' of the response?

Response Headers:
Accept-Ranges:bytes

Request Headers:
Accept:*/*
Accept-Encoding:gzip, deflate, sdch, br
Accept-Language:en-US,en;q=0.8

Content-Type: text/javascript; charset=UTF-8
