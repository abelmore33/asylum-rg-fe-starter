import { Button, Space, Typography, Layout, Image } from 'antd';
import React from 'react';
import Logo from '../../styles/assets/Logos/StackedBrandmark_Green.png';
import { colors } from '../../styles/data_vis_colors';

import '../../styles/RenderLandingPage.less';
const { Text } = Typography;
const { primary_accent_color, secondary_accent_color } = colors;

function FooterContent() {
  return (
    <div>
      {/*logo*/}
      <div>
        <Image
          width={200}
          height={200}
          src={Logo}
          preview={false}
          alt="HRF logo white"
        />
      </div>
      <Space className="footer-container" direction="horizontal">
        <Space direction="vertical" align="start">
          {/*contact info*/}
          <Text style={{ color: secondary_accent_color }}>
            Human Rights First
            <br />
            75 Broad St, 31st Floor, New York,
            <br />
            New York, New York 10004 US
          </Text>
          {/*media contact*/}
          <Text style={{ color: secondary_accent_color }}>
            For Media Inquiries call 202-370-3323
          </Text>
        </Space>
      </Space>
    </div>
  );
}

function SubFooter() {
  const { Footer } = Layout;
  const base_url = 'https://www.humanrightsfirst.org';
  const button_links_by_text = {
    'About Us': `${base_url}/about`,
    'Contact Us': `${base_url}/about/contact`,
    Press: `${base_url}/press`,
    'Terms & Privacy': `${base_url}/about/privacy-policy`,
    'Sign Up': `${base_url}/sign-up`,
    Careers: `${base_url}/careers`,
  };
  return (
    <Footer
      style={{
        backgroundColor: primary_accent_color,
        marginLeft: '-7px',
      }}
    >
      <Space direction="horizontal">
        {Object.entries(button_links_by_text).map((text_link_pair, index) => {
          return (
            <Button
              key={index}
              type="text"
              size="small"
              href={text_link_pair[1]}
              style={{ color: secondary_accent_color }}
            >
              {text_link_pair[0]}
            </Button>
          );
        })}
      </Space>
    </Footer>
  );
}

export { FooterContent, SubFooter };
