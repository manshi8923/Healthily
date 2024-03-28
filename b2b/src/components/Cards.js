import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>We help Doctors to grow and Encourage them.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/im1.jpeg'
              text='Healthify offers a team of expert that is available for proper guidance of food , fitness and health. '
              label='Expert Faculty'
              path='/services'
            />
            <CardItem
              src='images/im2.jpeg'
              text='Peer group and a career support having a community of 10k+ active users. '
              label='Career Support'
              path='/services'
            />
          </ul>
          <h1>Know About Us</h1>
          <br/>
          <ul className='cards__items'>
            <CardItem
              src='images/im1.jpeg'
              text='Healthyfy gives a bright future to all the generation.'
              label='A Bright Future'
              path='/services'
            />
            <CardItem
              src='images/im4.jpeg'
              text='Free consulting is available by our expert team. '
              label='Consulting'
              path='/about'
            />
            <CardItem
              src='images/im3.jpeg'
              text='Healthyfy offers various coursers trusted by  Health and Education Institute & Research Council '
              label='Manage Courses'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;