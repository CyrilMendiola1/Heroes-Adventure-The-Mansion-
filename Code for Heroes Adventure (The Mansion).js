// Program's Purpose and Instructions
println("Welcome to Heroes Adventure: The Mansion. \nIn this game you will be given a series of choices \nthat will affect how your story goes. \nBasically, choose wisely in what you do.");
println("");
println("Important Instructions: If you don't type the \ncorresponding number the game will choose for you.");
println("Once you chose your number you can't change it even \nif you press 1 and then on the next one 2.");
println("If you decide to pick all of them the game \nwill choose one for you.");
println("Once you chose the corresponding number on one \nof the three or four questions in each section \njust put 0 or any other number in the \nother questions besides the corresponding ones \nif you want your choice.");
println("");

function start(){
    // Created Variables
    var name, heOrShe, hisOrHer, himOrHer, uppercase1, uppercase2, uppercase3; // For set up
    // First Chapter Variables
    var choice01, choice02, choice03, choice04;
    var multiChoice01;
    var result01;
    var message02, message03, message04;
 
    // Second Chapter Variables
    var choice011, choice012, choice013, choice014;
    var choice015;
    var multiChoice011;
    var result011;
    var message011, message012, message013, message014;
    var message015;
 
    // Thrid Chapter Variables
    var choice021, choice022, choice023, choice024, choice025, choice026;
    var choice027, choice028, choice029, choice030, choice1021, choice1022;
    var choice1023; // Corresponds with Chapter 4
    var multiChoice021, multiChoice022;
    var multiChoice023, multiChoice024;
    var result021, result022;
    var result023, result024;
    var message021, message022, message023, message024, message025, message026;
     
    // Fifth Chapter Variables
    var finalChoice;

    // Set Up
    println("Set Up");

    // Sets Variable and Prompts User to choose the gender of Caden
    name = "Caden";
    heOrShe = readLine("Enter he or she for first gender verification: ");
    hisOrHer = readLine("Enter his or her for second gender verification: ");
    himOrHer = readLine("Enter him or her for third gender verification: ");
    uppercase1 = readLine("Enter He or She exactly for fourth gender \nverification: ");
    uppercase2 = readLine("Enter His or Her exactly for fifth gender \nverification: ");
    uppercase3 = readLine("Enter Him or Her exactly for sixth gender \nverification: ");
    println("");

    // First Chapter
    println("Part 1");

    // Prints out first dialogue
    println(name + " and " + hisOrHer + " friends Chris, Leo, and Caroline \ncame upon a spooky and mysterious land. \nThe first thing you see is a book.");
    println("");

    // Prompts User to decide whether or not he or she should pick up the book
    choice01 = readBoolean("Do you pick up the book? True or False ");

    // If Statement is here to print out the result
    // of the choice the user selects
    if (choice01 == true){

        // Prints Response
        println("You pick up the book and it says dear traveler... \nBUT all of a sudden monsters came out. \nYou were reading and kicking all the monsters \nbut had trouble reading more than fighting.");
    } else {
        println("You decided not to but your friend Chris \ndecides to do it instead and while reading \nyou were attacked by monsters. \nYou defeated the monsters with no \ndifficulty whatsoever. ");
    }

    // Prints out second dialogue
    println("");
    println("After defeating the monsters " + name + " and " + hisOrHer + " friends \ncome across a big mansion the place where \nthey needed to go to.");
    println("");
    println("You need a way inside, but the front door \nis swarming with monsters.");

    // Prompts User to choose between three choices
    choice02 = readInt("Press 1 if you should build a ladder: ");
    choice03 = readInt("Press 2 if you want to try the back door: ");
    choice04 = readInt("Press 3 if you want to risk the front: ");

    // Combines
    multiChoice01 = choice02 + choice03 + choice04;

    // Messages
    message02 = "You chose to gather wood and sucessfully made your \nway to the mansion.";
    message03 = "You choose to try the back door but its lock and a \nswarm of monsters are coming your way. \nSo, you built a ladder instead.";
    message04 = "You decided to risk the front and barely made it out alive.";

    // Calls Function
    result01 = choiceDeciderV1(choice02, choice03, choice04, message02, message03, message04, multiChoice01);

    // Second Chapter
    println("");
    println("Part 2");

    // Prints out third dialogue
    println(name + " and " + hisOrHer + " friends make their way inside \nand encounter some strangers. They apparently \nreceived the same message as well.");
    println("");
    println("How do you approach them?");

    // Prompts User to choose between four choices
    choice011 = readInt("Press 1 if you approach them politely: ");
    choice012 = readInt("Press 2 if you question them: ");
    choice013 = readInt("Press 3 if you accuse them for whats going on: ");
    choice014 = readInt("Press 4 if you approach them very rudely: ");

    // Combines
    multiChoice011 = choice011 + choice012 + choice013 + choice014;

    // Messages
    message011 = "You approach them politely and started out \non good terms.";
    message012 = "You question them and they say that they have \nno clue on what is going on.";
    message013 = "You accuse them and a fight almost broke out. \nBut thankfully Leo stopped all of them.";
    message014 = "You approach them very rudely and \ndidn't start out good.";

    // Calls Function
    result011 = choiceDeciderV2(choice011, choice012, choice013, choice014, message011, message012, message013, message014, multiChoice011);

    // Prints out fourth dialogue
    println("");
    println("After your meet up with the strangers you learned \nthat their names are Joe, Silver, Olivia, \nand Abigail.");
    println("The only question on everyone's minds is who exactly invited all of them here and why is there a sea \nof monsters preventing them from coming outside.");
    println("You all gather around the dining room to discuss \nit and Joe apparently has a theory.");
    println("He said that there was an amulet that is the key to \na treasure room where the location is unknown. \nHe said that it could be the reason they are \nall here.");
    println("But all of a sudden the chair where Joe was \nsitting on flipped him to the ground where a secret \ntrapdoor opens.");
    println("Everyone was panicking but " + name + " calms everyone down and says that something must have triggered it.");
    println(uppercase1 + " looked around the table and saw a button. \nHowever, Leo spotted two more buttons which meant \nthat one out of three people could have pressed it.");
    println("This meant that only Silver, Olivia, or Chris \ncould have pressed the button which implies \nthat one of them could have been behind all \nof this inviting and chaos just for the amulet.");
    println("So, it was time to interrogate the suspects or \nat least two of them.");
    println("");
    println("Who do you interrogate first?");

    // Prompts User to choose who to interrogate first
    choice015 = readBoolean("Type true for Silver or type false for Olivia: ");

    // Messages from Silver
    message021 = "He says that he is a bit average with them but \nsays he would never use them to hurt anyone.";
    message022 = "He says that the amulet might not be the reason \nfor all of this and that all of this was caused \nby an insane person.";
    message023 = "He says that it could have been Olivia because \nshe told him that if she could get her hands on \nsomething like that she would do whatever she can to get it.";
    
    // Messages from Olivia
    message024 = "She says that she can only create simple \ninventions but not anything that has to be \nwired together but says that Silver is really \ngood at that kind of stuff.";
    message025 = "She says that she wants the fame for finding \nthe treasure room and wants to use the riches there \nto help everyone.";
    message026 = "She says that it could have been Caden's \nfriend Chris since she doesn't know him very well.";

    // If statement is here to print out the result
    // of the choice the user selects
    // and prints out fifth dialogue
    if(choice015 == true){
        println("Silver! And then Caroline drags him off to the \nlibrary.");
        println("");
        
        // Chapter 3
        println("Part 3");
        println("Silver comes in with such a nervous attitude \nand says that he is not the mastermind behind all of this and that he doesn't have some sort of amulet.");
        println(name + " stares at him intensively.");
        println("");
        println("What do you ask him?");

        // Prompts User to choose between three choices
        choice021 = readInt("Press 1 if you want to ask him how good he is \nat making inventions like ones that can be used \nas traps: ");
        choice022 = readInt("Press 2 if you want to ask him who do you \nthink might want to take the amulet: ");
        choice023 = readInt("Press 3 if you want to ask him which of the \ntwo suspects (or one of them) would do anything \nto get the amulet: ");

        // Combines
        multiChoice021 = choice021 + choice022 + choice023;

        // Calls Function
        result021 = choiceDeciderV1(choice021, choice022, choice023, message021, message022, message023, multiChoice021);
        println("Unsure of Silver's answer " + name + " excused him.");
        println("");
        println("Then Caroline asks who to bring in next.");

    } else {
        
        println("Olivia! And then Caroline drags her off to the \nlibrary.");
        println("");
        
        // Chapter 3
        println("Part 3");
        println("Olivia comes in with a calm mood and says that \neven though she would love to get her hands on \nthe amulet she would never hurt others just to \nget it. ");
        println(name + " looks at her as if she's telling the truth \nbut still cautious with her even with Caroline \nin the room as well.");
        println("");
        println("What do you ask her?");

        // Prompts User to choose between three choices
        choice024 = readInt("Press 1 if you want to ask her how good she is \nat making inventions like ones that can be used \nas traps: ");
        choice025 = readInt("Press 2 if you want to ask her why she really \nwants the amulet besides becoming rich off it: ");
        choice026 = readInt("Press 3 if you want to ask her which of the \ntwo suspects (or one of them) would do anything \nto get the amulet: ");

        // Combines
        multiChoice022 = choice024 + choice025 + choice026;

        // Calls Function
        result022 = choiceDeciderV1(choice024, choice025, choice026, message024, message025, message026, multiChoice022);
        println(name + " just stares at her and eventually excuses her.");
        println("");
        println("Then Caroline asks who to bring in next.");
    }

    // If statement is here to print out the result
    // of the choice the user selects and prints out
    // sixth dialogue
    if(choice015 != false){
        println(name + " asks Caroline to send in Olivia.");
        println("");
        println("Olivia comes in with a calm mood and says that \neven though she would love to get her hands on \nthe amulet she would never hurt others just to \nget it.");
        println(name + " looks at her as if she's telling the truth \nbut still cautious with her even with Caroline \nin the room as well.");
        println("");
        println("What do you ask her?");

        // Prompts User to choose between three choices
        choice027 = readInt("Press 1 if you want to ask her how good she is \nat making inventions like ones that can be used \nas traps: ");
        choice028 = readInt("Press 2 if you want to ask her why she really \nwants the amulet besides becoming rich off it: ");
        choice029 = readInt("Press 3 if you want to ask her which of the \ntwo suspects (or one of them) would do anything \nto get the amulet: ")
        
        // Combines
        multiChoice023 = choice027 + choice028 + choice029;

        // Calls Function
        result023 = choiceDeciderV1(choice027, choice028, choice029, message024, message025, message026, multiChoice023);
        println(name + " just stares at her and eventually excuses her.");
        
    } else {
        
        println(name + " asks Caroline to send in Silver.");
        println("");
        println("Silver comes in with such a nervous attitude \nand says that he is not the mastermind behind all of this and that he doesn't have some sort of amulet.");
        println(name + " stares at him intensively.");
        println("");
        println("What do you ask him?");
 
        // Prompts User to choose between three choices
        choice030 = readInt("Press 1 if you want to ask him how good he is \nat making inventions like ones that can be used \nas traps: ");
        choice1021 = readInt("Press 2 if you want to ask him who do you \nthink might want to take the amulet: ");
        choice1022 = readInt("Press 3 if you want to ask him which of the \ntwo suspects (or one of them) would do anything \nto get the amulet: ");

        // Combines
        multiChoice024 = choice030 + choice1021 + choice1022;

        // Calls Function
        result024 = choiceDeciderV1(choice030, choice1021, choice1022, message021, message022, message023, multiChoice024);
        println("Unsure of Silver's answer " + name + " excused him.");
    }

    // Prints out seventh dialogue
    println("");
    println("Caroline then brings in Chris. Who immediately \nsays that he didn't press the button. " + name + " believes \nhim and appreciates his answer.");
    println("They discuss how everyone's answers seems to \nmake them all guilty.");
    println("After their so called interrogation they go to \nthe lobby where everyone is waiting.");
    println("Everyone was waiting to find out who the \nmastermind is.");
    println("");
    println("Who do you accuse?");

    // Prompts User to choose who to accuse
    choice1023 = readBoolean("Type true for Silver or type false for Olivia ");

    // If statement is here to print out the result of the choice
    // the user selects and prints out eighth dialogue
    if(choice1023 == true){
        println(name + " believes that it is Silver.");
        println("Everyone GASPS and Silver is in a panic.");
        println(name + " explains that his answer wasn't convincing \nand that there is a more probability chance that it \nis him.");
        println(name + " asks Abigail to take him to a closet in the \nnext room to lock him up until morning.");
        println("Ever since then everything was quiet.");

    } else {
        
        println(name + " believes that it is Olivia.");
        println("Everyone GASPS and Olivia is in shock.");
        println(name + " explains that she is the only one out of \nthe three to be so thrill about getting her hands on \nthe amulet.");
        println(name + " asks Abigail to take her to a closet in \nthe next room to lock her up until morning.");
        println("Ever since then everything was quiet.");
    }

    println("");
    
    // Chapter 4
    println("Part 4");

    // Prints out ninth dialogue and if statement is here because
    // of your previous choice and prints out the result
    if(choice1023 == true){
        println("Everyone was waiting around bored out of their \nminds while Olivia was keeping an eye on Silver.");
        println("Everything was fine until all of a sudden the \nlights went out!");
        println("But then there was a scream and everyone \nwent to the other room to see what happened.");
        println("Silver was there and said that a trapdoor \nopened inside the closet. The reason why he didn't \nfell was because Oliva tried to save him \nbut unfortunately she slip and fell.");
        println("Everyone was surprised and decided to go back \nto the lobby to figure out all of this.");

        // Calls Function
        frameUp(hisOrHer, heOrShe, uppercase1, uppercase2);

    } else {
        
        println("Everyone was waiting around bored out of their \nminds while Caroline was keeping an eye on Olivia.");
        println("Everything was fine until all of a sudden the \nlights went out!");
        println("But then there was a scream and everyone \nwent to the other room to see what happened.");
        println("Caroline was there and said that a trapdoor \nopened inside the closet and Olivia fell.");
        println("Everyone was surprised and decided to go back \nto the lobby to figure out all of this");

        // Calls Function
        frameUp(hisOrHer, heOrShe, uppercase1, uppercase2);
    }

    println("");

    // Chapter 5 The Finale
    println("Part 5");

    // Prints out eleventh dialogue
    println("Everybody fell into a massive tube and Olivia \nwas there as well including Joe who is in a \nseparate tube.");
    println("They were confuse on whats going on and then Abigail emerges from the shadows.");
    println("Everybody yelled out WHAT ARE YOU DOING!");
    println("Abigail was just laughing and finally explains \nher master plan.");
    println("She says that she wanted the amulet for such a \nlong time and when she found out that someone in the local area found it, she wanted to take it.");
    println("She also said that she purposely sat in a chair with \nno button and knew that Silver would press it since \nhe has a habit of pressing random buttons.");
    println("She explains that the tubes they are in will scan \nthem and she will find out who has the amulet.");
    println("She begins the scanning process and found out \nthat Silver had it all along.");
    println("When she saw who had it she kept on saying \nthings like at last, finally, and my moment has \nfinally come. And then she was laughing like crazy.");
    println("However, since she was distracted " + name + " \nrealizes that " + heOrShe + " could climb out as long as they \nboost " + himOrHer + " to the top and free them with the obvious \nrelease button.");
    println("They enacted their plan and " + heOrShe + " released everyone. \nBy the time Abigail realizes this she knew that it \nwas over.");
    println("");
    println("It is time! What do you decide to do with Abigail?");

    // Prompts User to choose the villian's fate
    finalChoice = readBoolean("Type true if you want to imprison her forever \nor type false if you want to give her a chance ");

    // If statement is here to print out the result
    // of the choice the user selects
    if(finalChoice == true){
        println("You decided to imprison her in a fortified \ncage surrounded by lava.");
        println("With this being the case you end your adventure with bringing the villian to justice.");
        println("As for our heroes they finally got out of the \nmansion since all the monsters burn during \nthe daytime.");
        println("They will for sure have many more adventures to come.");

    } else {
        
        println("You decided to give her a chance and she promised to do so by serving her time in a normal jail to reform herself.");
        println("With this being the case you end your adventure \nby giving the villian a chance at redemption.");
        println("As for our heroes they finally got out of \nthe mansion since all the monsters burn during \nthe daytime.");
        println("They will for sure have many more adventures to come.");
    }

    // Final Message
    println("");
    println("Thanks for Playing!!!");
}

