

var volcano1;
var volcano2;
var volcano3;
var volcano4;


function autocomplete(inp, arr) {

    function extractDbData() {

      var promise1 = new Promise(function(resolve, reject) {
          performSearch(document.getElementById("myInput").value);
          setTimeout(function() {
              resolve('foo');
          }, 500);
      });

      // promise1.then(function(value) {
      //     console.log(value);
      //     // expected output: "foo"
      // }, function(error) { console.error(error); });

      // alert('a');

      promise1.then((successMessage) => {
          // successMessage is whatever we passed in the resolve(...) function above.
          // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
          console.log("Yay! " + successMessage);
          //res = "Yay";
          //document.getElementById("myDIV").innerHTML = 'res = ' + extractedRating;
          displayCarbonFootprint();
      });
      

      // performSearch('beef').then(
      //     function(a) {res = 'a';},
      //     function(b) { res = 'b'; }
      // );
      // var x = document.getElementById("myDIV").innerHTML = //document.getElementById("myInput").value;
      //      res;

      // alert(res);
      
  }




    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
                extractDbData();
                //displayCarbonFootprint();
                 });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }

function displayCarbonFootprint() {
  // document.body.innerHTML = document.body.innerHTML + "MY ANACONDA DONT";


    octoMat = extractedRating / 80.0;
    if (octoMat < 0.25)
      document.getElementById("volcanoImage").src = volcano1.src;
    else if (octoMat < 0.50)
      document.getElementById("volcanoImage").src = volcano2.src;
    else if (octoMat < 0.75)
      document.getElementById("volcanoImage").src = volcano3.src;
    else
      document.getElementById("volcanoImage").src = volcano4.src;

    // document.getElementById("fautTravailler").innerHTML = extractedRating;



    var bar_ctx = document.getElementById('bar-chart').getContext('2d');

    var purple_orange_gradient = bar_ctx.createLinearGradient(0, 0, 0, 160);
    purple_orange_gradient.addColorStop(0, 'red');
    purple_orange_gradient.addColorStop(1, 'green');

    var bar_chart = new Chart(bar_ctx, {
        type: 'bar',
        showTooltips: false,
        data: {
          showTooltips: false,
            //labels: ["Rating"],
            datasets: [{
                label: 'Rating',
                data: [extractedRating],
                backgroundColor: purple_orange_gradient,
                // hoverBackgroundColor: purple_orange_gradient,
                // hoverBorderWidth: 2,
                // hoverBorderColor: 'purple'
            }]
        },
        showTooltips: false,
        options: {
          events: [],
          showTooltips: false,
          legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        display:false,
                        maxTicksLimit:20,
                        max:68, 
                    }
                }]
            }
        }
    });






        var ctx = document.getElementById("myChart");
        ctx.width = 40;
        ctx.height = 10;
        
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Raw material", "Storage", "Transport", "Packaging",
                // "Purple", "Orange"
                ],
                datasets: [{
                    label: '# of Votes',
                    data: [extractedRaw, extractedStorage, extractedTransport, extractedPackaging
                      //, 2, 3
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                       // 'rgba(153, 102, 255, 0.2)',
                       // 'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                      //  'rgba(153, 102, 255, 1)',
                      //  'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });

         
         ctx.style.backgroundColor = 'rgba(255,255,255, 0.98)';
         
       
// var div = document.createElement("myChart");

// document.getElementById("container").appendChild(myChart);


}