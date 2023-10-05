import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: '33em',
  height: '40em',
}
const center = {
  lat: 51.307016313473405,
  lng: 17.067984857672194,
}

const ContactMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_API_KEY',
  })

  return (
    <>
      {isLoaded ? (
        <>
          <GoogleMap
            mapContainerClassName="c-office-overview__map"
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            <Marker
              position={{
                lat: center.lat,
                lng: center.lng,
              }}
            ></Marker>
          </GoogleMap>
        </>
      ) : null}
    </>
  )
}

export default ContactMap
