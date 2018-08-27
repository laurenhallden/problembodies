// placeholder object for the part we're about to choose
var chosenPart = {};
var chosenProblem = {};


// *****************************
//      COMMON FUNCTIONS
// *****************************

// We're going to generate a lot of random numbers,
// so here's a number picker function

function pickANumber(upperLimit) {
  var randomNumber = Math.floor(Math.random() * upperLimit);
  return randomNumber;
}

function pickFromArray(array) {
  var randomValue = array[Math.floor(Math.random() * array.length)];
  return randomValue;
}

// *****************************
//         PROBLEMS
// *****************************

function whatsMyProblem() {

  // first, erase any old fields
  $('.reset').html("");
  $('.reset').removeClass('hidden');
  // and remove the selected class from any old selected problems
  $('.problem-statement').removeClass('selected');

  // pick a random body part
  var randomPart = pickFromArray(bodyparts);

  // pick whether we want it to be plural
  var plural = pickANumber(2);

  // if we do want it to be (or if it HAS to be)
  if ((plural > 0) || (randomPart.count > 10)) {
    // check to make sure it's possible
    if ('plural' in randomPart) {
      chosenPart.part = (randomPart.plural);
      chosenPart.plural = true;
    }
    else  {
      chosenPart.part = (randomPart.singular);
      chosenPart.plural = false;
    }
  }
  // if not, it's singular
  else  {
    chosenPart.part = (randomPart.singular);
    chosenPart.plural = false;
  }
  chosenPart.singular = (randomPart.singular);

  // pick a class of problems
  function randomProblem(problems) {
    var keys = Object.keys(problems);
    var theProblemClass = pickFromArray(keys);
 
    // pick a problem from the class
    var theProblem = pickFromArray(problems[theProblemClass]);

    // put the problem and its class in our object
    chosenProblem.problem = theProblem;
    chosenProblem.class = theProblemClass;
  };

  randomProblem(problems);


  // Set the part span
  $('.the-problem-part').html(chosenPart.part);

  // Set the verb span
  if (chosenPart.plural == true ) {
    $('.the-verb').html("Are");
  } else {
    $('.the-verb').html("Is");
    // and decide if we're picking a one of them (left/right)
    var randomPartSelection = pickANumber(3);

    //unless there's only ever one of this thing
    if (randomPart.count != 1) {
      if (randomPartSelection == 0) {
        $('.the-adjective-one').html("one");
      } else if (randomPartSelection == 1) {
        $('.the-adjective-direction').html("left");
      } else if (randomPartSelection == 2) {
        $('.the-adjective-direction').html("right");
      }
    }
  };

  // Show the verb or not, show suggestions or not
  var verbVisiblity = pickANumber(2);
  console.log("verb visibility" + verbVisiblity);
  if (verbVisiblity != 0) {
    $('.the-verb-optional').removeClass('hidden');
    $('.the-possessive-optional').removeClass('hidden');
    $('.the-possessive-optional').css('text-trandform', 'lowercase');
  } else {
    $('.the-verb-optional').addClass('hidden');
    $('.the-possessive-optional').addClass('hidden');
    $('.the-emotions').html(pickFromArray(emotions));
  };

  // Pick a suggestion 
  $('.the-suggestion').html(pickFromArray(suggestions));

  // For type B, pick a possessive
  var possessiveType = pickANumber(2);
  if (possessiveType != 0) {
    if (chosenPart.plural == true) {
      $('.the-possessive-a').html("those");
    } else {
      $('.the-possessive-a').html("that");
    }
  }
  else {
    $('.the-possessive-a').html("your");
  }

  // Pump it up with some emphasis or not
  var emphasisVisiblity = pickANumber(4);
  console.log(emphasisVisiblity);
  if (emphasisVisiblity != 0 && emphasisVisiblity < 2) {
    $('.the-emphasis').html(pickFromArray(justEmphasis));
    $('.the-emphasis').removeClass('hidden');
    just();
  } if (emphasisVisiblity > 1) {
    $('.the-emphasis').html(pickFromArray(emphasis));
    $('.the-emphasis').removeClass('hidden');
  } else {
    $('.the-emphasis').addClass('hidden');
    $('.the-emphasis-a').addClass('hidden');
  }

  // Pump it up some more with "just"
  function just() {
    var justVisibility = pickANumber(2);
    if (justVisibility != 0) {
      $('.the-emphasis-a').addClass('hidden');
    }
    else {
      $('.the-emphasis-a').removeClass('hidden');
    }
  }

  // Is there a result we're in danger of?
  $('.the-result').html(pickFromArray(results));

  // What's the lead-in?
  $('.intro').html(pickFromArray(intro));

  // Is this a "could" statement instead of an "is" statement?
  if (pickANumber(2) != 0) {
    $('.could').html("Could");
    $('.be').html("be");
    $('.type-d .the-verb').addClass('hidden');
  }

  // Set the problem span
  $('.the-problem').html(chosenProblem.problem);

  // Decide which problem statement to show
  var whichStatement = pickANumber(5);
  $('.problem-statement').addClass('hidden');
  if (whichStatement == 0) {
    $('.type-a').removeClass('hidden');
    $('.type-a').addClass("selected");
  } else if (whichStatement == 1) {
    $('.type-b').removeClass('hidden');
    $('.type-b').addClass("selected");
  } else if (whichStatement == 2) {
    $('.type-c').removeClass('hidden');
    $('.type-c').addClass("selected");
  } else if (whichStatement == 3) {
    $('.type-d').removeClass('hidden');
    $('.type-d').addClass("selected");
  } else if (whichStatement == 4) {
    $('.type-e').removeClass('hidden');
    $('.type-e').addClass("selected");
  }


  // Capitalize the first letter of whatever's left:
  var statementArr = [];
  $(".problem-statement.selected span:not(.hidden)").each(function(){
      statementArr.push($(this).text());
  });
  // we logged all the spans, now remove the empty ones
  statementArr = statementArr.filter(function(n){ return n != "" });
  var firstSpan = statementArr[0];
  var capLetter = firstSpan.charAt(0).toUpperCase();
  if (capLetter != '“') {
    var capLetter = capLetter;
    var rest = firstSpan.substring(1);
    var quote = ""
  } else {
    var capLetter = firstSpan.charAt(1).toUpperCase();
    var rest = firstSpan.substring(2);
    var quote = '“'
  }
  var rest = firstSpan.substring(1);
  var span;
  $('.problem-statement.selected span:not(.hidden)').each(function(){
    if($(this).html() == firstSpan){
      span = $(this);
    }
  });
  $(span).html(quote + capLetter + rest);

  $('.problem-statement-holder').fadeIn();

}


