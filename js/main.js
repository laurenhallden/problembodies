// Placeholder objects for the part we're about to choose
var chosenPart = {};
var chosenProblem = {};
var chosenSolution = {};
var newTitle = {};


// *****************************
//      COMMON FUNCTIONS
// *****************************

// We're going to generate a lot of random numbers,
// so here's a number picker function

function pickANumber(upperLimit) {
  var randomNumber = Math.floor(Math.random() * upperLimit);
  return randomNumber;
};

function pickFromArray(array) {
  var randomValue = array[Math.floor(Math.random() * array.length)];
  return randomValue;
};

// *****************************
//         PROBLEMS
// *****************************

function whatsMyProblem() {

  // first, erase any old fields
  $('.reset').html("");
  $('.reset').removeClass('hidden');
  // and remove the selected class from any old selected problems
  $('.problem-statement').removeClass('selected');

  // Pick a random body part
  var randomPart = pickFromArray(bodyparts);

  // Pick whether we want it to be plural
  var plural = pickANumber(2);

  // If we do want it to be (or if it HAS to be)
  if ((plural > 0) || (randomPart.count > 10)) {
    // Check to make sure it's possible
    if (randomPart.count > 1) {
      chosenPart.part = (randomPart.plural);
      chosenPart.plural = true;
    } else  {
      chosenPart.part = (randomPart.singular);
      chosenPart.plural = false;
    }
  } else  {
    // If not, it's singular
    chosenPart.part = (randomPart.singular);
    chosenPart.plural = false;
  }
  chosenPart.singular = (randomPart.singular);
  chosenPart.pluralpart = (randomPart.plural);
  chosenPart.count = (randomPart.count);

  // Are there specific products that are good for this part?
  if (randomPart.hasOwnProperty("products")) {
    chosenPart.products = (randomPart.products);
  } else {
    chosenPart.products = "none";
  };

  // If this part a vertical set? Just lips!
  if (randomPart.hasOwnProperty("set")) {
    chosenPart.set = "vertical";
  } else {
    chosenPart.set = "horizontal";
  };

  chosenPart.emoji = randomPart.emoji;

  // Pick a class of problems
  function randomProblem(problems) {
    var keys = Object.keys(problems);
    var theProblemClass = pickFromArray(keys);
 
    // Pick a problem from the class
    var theProblem = pickFromArray(problems[theProblemClass]);

    // Put the problem and its class in our object
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

    // unless there's only ever one of this thing
    if (chosenPart.count != 1) {
      if ((randomPartSelection == 0) || (chosenPart.count > 9)) {
        $('.the-adjective-one').html("one");
      } else if (randomPartSelection == 1) {
        if (chosenPart.set == "horizontal") {
          $('.the-adjective-direction').html("left");
        } else {
          $('.the-adjective-direction').html("top");
        }
      } else if (randomPartSelection == 2) {
        if (chosenPart.set == "horizontal") {
          $('.the-adjective-direction').html("right");
        } else {
          $('.the-adjective-direction').html("bottom");
        }
      }
    }
  };

  // Now let's set the other options in our possible statements
  // Show the verb or not
  var verbVisiblity = pickANumber(2);
  if (verbVisiblity != 0 || count == 0) {
    $('.the-verb-optional').removeClass('hidden');
    $('.the-possessive-optional').removeClass('hidden');
    $('.the-possessive-optional').css('text-trandform', 'lowercase');
  } else {
    $('.the-verb-optional').addClass('hidden');
    $('.the-possessive-optional').addClass  ('hidden');
    $('.the-emotions').html(pickFromArray(emotions));
  };

  // Pick a suggestion 
  $('.the-suggestion').html(pickFromArray(suggestions));

  // For problem statement type B, pick a possessive
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
  };

  // Pump it up with some emphasis or not
  var emphasisVisiblity = pickANumber(2);
  if (emphasisVisiblity == 1) {
    // these can be further pumped up with "just"
    $('.the-emphasis').html(pickFromArray(justEmphasis));
    $('.the-emphasis').removeClass('hidden');
    just();
  } else if (emphasisVisiblity == 2) {
    // these can't
    $('.the-emphasis').html(pickFromArray(emphasis));
    $('.the-emphasis').removeClass('hidden');
    $('.the-emphasis-a').addClass('hidden');
  } else {
    $('.the-emphasis').addClass('hidden');
    $('.the-emphasis-a').addClass('hidden');
  };

  // Pump it up some more with "just"
  function just() {
    var justVisibility = pickANumber(2);
    if (justVisibility != 0) {
      $('.the-emphasis-a').addClass('hidden');
    }
    else {
      $('.the-emphasis-a').removeClass('hidden');
    }
  };

  // Is there a result we're in danger of?
  $('.the-result').html(pickFromArray(results));

  // What's the lead-in?
  $('.intro').html(pickFromArray(intro));

  // Is this a "could" statement instead of an "is" statement?
  if (pickANumber(2) != 0) {
    $('.could').html("Could");
    $('.be').html("be");
    $('.type-d .the-verb').addClass('hidden');
  };

  // Set the problem span
  $('.the-problem').html(chosenProblem.problem);

  // Decide which problem statement to show
  var whichStatement = pickANumber(4);
  $('.problem-statement').addClass('hidden');
  if (count == 0) {
    $('.type-a').removeClass('hidden');
    $('.type-a').addClass("selected");
  } else if (whichStatement == 0) {
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
  };


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
  };

  var span;
  $('.problem-statement.selected span:not(.hidden)').each(function(){
    if($(this).html() == firstSpan){
      span = $(this);
    }
  });

  $(span).html(quote + capLetter + rest);

  $('.problem-statement-holder').fadeIn();
};


