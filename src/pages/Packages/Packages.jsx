// import React, { useState } from 'react'; 


import React from 'react'
import './Packages.css';

function Packages() {
  return (
    <div>
   
    {/* <title>Package Options</title> */}


    <div class="package-navbar">
        <div class="package-types">
            <a href="#prime" class="package-link active">PRIME Packages</a>
            <a href="#regular" class="package-link">Regular Packages</a>
        </div>
        <div class="duration-buttons">
            <span className="borderlane"></span>
            <button class="duration-button active">3 Months</button>
            <button class="duration-button">6 Months</button>
            <button class="duration-button save-more">12 Months</button>
            <span className="borderlane"></span>


        </div>
    </div>
    {/* body card */}
    <div class="card-container">
    <title>Subscription Plans</title>

    <div class="card-container">
        <div class="card">
            <div class="card-header">Gold</div>
            <div class="card-price">₹5,300</div>
            <div class="card-features">
                <p>Initiate conversations with matches, send unlimited messages & chat*</p>
                <p>Connect with your preferred matches, view 50 verified mobile numbers*</p>
                <p>Check compatibility with matches by viewing unlimited horoscopes</p>
            </div>
            <div class="card-footerss">
                <div>You pay</div>
                <div class="price">₹5,300</div>
                <button class="pay-now">PAY NOW</button>
            </div>
        </div>

        <div class="card">
            <div class="card-header">Assisted Gold</div>
            <div class="card-price">₹22,900</div>
            <div class="card-features">
                <p>Dedicated Relationship manager shortlists, connects with relevant matches and arranges meetings</p>
                <p>Get more matches across Matrimony.com group of sites</p>
                <p>Get more responses as even Free members can send you messages</p>
                <p>All benefits of Gold Package</p>
            </div>
            <div class="card-footer">
                <div>You pay</div>
                <div class="price">₹22,900</div>
                <button class="pay-now">PAY NOW</button>
            </div>
        </div>
    </div>
    </div>
      




    </div>
  )
}

export default Packages






// const SubscriptionCard = ({ title, price, features, buttonColor }) => {
//   return (
//     <div className="subscription-card">
//       <h2 className="title">{title}</h2>
//       <div className="price">{price}</div>
//       <ul className="features">
//         {features.map((feature, index) => (
//           <li key={index} className="feature">{feature}</li>
//         ))}
//       </ul>
//       <div className="price-footer">{price}</div>
//       <button className="pay-now" style={{ backgroundColor: buttonColor }}>PAY NOW</button>
//     </div>
//   );
// };

// const SubscriptionOptions = () => {
//   const plans = [
//     {
//       title: 'Gold',
//       price: '₹5,300',
//       features: [
//         'Initiate conversations with matches, send unlimited messages & chat*',
//         'Connect with your preferred matches, view 50 verified mobile numbers*',
//         'Check compatibility with matches by viewing unlimited horoscopes'
//       ],
//       buttonColor: '#FFA500',
//     },
//     {
//       title: 'Assisted Gold',
//       price: '₹22,900',
//       features: [
//         'Dedicated Relationship manager shortlists, connects with relevant matches and arranges meetings',
//         'Get more matches across Matrimony.com group of sites',
//         'Get more responses as even Free members can send you messages',
//         'All benefits of Gold Package'
//       ],
//       buttonColor: '#FFA500',
//     },
//     // ... other plans
//   ];

//   return (
//     <div className="subscription-container">
//       {plans.map((plan, index) => (
//         <SubscriptionCard key={index} {...plan} />
//       ))}
//     </div>
//   );
// };

// // Export the components
// export { SubscriptionCard, SubscriptionOptions };
