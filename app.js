// var array = [];
// $.ajax({
//     url: 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=52b98b19174caa8072b16605a244e682&hash=7c19fb9f66f1f3978cd2ffb40d866940',
//     success: function (data) {
//         console.log(data);
//         for (var i = 0; i < array.length; i++) {
//             array.push([data.data.results[i].id, data.data.results[i].series.name]);
//             $('#tab' + i).html('<tbody><tr><td>' + array[i][0] + '</td> + <td>' + array[i][1] + '</td></tr></tbody>');
//             console.log(array);
//         }
//     }
// })

var hash = md5("1f1f5dfc6eb08711fb2b0a65d81a28a07d4c06bfb52b98b19174caa8072b16605a244e682");
var pubKey = '52b98b19174caa8072b16605a244e682';

$('.btn').click(function () {
    var buttonContent = $(this).data('letter');
    console.log(buttonContent);
    $.ajax({
        url: 'http://gateway.marvel.com/v1/public/characters?limit=100&nameStartsWith=' + buttonContent + '&ts=1&apikey=' + pubKey + '&hash=' + hash,

        success: function (marvel) {
            console.log(marvel);
            $('#tab').empty();
            for (var i = 0; i < marvel.data.results.length; i++) {
                var marv = marvel.data.results[i]
                $('#tab').append('<tr class="herosMarvel" ><td>' + marv.id + '</td>' +
                    '<td>' + '<img class="thumb" src="' + marv.thumbnail.path + '.' + marv.thumbnail.extension + '"alt="photo"/></td>\
                    <td>' + marv.name + '</td>\
                    <td>' + marv.description + '</td>\
                    <td>' + marv.comics.available + '</td>\
                    <td>' + marv.stories.available + '</td>\
                    <td>' + marv.series.available + '</td></tr>');

            }
            new List('tableList', {
                valueNames: ['herosMarvel'],
                page: 5,
                pagination: true
            });

        }

    });
});
