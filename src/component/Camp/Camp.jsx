

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import image1 from '../../Assets/Ads/Insights2.png';
import image2 from '../../Assets/Ads/French report.png';
import image2R from '../../Assets/Ads/spanish.png';
import image2RR from '../../Assets/Ads/English.png';
import image3 from '../../Assets/Ads/asely.png';
import image4 from '../../Assets/Ads/Insights up2.png';
import image5 from '../../Assets/Ads/Insights.png';
import image6 from '../../Assets/Ads/table.png';
import Image7 from '../../Assets/Ads/Grand Land.png';
import Google1 from '../../Assets/Ads/google ads.png';
import Google2 from '../../Assets/Ads/google/Total.png';
import Google3 from '../../Assets/Ads/google/numbers.png';
import Google4 from '../../Assets/Ads/google/persentage.png';
import Tiktok1 from '../../Assets/Ads/tiktok/Grand.png';
import Tiktok2 from '../../Assets/Ads/tiktok/Grand2.png';
import Tiktok3 from '../../Assets/Ads/tiktok/Asely.png';
import Tiktok4 from '../../Assets/Ads/tiktok/asely (2).png';
import style from './Camp.module.css'; 

const campaigns = [
  {
    id: 1,
    name: 'Meta',
    startDate: '1-10-2024',
    endDate: '25-10-2024',
    budget: '100/day',
    spent: 4500,
    Location: 'France , South Africa , Spanish , Gneva , UAE',
    conversions: 878,
    Clicks: 15718,
    description: 'From meta',
    images: [image2, image2R, image2RR, image6, image3, Image7, image5, image1, image4],
    icon: 'fa-brands fa-meta' // Add an icon class
},
  {
    id: 2,
    name: 'Google Ads',
    startDate: '1-10-2024',
    endDate: '27-10-2024',
    budget: 10000,
    spent: 10000,
    clicks: 5290,
    conversions: '',
    description: 'From Google',
    images: [Google1, Google2, Google3, Google4],
    icon: 'fa-brands fa-google'  },
  {
    id: 3,
    name: 'TikTok',
    startDate: '8-2024',
    endDate: '11-2024',
    budget: '100/day',
    spent: 5000,
    Location: 'UAE',
    clicks: "-",
    conversions: "-",
    description: 'From TikTok',
    images: [Tiktok1, Tiktok2, Tiktok3, Tiktok4],
    icon: 'fa-brands fa-tiktok'  },
  {
    id: 4,
    name: 'Snapchat',
    startDate: '/',
    endDate: '/',
    budget: "-",
    spent: "-",
    clicks: "-",
    conversions: "-",
    description: 'From Snapchat',
    images: [],
    icon: 'fa-brands fa-snapchat'
    },
];

// Define colors for each campaign ID
const campaignColors = {
  1: '#3b5998', // Meta (Facebook) color
  2: '#db4437', // Google Ads color
  3: '#000', // TikTok color
  4: '#FFFC00', // Snapchat color
};

const CampaignReports = () => {
  const [selectedCampaign, setSelectedCampaign] = useState(campaigns[0]);

  const handleCampaignChange = (campaign) => {
    setSelectedCampaign(campaign);
  };

  return (
    <div className={style["campaign-reports-container"]}>
      <h1 className={style.title}>Campaign Reports</h1>
      <div className={style["campaign-buttons"]}>
        {campaigns.map((campaign) => <button
            key={campaign.id}
            className={`${style["campaign-button"]} ${selectedCampaign.id === campaign.id ? style.active : ''}`}
            onClick={() => handleCampaignChange(campaign)}
            style={{ backgroundColor: campaignColors[campaign.id] }} // Apply the color based on campaign ID
          >
            <i className={campaign.icon}></i>
            {campaign.name}
          </button>
        )}
      </div>
      <div className={style["report-section"]}>
        <h2 className={style["report-title"]}>{selectedCampaign.name} Report</h2>
        <div className={style["report-details"]}>
          <div className={style["details-card"]}>
            <h3 className={style["card-title"]}>Campaign Details</h3>
            <ul>
              <li>Start Date: {selectedCampaign.startDate}</li>
              <li>End Date: {selectedCampaign.endDate}</li>
              <li>Budget: {selectedCampaign.budget} AED</li>
              <li>Spent: {selectedCampaign.spent} AED</li>
              <li>Location: {selectedCampaign.Location}</li>
            </ul>
          </div>
          <div className={style["performance-card"]}>
            <h3 className={style["card-title"]}>Campaign Performance</h3>
            <ul>
              <li>Clicks: {selectedCampaign.Clicks}</li>
              <li>Conversions: {selectedCampaign.conversions}</li>
            </ul>
          </div>
        </div>
        <div className={style["description-card"]}>
          <h3 className={style["card-Head"]}>Some of My Ads</h3>
          <p className={style.description}>{selectedCampaign.description}</p>
          <div className={style["image-gallery"]}>
            {selectedCampaign.images.length > 0 ? (
              selectedCampaign.images.map((image, index) => (
                <div className={style["image-container"]} key={index}>
                  <img
                    className={style["gallery-image"]}
                    src={image}
                    alt={`Campaign Image ${index + 1}`}
                  />
                </div>
              ))
            ) : (
              <p className={style.p}>Coming Soon</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignReports;
