(function($,_){
    $(function(){
        $('.button-collapse').sideNav();

        function nth(d) {
            if(_.isString(d))
                d = parseInt(d);
            if(d>3 && d<21)
                return 'th';
            switch (d % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
            }
        }

        $.getJSON("resources/rooms.json", function(roomConfig) {

            meetingrooms.core.set_rooms(roomConfig);

            var roomKeys = _.keys(roomConfig.rooms);
             var roomChoices = _.flatten( _.map(roomKeys, function (roomId) {
                var room = roomConfig.rooms[roomId];
                var r = {};
                var roomString = room.name + " (" + room.floor + nth(room.floor) + ")";
                 r[roomString] = roomId;
                return [ r, _.map(room.aliases, function (alias) {
                    var r = {};
                    var roomString = alias + " (" + room.floor + nth(room.floor) + ")";
                    r[roomString] = roomId;
                    return r;
                })];
            }));
             rooms = _.extend.apply(this, roomChoices);

            $('input.autocomplete').autocomplete({
                data: rooms,
                onAutocomplete: function(id){
                    console.log("GOING TO "+rooms[id]);
                    meetingrooms.core.set_room_id(rooms[id]);
                },
                matcher: function(value,list) { // fuzzy string match
                    var withScore = _.reduce(list,function(acc,el) {
                        var score = el.score(value);
                        if (score > 0.1){
                            acc.push({id: el,
                                      scere: score });
                            return acc;
                        } else {
                            return acc;
                        }
                    },[]);
                    var sortedByScore = _.sortBy(withScore, function (record){
	                      return record.score;
	                  });
                    var justValues = _.pluck(sortedByScore, "id");
                    console.log(JSON.stringify(sortedByScore, null, 2));
                    return justValues;
                },
                limit: 5,
                triggerOnSingleChoice: true
            });

        });
        $('.slider').slider({full_width: true});

    }); // end of document ready
})(jQuery, _); // end of jQuery name space
