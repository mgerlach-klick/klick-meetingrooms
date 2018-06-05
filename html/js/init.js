(function($){
    $(function(){

        function nth(d) {
            function ending(d){
                if(_.isString(d)){
                    d = parseInt(d);
                }
                if(d>3 && d<21){
                    return 'th';
                }
                switch (d % 10) {
                case 1:  return "st";
                case 2:  return "nd";
                case 3:  return "rd";
                default: return "th";
                }
            }
            if (d){
                return ""+d+ending(d);
            } else {
                return "";
            }
            }

        function setUpRooms(roomConfig) {
            meetingrooms.core.set_rooms(roomConfig);
            meetingrooms.core.go_to_fragment(); //load room from fragment if direct link

            var roomKeys = _.keys(roomConfig.rooms);
            var roomChoices = _.flatten( _.map(roomKeys, function (roomId) {
                var room = roomConfig.rooms[roomId];
                var r = {};
                var roomString = room.name + (room.floor ? (" (" + nth(room.floor) + ")") : "");
                r[roomString] = roomId;
                return [ r, _.map(room.aliases, function (alias) {
                    var r = {};
                    var roomString = alias + (room.floor ? (" (" + nth(room.floor) + ")") : "");
                    r[roomString] = roomId;
                    return r;
                })];
            }));
            rooms = _.extend.apply(this, roomChoices);

            $('input.autocomplete').autocomplete({
                data: rooms,
                onAutocomplete: function(id){
                    meetingrooms.core.set_room_id(rooms[id]);
                },
                matcher: function(value,list) { // fuzzy string match
                    var withScore = _.reduce(list,function(acc,el) {
                        var score = el.score(value);
                        if (score > 0.105){
                            acc.push({id: el,
                                      score: score });
                            return acc;
                        } else {
                            return acc;
                        }
                    },[]);
                    var sortedByScore = _.sortBy(withScore, function (record){
	                      return record.score;
	                  });
                    var justValues = _.pluck(sortedByScore, "id");
                    return justValues;
                },
                triggerOnSingleChoice: true
            });

            $('.slider').slider({full_width: true});
        }

        $('input.autocomplete').val("");
        console.log("Loading rooms");
        $.getJSON("resources/rooms.json", function(roomConfig) {
            setUpRooms(roomConfig);
            console.log("set up rooms");
        });

        window.setTimeout(function () {
            $('input.autocomplete').focus();
        }, 0); //focus after everything has been built up


        // Initialize the Amazon Cognito credentials provider
        AWS.config.region = 'us-east-1'; // Region
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'us-east-1:07354ec8-afb3-4181-974b-e4731cf7afd0',
        });

        var dynamodb = new AWS.DynamoDB();

        var params = {
            TableName : "meetingrooms",
            FilterExpression: "#type = :ip",
            ExpressionAttributeNames:{ // type is a reserved word so i have to replace it
                "#type": "type"
            },
            ExpressionAttributeValues: {
                ":ip": {"S": "ip"}
            }
        };

        dynamodb.scan(params, (err,data) =>  console.log( err ? err : data))


    }); // end of document ready
})(jQuery); // end of jQuery name space
