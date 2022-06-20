$(document).ready(function () {
   $.ajax({
      url: "data/menu.csv",
      dataType: "text",
      success: function (data) {
         var employee_data = data.split(/\r?\n|\r/);
         var table_data = '';
         var banyk = Math.ceil(employee_data.length / 4); //INI DIUBAH UBAH 

         for (var count = 0; count < employee_data.length; count++) {
            var cell_data = employee_data[count].split(",");
            if (count === 0) {} else {
               if (count == 1) {
                  console.log(count)
                  table_data += '<div class="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap">'
               } else if (count == banyk) {
                  console.log(count)
                  table_data += '</div><div class="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap">'
               } else if (count == banyk + banyk - 1) {
                  console.log(count)
                  table_data += '</div><div class="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap">'
               } else if (count == banyk + banyk + banyk - 2) {
                  console.log(count)
                  table_data += '</div><div class="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap">'
               }

               if (count == banyk || count == banyk + banyk + banyk - 2) {
                  table_data += '<div class="fh5co-item margin_top  animate-box fadeInUp animated-fast">';
               } else {
                  table_data += '<div class="fh5co-item animate-box fadeInUp animated-fast">';

               }

               table_data += '<img src="images/produk/' + cell_data[1] + '" class="img-responsive" alt="food">';
               table_data += '<h3>' + cell_data[2] + '</h3>';
               table_data += '<span class="fh5co-price">Rp ' + cell_data[0] + '</span>';
               table_data += '<p>' + cell_data[3] + '</p></div>';
            }
         }
         // console.log(table_data);
         table_data += '</div>';
         $('#menu_menu').html(table_data);
      }
   });
});