// Created function to decipher the choice the user made
// and to keep the program from breaking
function choiceDeciderV1(choice1, choice2, choice3, message1, message2, message3, multi){
    if(multi == 6){
        var randomChoice1 = Randomizer.nextInt(1, 3);
        
        if(randomChoice1 == 1){
            println(message1);
        }

        if(randomChoice1 == 2){
            println(message2);
        }

        if(randomChoice1 == 3){
            println(message3);
        }

    } else if(choice1 == 1) {
        println(message1);

    } else if(choice2 == 2) {
        println(message2);

    } else if(choice3 == 3) {
        println(message3);

    } else if(multi != 6){
        var randomChoice2 = Randomizer.nextInt(1, 3);
        if(randomChoice2 == 1){
            println(message1);
        }

        if(randomChoice2 == 2){
            println(message2);
        }

        if(randomChoice2 == 3){
            println(message3);
        }
    }
}

// Created function to decipher the choice the user made
// and to keep the program from breaking
function choiceDeciderV2(choice1, choice2, choice3, choice4, message1, message2, message3, message4, multi){
    if(multi == 10){
        var randomChoice1 = Randomizer.nextInt(1, 4);

        if(randomChoice1 == 1){
            println(message1);
        }

        if(randomChoice1 == 2){
            println(message2);
        }

        if(randomChoice1 == 3){
            println(message3);
        }

        if(randomChoice1 == 4){
            println(message4);
        }

    } else if(choice1 == 1) {
        println(message1);

    } else if(choice2 == 2) {
        println(message2);

    } else if(choice3 == 3) {
        println(message3);

    } else if(choice4 == 4) {
        println(message4);

    } else if(multi != 10){
        var randomChoice2 = Randomizer.nextInt(1, 4);
        if(randomChoice2 == 1){
            println(message1);
        }

        if(randomChoice2 == 2){
            println(message2);
        }

        if(randomChoice2 == 3){
            println(message3);
        }

        if(randomChoice2 == 4){
            println(message4);
        }
    }
}

