import React from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import Children from '../../../styles/Images/HRF2.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
        <div className="header-image">
          <img className="children-img" src={Children} alt="" />
        </div>
      </div>

      {/* Graphs Section: Add code here for the graphs section for your first ticket */}
      <div className="graphs-section">
        <div className="grant-rates-by-office-graph-container">
          <img src={GrantRatesByOfficeImg} alt="" className="graph-img" />
          <p className="graph-text">Search Grant Rates By Office</p>
        </div>
        <div className="grant-rates-by-nationality-container">
          <img src={GrantRatesByNationalityImg} alt="" className="graph-img" />
          <p className="graph-text">Search Grant Rates By Nationality</p>
        </div>
        <div className="grant-rates-over-time-container">
          <img src={GrantRatesOverTimeImg} alt="" className="graph-img" />
          <p className="graph-text">Search Grant Rates Over Time</p>
        </div>
      </div>
      <div className="view-more-data-btn-container">
        <Button
          type="default"
          style={{
            backgroundColor: '#404C4A',
            color: '#FFFFFF',
            width: '170px',
            borderRadius: '14px',
          }}
          onClick={() => history.push('/graphs')}
        >
          View the Data
        </Button>
      </div>

      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>
      <div>
        {/* Bottom Section: Add code here for the graphs section for your first ticket */}
        <div className="bottom-section">
          <h1>Systemic Disparity Insights</h1>

          <div className="bottom-section-data-container">
            <div className="data-point-container">
              <h2>36%</h2>
              <p>
                By the end of the Trump administration, the average asylum
                office grant rate had fallen{' '}
                <span className="bold">36 percent</span> from an average of 44%
                in fiscal year 2016 to 28 percent in ficalyear 2020.
              </p>
            </div>
            <div className="data-point-container">
              <h2>5%</h2>
              <p>
                The New York asylum office grant rate dropped to{' '}
                <span className="bold">5 percent</span> in fiscal year 2020.
              </p>
            </div>
            <div className="data-point-container">
              <h2>6x Lower</h2>
              <p>
                Between fiscal year 2017 and 2020, the New York asylum office's
                average grant rate was{' '}
                <span className="bold">six times lower</span> than the San
                Francisco asylum office.
              </p>
            </div>
          </div>
        </div>
        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^
        </p>
      </div>
      <div className="line">
        <hr className="solid" />
      </div>
    </div>
  );
}
export default RenderLandingPage;
