

let firstName =  document.querySelector(".name")
let lastName =  document.querySelector("#lastname")
let middleName = document.querySelector(".middlename")
let department = document.querySelector("#inputDept")
let workYear = document.querySelector("#inputYear")
let registerBtn = document.querySelector("#registerbtn")
let idContainer = document.querySelector(".whole-wrapper2")
var imgFile = document.querySelector("#imgFile")


let duty = document.querySelector("#work1")

let surname = document.querySelector(".surname")



var idCard = '<section class="whole-wrapper">' +
 '<div class="employee-card">' + 
 '<div class="card-title">' +
  '<p>Hilbur Ltd</p>' + 
   '<button type="button" class="btn btn-outline-primary" id="profile-btn">Primary</button>' +
  '</div>' +
  '<div class="user-img-div">' +
  '<div class="row"><div class="small-12 medium-2 large-2 columns">' +  '<div class="circle">' + '<div class="profile-pic">' + '</div>' + '</div>' + '<div class="p-image">' + '<i class="fa fa-camera upload-button">' + '</i>' + '<input class="file-upload" type="file" accept="image/*"/>' + '</div>' + '</div>' + '</div>' +
 '</div>' +
 
 '<div class="profile-details">' +
   '<h3 class="surname">%lastname%</h3>' +
   '<p class="fullname">%fullname%</p>' + '<span class="line-border">  </span>' +
   '<div class="work-info">' +
     '<p class="years">%yearpresent%</p>' + '<p> | </p>' +
     '<p class="department">%department%</p>' +
   '</div>' +
   '<div class="duties">' +
     '<p class="works" id="work1">%work1%</p>' +
   '</div>' +
 '</div>' +
 '</div>' +
'</section>'


var ournewidcard
 var checkedPrint = document.querySelector(".checkboxprint");

//newdept = department.options[department.selectedIndex].value;

	   

const createWorkerCard = () =>{
    registerBtn.addEventListener("click", function(event){
        event.preventDefault();
        // let userImgDiv = document.querySelector(".user-img-div")
        var checkedBox = document.getElementsByName("vehicle")
        var selectedItems="";
        for(var i=0; i<checkedBox.length; i++){
          if(checkedBox[i].type=='checkbox' && checkedBox[i].checked==true)
			  	selectedItems+=checkedBox[i].value+"\n";
        }
        console.log(selectedItems)

        let fullName = lastName.value + " " + firstName.value + " " + middleName.value
        var newdept = department.value + " "
        var newyear = workYear.value
        

       
        ournewidcard = idCard.replace("%lastname%", lastName.value),
        ournewidcard = ournewidcard.replace("%fullname%", fullName)
        ournewidcard = ournewidcard.replace("%department%", newdept)
        ournewidcard = ournewidcard.replace("%yearpresent%", newyear)
        ournewidcard = ournewidcard.replace("%work1%", selectedItems)

       
        // ournewidcard = ournewidcard.replace("%work1%", checkboxes.value)
   
        console.log(ournewidcard);

         idContainer.innerHTML = ournewidcard
         var uploadIcon = document.querySelector(".upload-button")
        var chooseFile =  document.querySelector(".file-upload")
        var image = document.querySelector('.profile-pic');
        uploadIcon.addEventListener("click", function(event){
          chooseFile.click()
        chooseFile.addEventListener("change", function(event){
          image.style.backgroundImage = "url(" + URL.createObjectURL(event.target.files[0]) + ")";
        })

        // chooseFile.addEventListener('change', readURL, true);
        // function readURL(){
        //    chooseFile.files[0];
        //    var reader = new FileReader();
        //    reader.onloadend = function(){
        //      image.style.backgroundImage = "url(" + reader.result + ")";        
        //    }
        //    if(file){
        //       reader.readAsDataURL(file);
        //     }else{
        //     }
        // }
        
	     
        })
 
        // console.log(div)
      
 
    })

}

createWorkerCard();