// Created function to abstract a conversation
function frameUp(hisOrHer, heOrShe, uppercase1, uppercase2){
    // Created Variables (These variables are seperated from the other variables since they are in its own function.)
    var choice1, choice2, choice3;
    var message1, message2, message3;
    var multiChoice1;
    var name = "Caden";

    // Part of Ninth dialogue
    println("When they got back though they saw Chris with \na remote and everyone except " + name + "'s group said that \nhe's the real bad guy and went to grab him.");
    println(name + " steps in between them and they were saying \nto get out of the way and that " + heOrShe + " could no \nlonger defend " + hisOrHer + " friend.");
    println("");
    println("How do you respond?");

    // Prompts User
    choice1 = readInt("Press 1 if you want to say that it is a frame up: ");
    choice2 = readInt("Press 2 if you want to say that it is not what \nyou think: ");
    choice3 = readInt("Press 3 if you want to say that it doesn't make \nsense of why he has this remote: ");

    // Messages
    message1 = "Caden explains that all of this is a frame up \nbecause when the lights went out it can be very easy to put the blame on someone else and that one \nof them is still the mastermind behind all of this. \nEveryone doesn't believe that.";
    message2 = "Caden panics a little and says that it couldn't have been Chris. They were not convinced.";
    message3 = "Caden says that it doesn't make sense of how he \ncould have gotten that remote. \nThey said that it totally makes sense.";
 
    // Calls Function
    choiceDeciderV1(choice1, choice2, choice3, message1, message2, message3, multiChoice1);

    // Prints Out tenth dialogue
    println("");
    println("Silver says that the facts make sense completely and not only is Chris one of the suspects but also all \nof these bad things started happening when their \ngroup arrived.");
    println("Despite Silver's answer, " + name + " is going prove Chris' innocence.");
    println("Caden went to the closet to investigate it. " + uppercase1 + " \ntested the remote that Chris supposedly used and it \nis connected to the trapdoor.");
    println("However, this gave Caden an idea. " + uppercase1 + " says that \nthey can lower themselves down to see where the \nhole leads to.");
    println("Everyone agreed to this and started to make \ntheir way down with a rope that Leo had.");
    println("Caden, Caroline, and Chris went first, then Silver, \nand finally Leo and Abigail are about to make \ntheir way down.");
    println("BUT just then Abigail pushes Leo down and cuts \nthe rope with a match!");
}