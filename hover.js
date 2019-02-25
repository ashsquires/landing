$(document).ready(() => {
  $(".dr").hover((event) => {
    $(event.currentTarget).children(".popover").toggle("fast");
    console.log("trying dr");
  });
})
