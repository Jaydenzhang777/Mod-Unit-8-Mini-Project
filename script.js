

//Write Code for Task One below this line!
//1. Create two arrays with two image links to TV show recommendations for each type: comedy, action, drama. Use doc in task one.
	let comedy = ["https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg","https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_.jpg","https://static.wikia.nocookie.net/harrypotter/images/a/a8/Harry_Potter_and_the_Prisoner_of_Azkaban_2.jpg/revision/latest?cb=20130803163319"];
	 let action =["https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg", "https://m.media-amazon.com/images/I/91tXzecvy-L._SL1500_.jpg","https://williammcginnbooks.files.wordpress.com/2021/11/01f445679a4f989616d152ce8b46f78ab790e5d0.jpg"];
	 let drama =["http://p6.toutiaoimg.com/large/pgc-image/721d3373465140c3945c88dda8d4a2fc?from=detail&index=1", "https://upload.wikimedia.org/wikipedia/zh/thumb/1/15/Wreckitralphposter.jpeg/220px-Wreckitralphposter.jpeg","https://static.wikia.nocookie.net/worldpedias/images/b/b8/%E7%84%A1%E6%95%B5%E7%A0%B4%E5%A3%9E%E7%8E%8B2%E6%B5%B7%E5%A0%B11.jpg/revision/latest?cb=20200118102001&path-prefix=zh"];

$(".submit-button").click(function(){
    let genreInput=$(".get-suggestions").val();
     $(".shows").empty();
//Write code for Task Two below this line!
//2. Write an if-else if statements so the computer will show certain images when the user types in certain genre.
    if(genreInput==="comedy"){
     for(let show of comedy){
    $(".shows").append("<img src="+show+">");
    }
	}
    else if(genreInput==="action"){
    for (let show of action){
    $(".shows").append("<img src="+ show+">");
    }
    }
    else if(genreInput==="drama"){
    for (let show of drama){
    $(".shows").append("<img src="+ show+">");
    }
    }
});

$(".suggestion-button").click(function(){
    let suggestion=$(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
//Write code for Task Three below this line!
//3. Write a code using .push to allow the user to make TV show suggestions.
	comedy.push(suggestion);
    console.log(comedy);
    action.push(suggestion);
    console.log(action);
    drama.push(suggestion);
    console.log(drama);
    
    
    
});