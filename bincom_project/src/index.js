//looping the lga  name to the select element
function getlga(){

  $.ajax({
    url:"./api/getlga.php",
    method:'get',
    success:(res)=>{
      let data  =JSON.parse(res)
      data.forEach(data => {
        
        $("#show_polling,#show_lga").append(
          
          `<option value="${data.lga_id}" selected>${data.lga_description}</option>
          `
        )
      });
    }
  })
}
$("#show_polling").change((e)=>{
  $('.show_lg_result').html(``)

$.ajax({
  url:'./api/getpoll.php',
  method:'post',
  data:{
    lgid:e.target.value,
  },
  success:(res)=>{
    let data  =JSON.parse(res)
    data.forEach(data => {
      $(".show_lg_result").append(`
            <tr>
            <td>${data.polling_unit_name}</td>
             <td>${data.party_abbreviation}</td>
             <td>${data.party_score}</td>
           </tr>  `)
            
    
    });
  }
  
})


})

getlga()
let showtable = document.querySelector('.show-details')

$.ajax({
  url:"./api/showresult.php",
  method:'post',
 
  success:(res)=>{
    let data  =JSON.parse(res)
    data.forEach(data => {
      console.log(data);
     
      showtable.innerHTML +=
        `
        <tr>
        <td>${data.party_abbreviation}</td>
        <td>${data.party_score}</td>

       </tr>
        `
      
    });
  }
})
// $("#show_poll").change((e)=>{
//     $('.show_lg_result').html(``)

//   $.ajax({
//     url:'./api/showsumres.php',
//     method:'post',
//     data:{
//       uniqueid:e.target.value,
//     },
//     success:(res)=>{
//       let data  =JSON.parse(res)
//       data.forEach(data => {
//       $(".show_lg_result").append(`
//       <tr>
//       <td>${data.party_abbreviation}</td>
//       <td>${data.party_score}</td>
//     </tr>  `)
      
//       });
//     }
    
//   })
// })
$('#show_lga').change((e)=>{
  $('#show_polling_unit').html('')

  $.ajax({
    url:'./api/getpu.php',
    method:'post',
    data:{
      lga_id:e.target.value,
    },
    success:(res)=>{
let data = JSON.parse(res);
data.forEach(data => {
  $("#show_polling_unit").append(
    
    `<option value="${data.uniqueid}" selected>${data.polling_unit_name}</option>
    `
  )
});
    }
  })
})
$('#show_polling_unit').change((e)=>{
  $.ajax({
    url:'./api/getparty.php',
    method:'post',
    
    success:(res)=>{
  let data = JSON.parse(res);
  data.forEach(data => {
  $("#party").append(
    
    `<option value="${data.partyname}" selected>${data.partyname}</option>
    `
  )
  });
    }
  });
})
$("#party").change((e)=>{
$("#partyname").text(e.target.value)
})
$("#submit").click(()=>{
  $.ajax({
    url:"./api/addresult.php",
    method:'post',
    data:{
      pu_id:$("#show_polling_unit").val(),
      party_name:$("#party").val(),
      party_score:$("#result").val(),
    },
    success:()=>{
      alert('success')
    }
  })
})