// *****************************
//         SOLUTIONS
// *****************************

function whatsMySolution() {

  // We now have 2 options:
  // 1. Pick a product based on the body part (pants!), OR
  // 2. Pick a product based on the problem class (minimizer!)

  // either way, let's match our problem class with its solution class
  var solutionClass = solutions[chosenProblem.class];
  var solutionNouns = solutionClass.filter(function (filter) {
    return filter.noun !== null &
          filter.noun !== undefined
  });

  // Now, option 1 or 2?

  // We need to use this later
  var mandatoryHype = false;


  var whichProduct = pickANumber(4);
  if ((whichProduct == 0) && (chosenPart.products != "none")) {
    var productClass = chosenPart.products;

    // Since nobody says "boob bra", hide the body part sometimes
    var productsWithAndWithout = pickANumber(4);
    if (productsWithAndWithout > 2) {
      var theSolution = pickFromArray(productsWith[productClass]);
      $('.the-problem-part-singular').removeClass('hidden');
    } else {
      var theSolution = pickFromArray(productsWithout[productClass]);
      $('.the-problem-part-singular').addClass('hidden');
      mandatoryHype = true;
    }
  } else {
    // now, sometimes make the solution plural
    var pluralSolution = pickANumber(2);
    if (pluralSolution == 0) {
      // Filter the solutions class for plural options
      var solutionsPlural = solutionClass.filter(function (filter) {
        return filter.plural !== null &
              filter.plural !== undefined
      });
      theSolution = pickFromArray(solutionsPlural).plural;
    } else {
      var theSolution = pickFromArray(solutionNouns).noun;
    }
  };

  // Pass our chosen solution to its object so we can use it elsewhere
  chosenSolution.solution = theSolution;

  // Let's grab a related adjective
  var problemAdjectives = solutionClass.filter(function (filter) {
    return filter.noun != theSolution &
          filter.plural != theSolution &
          filter.adjective !== null &
          filter.adjective !== undefined
  });

  var theSolutionAdjective = pickFromArray(problemAdjectives).adjective;
  chosenSolution.allAdjectives = theSolutionAdjective;

  // Pump it up with another adjective?
  var hypeIt = pickANumber(2);
  if ((hypeIt != 0) || (mandatoryHype == true)) {
    var anotherAdjective = pickFromArray(exciting_adjectives);
    $('.the-solution-adjective-one').html(anotherAdjective);
    var hyphen = "";
    chosenSolution.allAdjectives = anotherAdjective +  " " + theSolutionAdjective;
  } else {
    var hyphen = pickFromArray(hyphen_adjectives);
    chosenSolution.allAdjectives = hyphen + theSolutionAdjective;
  };

  // Set the solution span
  $('.the-solution-noun').html(theSolution);
  $('.the-solution-adjective-two').html(hyphen + theSolutionAdjective);
  $('.the-problem-part-singular').html(chosenPart.singular);

  // Capitalize our solution product!
  var solutionArr = [];
  $('.solution-statement span:not(.hidden)').each(function(){
      $(this).css('text-transform', 'Capitalize');
  }); 

  // Pick a followup statement
  var whichSocial = (pickANumber(2));

  // But let's not accidentally send people pictures of genitals!
  if ((whichSocial == 0) && (chosenPart.products != "downthere")) {
    var followUpStatement = "<span class='social-service'></span>";
  } else {
    var followUpStatement = pickFromArray(followup);
  };

  var whichEmoji = pickANumber(2);

  if ((chosenPart.emoji == "") || (whichEmoji == 0)) {
    chosenPart.emoji = pickFromArray(goodemotions);
  };

  $('.the-follow-up').html(followUpStatement + "<span class='emoji'> " + chosenPart.emoji + "</span>");

  // Now let's fill in a bunch of follow-up offer options
  var nospacespart = chosenPart.singular.replace(/\s/g, '');
  var nospacessolution = chosenSolution.solution.replace(/\s/g, '');

  // If there's a social link...
  if((followUpStatement).indexOf('social') != -1) {

    // pick which social account
    var theSocialService = pickFromArray(social);

    $('.social-service').html(theSocialService);
    // Let's make a fake social account

    // Let's make some fake links
    if ((theSocialService).indexOf('Twitter') != -1) {
      var socialLink = ("https://twitter.com/search?q=" + chosenPart.singular + "%20" + theSolution);
      var socialAccount = ("#lovemy" + nospacespart + nospacessolution);
    } else if ((theSocialService).indexOf('Instagram') != -1) {
      var socialLink = ("https://www.instagram.com/explore/tags/" + nospacespart + nospacessolution);
      var socialAccount = ("#lovemy" + nospacespart + nospacessolution);
    } else if ((theSocialService).indexOf('Facebook') != -1) {
      var socialLink = ("https://www.facebook.com/search/top/?q=" + chosenPart.singular + "%20" + theSolution);
    } else if ((theSocialService).indexOf('Kickstarter') != -1) {
      var socialLink = ("https://www.google.com/search?lr=&as_qdr=all&ei=P56EW_mpKqPv_QbE4arIAw&q=" + chosenPart.singular + "+" + theSolution + "+site%3Akickstarter.com");
    } else if ((theSocialService).indexOf('York') != -1) {
      var socialLink = ("https://www.nytimes.com/search?query=" + chosenPart.singular + "+" + theSolution);
    }
    $('.social-link').attr('href', socialLink);
    $('.social-account').html(socialAccount);
  }
  if((followUpStatement).indexOf('part-again') != -1)   {
    $('.part-again').html(chosenPart.part);
  }
  if((followUpStatement).indexOf('to-thirty') != -1)   {
    $('.to-thirty').html(pickANumber(31));
  }
  if((followUpStatement).indexOf('coupon-code') != -1)   {
    var couponCode = ("<strong>best" + nospacespart + "forward");
    $('.coupon-code').html(couponCode);
  };

  // Dynamically populate addthis
  newTitle.title = "Excited to try my new " + chosenSolution.allAdjectives + " " + chosenPart.part +  " " + theSolution + "! Solve your #problembody here:";
  updateSocial();

  $('.solution-statement-holder').fadeIn(function(){
    $('.again-buttons').fadeIn();
  });
};


