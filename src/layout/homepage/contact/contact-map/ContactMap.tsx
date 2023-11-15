import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import './contact-map.scss';

const center = {
  lat: 51.307016313473405,
  lng: 17.067984857672194,
};

const ContactMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'api-key',
  });

  return (
    <>
      {isLoaded ? (
        <>
          <GoogleMap
            mapContainerClassName='contact__map'
            center={center}
            zoom={17}
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
  );
};

export default ContactMap;
