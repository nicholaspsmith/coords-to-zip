# Coords To Zip

Pass in a latitude and longitude, get back a zip using Google Geocoding API!

### Installing

`npm install coords-to-zip`


### Usage
```javascript
import coordsToZip from 'coords-to-zip'

const latitude = 123
const longitude = 456
const API_KEY = 'your-google-api-key'

const zip = coordsToZip({ latitude, longitude }, API_KEY)
```
You can also use without an API key but will be subject to default rate limiting
```javascript
const zip = coordsToZip({ latitude, longitude });
```

## Versioning

We use [SemVer](http://semver.org/). 

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details

