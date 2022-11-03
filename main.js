function blue(){
    var myEmail = $('#email').val();
    var at = myEmail.lastIndexOf("@");
    var dot = myEmail.lastIndexOf('.');
    var namee= $("#name").val();
    var trimname=namee.trim();
    var mylinkedin = $("#url").val();
    var c=0,d=0,e=0;

    regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    if(at>0&&dot>at+1&&dot<myEmail.length-1){    
    }
    else{
        c=1;
    }
    if(trimname =='')
	    e=1;
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

function white(){
    regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    var mygitlink = $("#url1").val();
    var tellyourself=$("#bio").val();
    var trim_tellyourself=tellyourself.trim();
    var tellprojects=$("#task").val();
    var trim_projects=tellprojects.trim();

    var f=0,g=0,h=0;

    if (regexp.test(mygitlink))
    {
    }
    else
    {
        f=1;
        
    }
    if(trim_tellyourself=='')
    g=1;
    if(trim_projects=='')
    h=1;
    if(f==1)
	{
		alert("Invalid Github Link");
	}
	else 
	{
	    if(g==0 &&h==0)
		location.href = "#page-4";
		else if(g==1 &&h==0)
		alert("Enter something!");
		else if(g==0 &&h==1)
		alert("Enter something!");
		else if(g==1 &&h==1)
		alert("Enter something!");
	}
}

function black(){
    regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    let a=0,b=0,c=0;
    var myprojectone = $("#project1").val();
    var domain=$("#domain").val();
    var myprojecttwo = $("#project2").val();

        if (regexp.test(myprojectone))
        {
        }
        else
        {c++;
        }
        if (regexp.test(myprojecttwo))
        {
        }
        else
        {b++;
        }
        if(domain.trim()=='')
        a=1;		

		if(a==1)
	{
		alert("Enter the domain!");
	}
	else 
	{
	    if(b==0 &&a==0)
		location.href = "#page-5";
		else if(b==1 &&a==0)
		alert("Invalid Project link");
		else if(b==0 &&a==1)
		alert("Invalid Project link");
		else if(b==1 &&a==1)
		alert("Invalid Project link");
	}
}
// $(document).ready(function(){
// 	$("#checkemail").click(function(){
//     	validateEmail();
//   	});
// 	  $("#gitlink").click(function(){
//     	validategit();
//   	});
// 	//   $("#submiit").click(function(){
//     // 	validatesubmit();
//   	// });
// 	  $("#projectlink").click(function(){
//     	validateprojectone();
//   	});
// });

function yellow(){
    regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    let a=0,b=0,c=0;
    var myprojectthree = $("#project3").val();
    var skill=$("#skill1").val();
    var myprojectfour = $("#project4").val();

        if (regexp.test(myprojectthree))
        {
        }
        else
        {c++;
        }
        if (regexp.test(myprojectfour))
        {
        }
        else
        {b++;
        }
        if(skill.trim()=='')
        a=1;		

		if(a==0)
	{
		if(b==0 &&a==0)
		location.href = "#page-6";
		else if(b==1 &&a==0)
		alert("Invalid Project link");
		else if(b==0 &&a==1)
		alert("Invalid Project link");
		else if(b==1 &&a==1)
		alert("Invalid Project link");
	}
	else if(a==1)
	{
	    alert("Enter your skills!");
	}
}

// function red(){
//     regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

//     let a=0,b=0,c=0;
//     var myprojectthree = $("#project3").val();
//     var skill=$("#skill1").val();
//     var myprojectfour = $("#project4").val();

//         if (regexp.test(myprojectthree))
//         {
//         }
//         else
//         {c++;
//         }
//         if (regexp.test(myprojectfour))
//         {
//         }
//         else
//         {b++;
//         }
//         if(skill.trim()=='')
//         a=1;		

// 		if(a==0)
// 	{
// 		if(b==0 &&a==0)
// 		location.href = "#page-6";
// 		else if(b==1 &&a==0)
// 		alert("Invalid Project link");
// 		else if(b==0 &&a==1)
// 		alert("Invalid Project link");
// 		else if(b==1 &&a==1)
// 		alert("Invalid Project link");
// 	}
// 	else if(a==1)
// 	{
// 	    alert("Enter your skills!");
// 	}
// }

