import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './clients-section.scss';
import ClientCard from './clients-card/ClientCard';
import { HomepageSections } from '../../../models/enums/enums.app';

const ClientSection: FC = () => {
  return (
    <>
      <div className='clients' id={HomepageSections.Clients}>
        <h2 className='clients__header'>Nasi klienci</h2>
        <div className='clients__card-container'>
          <div className='clients__swiper-button-left'></div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            breakpoints={{
              1000: {
                slidesPerView: 3,
              },
              650: {
                slidesPerView: 2,
              },
            }}
            navigation={{
              nextEl: '.clients__swiper-button-right',
              prevEl: '.clients__swiper-button-left',
            }}
            modules={[Autoplay, Navigation]}
          >
            <SwiperSlide>
              <ClientCard
                name='Dominika i Azorek'
                content='Lorem ipsum dolor sit amet '
                pictureURL='src\assets\images\client-dog1.png'
                pictureAlt="A corgi staring to the front with it's tongue out."
              ></ClientCard>
            </SwiperSlide>
            <SwiperSlide>
              <ClientCard
                name='Małgosia i Puszek'
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies odio quis euismod blandit. Vestibulum a luctus metus. '
                pictureURL='src\assets\images\client-dog2.png'
                pictureAlt='A cocker spaniel staring to the front while sitting.'
              ></ClientCard>
            </SwiperSlide>
            <SwiperSlide>
              <ClientCard
                name='Artur i Nemo'
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies odio quis euismod blandit. Vestibulum a luctus metus. '
                pictureURL='src\assets\images\client-dog3.png'
                pictureAlt="A leonberger staring to the side with it's tongue out."
              ></ClientCard>
            </SwiperSlide>
            <SwiperSlide>
              <ClientCard
                name='Paweł i Ciapek'
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies odio quis euismod blandit. Vestibulum a luctus metus. '
                pictureURL='src\assets\images\client-dog4.png'
                pictureAlt='A beagle staring to the front.'
              ></ClientCard>
            </SwiperSlide>
          </Swiper>
          <div className='clients__swiper-button-right'></div>
        </div>
      </div>
    </>
  );
};

export default ClientSection;