// *****************************
//         SOLUTIONS
// *****************************

function whatsMySolution() {  

  // pick a random solution that matches our problem class
  var solutionClass = solutions[chosenProblem.class];
  var solutionNouns = solutionClass.filter(function (filter) {
    return filter.noun !== null &
          filter.noun !== undefined
  });
  var theSolution = pickFromArray(solutionNouns).noun;

  // Let's grab a related adjective
  var problemAdjectives = solutionClass.filter(function (filter) {
    return filter.noun != theSolution &
          filter.adjective !== null &
          filter.adjective !== undefined
  });

  var theSolutionAdjective = pickFromArray(problemAdjectives).adjective;

  // Pump it up with another adjective?
  var hypeIt = pickANumber(2);
  if (hypeIt != 0) {
    $('.the-solution-adjective-one').html(pickFromArray(exciting_adjectives));
  };

  // Set the solution span
  $('.the-solution-noun').html(theSolution);
  $('.the-problem-part-singular').html(chosenPart.singular);
  $('.the-solution-adjective-two').html(theSolutionAdjective);

  // Capitalize the first letter of our solution
  var solutionArr = [];
  $('.solution-statement.selected span:not(.hidden)').each(function(){
      solutionArr.push($(this).text());
  });
  // we logged all the spans, now remove the empty ones
  
 

  // Pick a followup statement
  var followUpStatement = pickFromArray(followup);
  $('.the-follow-up').html(followUpStatement);

  // fill in a bunch of follow-up offer options
  if((followUpStatement).indexOf('social') != -1) {
      $('.social-service').html(pickFromArray(social));
    }
  else if((followUpStatement).indexOf('part-again') != -1)   {
    $('.part-again').html(chosenPart.part);
  }
  else if((followUpStatement).indexOf('to-thirty') != -1)   {
    $('.to-thirty').html(pickANumber(31));
  }

  $('.solution-statement-holder').fadeIn(function(){
    $('.again-buttons').fadeIn();
  });

}



// *****************************
//         CONSIDERATIONS
// *****************************

function considerations() {
    $('.problem-statement-holder').fadeOut(function() {
      pickConsiderations();
    });
    $('.problem-buttons').hide();
}

function pickConsiderations() {
    $('.consideration-holder').fadeIn();
    $('.evidence-card').addClass('animate');
    $('.consideration-buttons').delay(400).fadeIn();
}
