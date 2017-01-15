(function($){
    $(function(){
        $('.button-collapse').sideNav();
        $('input.autocomplete').autocomplete({
            data: {"Emily Carr (4th)": "apple", "Red": "microsoft", "Piet Mondrian Centre": "google", "Piet Mondrian 2": "google"},
            onAutocomplete: function(text){console.log("test: ", text);},
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
                return justValues;
            },
            limit: 5,
            triggerOnSingleChoice: true
        });

        $('.slider').slider({full_width: true});








    }); // end of document ready
})(jQuery); // end of jQuery name space
