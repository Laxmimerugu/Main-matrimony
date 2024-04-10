import React from 'react';
import './Premium.css';

function PricingCard() {
    return (
        <div>
            <div className="features-container">
                <h1>Pay now to contact matches</h1>
                <ul className="features-list">
                    <li className="feature">
                        <span className="checkmark">✓</span>
                        Send unlimited messages & chat, view 50 verified mobile numbers
                    </li>
                    <li className="feature">
                        <span className="checkmark">✓</span>
                        Check compatibility with matches by viewing unlimited horoscopes
                    </li>
                    <li className="feature disabled">
                        <span className="crossmark">✕</span>
                        View and contact ID verified matches with photos from exclusive Prime section
                    </li>
                    <li className="feature disabled">
                        <span className="crossmark">✕</span>
                        Priority customer service helpline
                    </li>
                    <li className="feature disabled">
                        <span className="crossmark">✕</span>
                        Get better visibility and responses from matches with 1 month Profile Highlighter
                    </li>
                </ul>
            </div>
            {/* // #membership part begin */}
            <div className="pricing-container">
                <div className="card-gold-premium">
                    {/* <div className="circle"> </div> */}
                    <input type="radio"  className='circle'/>
                    <div className="content">
                        <h2>GOLD</h2>
                        <p>3 Months</p>
                        <h3>₹5,300</h3>
                    </div>
                </div>
                <div className="card best-seller">
                    {/* <div className="circle"></div> */}
                    <input type="radio"  className='circle'/>

                    <div className="content">
                        <h2>PRIME GOLD</h2>
                        <p>3 Months</p>
                        <h3>₹7,500</h3>
                        <div className="badge">BEST SELLING</div>
                    </div>
                </div>
                <div className="card">
                    {/* <div className="circle"></div> */}
                    <input type="radio"  className='circle'/>

                    <div className="content">
                        <h2>PRIME PLATINUM</h2>
                        <div><p>3 Months</p></div>
                        <h3>₹9,500</h3>
                    </div>
                </div>
                
            </div>
            <div className="offer">
                    <span>Offer Valid Only Today!</span>
                    <button>Pay Now ₹5,300</button>
                </div>
        </div>
    );
}

export default PricingCard;
