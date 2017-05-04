$(document).ready(function() {

  // Imagination!
  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'json',
  }).done(function(Data){
      for (var i = 0; i < Data.candidates.length; i++) {
          candidate = Data.candidates[i];

          var candidateInformation =  (' has recieved ' + candidate.votes + 'votes.');
          var strongTag = $('<strong>').html(candidate.name);
          var liTag = $('<li>').append(strongTag).append(candidateInformation);
          $('#bob').append(liTag);
        }
  });
});
