import React from 'react'
import axios from 'axios'

const SpotifySearch = () => {

var axios = require('axios');
var data = '';

var config = {
  method: 'get',
  url: 'https://api.spotify.com/v1/search?q=311&type=track',
  headers: { 
    'Authorization': 'Bearer BQAgwLHT-EtaSMoTm2QrqVUscChwuWclE51U33oJx3uBJwpLMtRfPxy3mnRB18z89Va_LpHD3rPbgszhzD6HS9rrELOmArvzVGopvY8jsSF6uu1Kr2pYA4ysYMCGPOv8YLkaSAYEGf-xeq3bqbVYCVdl8pDwdjn3OXVzzka87VCSCs25f7xe6Zr1cC9ES9GgZNd7pG83iFSyC6TvFbDn9ffA844SYWTc7EAJrfOt7n2If3kS_1H8BtbPOkvJ98qX9UsqS9iXytWe5sbxM5rSLt6f4ANf3kEX', 
    'www-authenticate': 'Bearer realm="spotify"', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

return (

  <div>
    <h1>Holla</h1>
  </div>

)
}

export default SpotifySearch