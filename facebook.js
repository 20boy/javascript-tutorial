            // let secondHand = document.querySelector("#sec");
            // let minHand = document.querySelector("#min");
            // let hourHand = document.querySelector("#hr");


            // setInterval(clockRotating,1000)

            // function clockRotating(){
            //     let date = new Date();
            //     let getSeconds = date.getSeconds()/60;
            //     let getMinutes = date.getMinutes()/60;
            //     let getHours = date.getHours()/12                
            // }
        
            // secondHand.style.transform = "rotate("+getSeconds*360  + "deg)"
            // minHand.style.transform = "rotate("+getMinutes*360  + "deg)"
            // hourHand.style.transform = "rotate("+getHours*360  + "deg)"

            // document.querySelector(".current-day").innerHTML = date.toDateString()
            // document.querySelector(".current-seconds").innerHTML = date.getSeconds()


            const deg = 6;
            const hr = document.querySelector('#hr');
            const mn = document.querySelector('#mn');
            const sc = document.querySelector('#sc');
          
          setInterval(() => {
          
             let day = new Date();
             let hh = day.getHours() * 30;
             let mm = day.getMinutes() * deg;
             let ss = day.getSeconds() * deg;
          
             hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
             mn.style.transform = `rotateZ(${mm}deg)`;
             sc.style.transform = `rotateZ(${ss}deg)`;
          })