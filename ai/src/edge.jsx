import React from "react";
import styled from "styled-components";
import { ThemeProvider } from 'styled-components';

// Define theme
const theme = {
  colors: {
    primary: '#2c5364',
    secondary: '#1cb5e0',
    background: '#f7f9fa',
    text: '#222',
    white: '#fff'
  },
  fonts: {
    main: "'Segoe UI', Arial, sans-serif"
  }
};

const Container = styled.div`
  font-family: 'Segoe UI', Arial, sans-serif;
  background: #f7f9fa;
  color: #222;
  min-height: 100vh;
`;

const Hero = styled.section`
  background: linear-gradient(90deg, #0f2027 0%, #2c5364 100%);
  color: #fff;
  padding: 60px 20px 40px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 12px;
`;

const Subtitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 24px;
`;

const Section = styled.section`
  max-width: 900px;
  margin: 40px auto;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 16px rgba(44,83,100,0.08);
  padding: 32px 24px;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #2c5364;
  margin-bottom: 16px;
`;

const List = styled.ul`
  margin: 0 0 16px 0;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 1.05rem;
`;

const Highlight = styled.span`
  color: #1cb5e0;
  font-weight: 600;
`;

const Footer = styled.footer`
  text-align: center;
  color: #888;
  font-size: 0.95rem;
  margin: 40px 0 10px 0;
`;

interface LandingPageProps {
  className?: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ className }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container className={className}>
        <Hero>
          <Title>Edge-Powered AI That Transforms Your Surveillance.</Title>
          <Subtitle>
            AI Adds To Your Surveillance System At The Edge<br />
            <span style={{ fontWeight: 300 }}>
              Enhance your current IP camera and NVR system with intelligent AI—installed directly at the edge, with no changes to your existing setup.
            </span>
          </Subtitle>
        </Hero>

        <Section>
          <SectionTitle>Works With Your Existing System</SectionTitle>
          <List>
            <ListItem>
              <Highlight>Plug & Play:</Highlight> No need to remove or replace cameras or recorders—simply add the AI box to your current network.
            </ListItem>
            <ListItem>
              <Highlight>Simple Installation:</Highlight> Set up and go live quickly with minimal disruption to daily operations.
            </ListItem>
            <ListItem>
              <Highlight>Scalable:</Highlight> Supports up to 16 IP Cameras @1080P or 32 cameras @720P—ideal for schools, retail, or offices.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Edge AI Box Powered by NVIDIA</SectionTitle>
          <List>
            <ListItem>
              <Highlight>NVIDIA Jetson Orin NX:</Highlight> Industry-leading AI computing power in a compact, efficient form.
            </ListItem>
            <ListItem>
              <Highlight>Reliable 24/7 Operation:</Highlight> Built to run continuously in challenging environments.
            </ListItem>
            <ListItem>
              <Highlight>Energy Efficient:</Highlight> Strong performance without high power consumption.
            </ListItem>
            <ListItem>
              <Highlight>Optimized for Vision AI:</Highlight> Designed for object detection, tracking, and recognition.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Fully On-Premise or Cloud-Hybrid Modes</SectionTitle>
          <List>
            <ListItem>
              <Highlight>On-Premise Mode:</Highlight> All video and AI analysis processed locally—ideal for strict privacy or limited internet.
            </ListItem>
            <ListItem>
              <Highlight>Cloud-Hybrid Mode:</Highlight> Real-time edge processing, with advanced features (like behavior or anomaly analysis) available via the cloud.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Transform Legacy IP Surveillance to AI-Enabled</SectionTitle>
          <List>
            <ListItem><Highlight>Facial Recognition:</Highlight> Identify individuals across your facility.</ListItem>
            <ListItem><Highlight>People Counting & Tracking:</Highlight> Understand foot traffic and crowd density.</ListItem>
            <ListItem><Highlight>Vehicle Detection:</Highlight> Monitor vehicle activity at entrances, exits, and parking zones.</ListItem>
            <ListItem><Highlight>Gun Detection:</Highlight> Instantly detect visible firearms and trigger alerts.</ListItem>
            <ListItem><Highlight>License Plate Recognition:</Highlight> Track vehicles using plate data.</ListItem>
            <ListItem><Highlight>Behavior & Anomaly Detection:</Highlight> Spot unusual behaviors like loitering or restricted access (cloud-hybrid mode required).</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Real-Time, Secure, and Privacy-Focused</SectionTitle>
          <List>
            <ListItem><Highlight>Real-Time Response:</Highlight> Instant alerts and decisions—no cloud delay.</ListItem>
            <ListItem><Highlight>Privacy by Design:</Highlight> Video and data stay within your facility unless you choose to share.</ListItem>
            <ListItem><Highlight>Control Sensitive Footage:</Highlight> Meet internal security and compliance standards.</ListItem>
            <ListItem><Highlight>Works Without Internet:</Highlight> Local AI functions continue even if your connection drops.</ListItem>
            <ListItem><Highlight>Built for Safety-Critical Sites:</Highlight> Ideal for education, healthcare, retail, public spaces, and privacy-focused sites.</ListItem>
          </List>
        </Section>

        <Footer>
          &copy; {new Date().getFullYear()} Edge AI Surveillance. All rights reserved.
        </Footer>
      </Container>
    </ThemeProvider>
  );
};

export default LandingPage;