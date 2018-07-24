const axios = require('axios')

const BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?'

const zipFromCoords = ({ latitude, longitude }, API_KEY) => {
	let url = BASE_URL
	if (typeof API_KEY !== 'undefined') {
		url += 'key=' + API_KEY + `&latlng=${latitude},${longitude}`
	} else {
		url += `latlng=${latitude},${longitude}`
	}
  return new Promise((resolve, reject) => {
    axios.get(url)
    .then(({ data }) => {
      if (data.error_message) {
        return Promise.reject(new Error(data.error_message))
      }
      const { results } = data

      if (results.length === 0) {
        return Promise.reject(new Error('No Results Found'))
      }

      const { address_components } = results[0]
      const postal_code = address_components
        .find(component => component.types[0] === 'postal_code')

      if (!postal_code) {
        return Promise.reject(new Error('No Results Found'))
      }

      const zip = postal_code.long_name || postal_code.short_name
      resolve(zip)
    })
    .catch(err => {
      reject(err)
    })
  })
}

module.exports = zipFromCoords
