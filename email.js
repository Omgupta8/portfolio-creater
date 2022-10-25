
function validateEmail() {
	//  Taking value of input field in variable myemail
	var myemail = $("#email").val();
	
	var namee= $("#name").val();

	// taking the position of @ from email string in variable at
	var at = myemail.lastIndexOf("@");
	
	// taking the position of . from email string in variable .
    var dot = myemail.lastIndexOf("."); 
	var c=0,d=0,e=0;
	// 1. position of "@" & ". greater than 0 and position of @ is greater than 1
	if (at > 0 && dot > at + 1 && dot < myemail.length - 1){
	}else{
		c=1;
	}

	if(namee =='')
	e=1;

	regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    var mylinkedin = $("#url").val();

        if (regexp.test(mylinkedin))
        {
          
        }
        else
        {
			d=1;
        }
		if(e==1)
		{
			alert("Enter your name!");
		}
		else 
		{
		if(c==0 &&d==0)
		location.href = "#page-3";
		else if(c==1 &&d==0)
		alert("Invalid Email Address");
		else if(c==0 &&d==1)
		alert("Invalid LinkedIn Link");
		else if(c==1 &&d==1)
		alert("Invalid Email Address & LinkedIn Link");
		}
}
	
function validategit() {

	regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    var mygitlink = $("#url1").val();

        if (regexp.test(mygitlink))
        {
			location.href = "#page-4";
        }
        else
        {
			alert("Invalid Github Link");
        }
}

// function validatesubmiit() {

// 	regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

// 	let c=0;
//     var myprojectfour = $("#project4").val();

//         if (regexp.test(myprojectfour))
//         {
//         }
//         else
//         {c++;
//         }
// 		var myprojectthree = $("#project3").val();

//         if (regexp.test(myprojectthree))
//         {
//         }
//         else
//         {c++;
//         }
// 		var myprojecttwo = $("#project2").val();

//         if (regexp.test(myprojecttwo))
//         {
//         }
//         else
//         {c++;
//         }

// 		if(c==0)
// 		{
// 		}
// 		else
// 		alert('Invalid Project Link');

		
// }

function validateprojectone() 
{

	regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

	let c=0;
    var myprojectone = $("#project3").val();

        if (regexp.test(myprojectone) || myprojectone=='')
        {
        }
        else
        {c++;
        }
		

		if(c==0)
		{
			location.href = "#page-6";
		}
		else
		alert('Invalid Project Link');

		
}

$(document).ready(function(){
	$("#checkemail").click(function(){
    	validateEmail();
  	});
	  $("#gitlink").click(function(){
    	validategit();
  	});
	//   $("#submiit").click(function(){
    // 	validatesubmit();
  	// });
	  $("#projectlink").click(function(){
    	validateprojectone();
  	});
});

// function red(){
// 	if(){

// 	}
// 	else{
// 		alert("Submit the details");
// 	}
// }