// *****************************
//         CONSIDERATIONS
// *****************************

function considerations() {
    $('.problem-statement-holder').fadeOut(function() {
      pickConsiderations();
    });
    $('.problem-buttons').hide();
};

function pickConsiderations() {

  // Fill in the sciencey-label
  $('.caption-label').html(pickFromArray(labels));

  // Fill in the extra spans for Evidence B
  if (chosenPart.count > 1) {
    $('.the-problem-part-evidence-a').html(chosenPart.pluralpart);
  } else {
    $('.the-problem-part-evidence-a').html(chosenPart.singular);
  }

  $('.the-problem-part-plural').html(chosenPart.pluralpart);
  $('.the-evidence-adjective').html(pickFromArray(evidenceAdjectives));

  $('.the-considerations').html(pickFromArray(cons));
  // Decide which consideration statement to show
  var whichConsideration = pickANumber(4);
  $('.evidence-span').addClass('hidden');
  if (whichConsideration < 1) {
    $('.evidence-a-detail').html(pickFromArray(evidenceA));
    $('.evidence-a').removeClass('hidden');
  } else {
    $('.evidence-b-detail').html(pickFromArray(evidenceB));
    $('.evidence-b').removeClass('hidden');
  }
  $('.percent').html(pickFromArray(percent));
  $('.consideration-holder').fadeIn();
  $('.evidence-card').addClass('animate');
  $('.consideration-buttons').delay(400).fadeIn();
};
