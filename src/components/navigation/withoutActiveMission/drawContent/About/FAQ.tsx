import React from "react";
import styled from "styled-components";
import Accordion from "../../../ui/Accordion";
import { RiCustomerService2Fill } from "react-icons/ri";

type Props = {};

const Faq = (props: Props) => {
  return (
    <StyledFaq>
      <SectionHeadline>First Answers</SectionHeadline>

      <Accordion heading={"Why hereIam?"}>
        <WhyHereiam />
      </Accordion>

      <Accordion heading={"How to install?"}>
        <HowToInstall />
      </Accordion>

      <Accordion heading={"Why does the app load so slowly?"}>
        <WhyLoadSlowly />
        <Support />
      </Accordion>

      <Accordion
        heading={
          "Does the use of GPS shorten the battery life of my cell phone?"
        }
      >
        <GpsShortenBattery />
      </Accordion>

      <Accordion
        heading={"What should i do when i notice inaccurate data on the map?"}
      >
        <InaccurateData />
        <Support />
      </Accordion>
    </StyledFaq>
  );
};

const WhyHereiam = () => {
  return (
    <div>
      <p>
        When missing information meets missing experience, lives are in danger.
      </p>
      <br />
      <p>
        With hereIam we enable better decisions by closing information gaps and
        providing best practise.
      </p>
      <br />
      <p>
        This app connects all teams in the field and the higher level to make
        them more effective.
      </p>
      <br />
      <h4>
        Is as easy as pen and paper - our homogeneous solution for information
        sharing and decision making in crisis and disasters.
      </h4>
    </div>
  );
};

const InaccurateData = () => {
  return (
    <div>
      <p>
        We use maps and geodata material from third-party providers who keep
        their offer as up-to-date as possible.
      </p>
      <br />
      <p>
        But since data is constantly changing around the world, some of them may
        take a little longer to reflect changed data in the map.
      </p>
      <br />
      <p>We try to make our app as actually as possible.</p>
    </div>
  );
};

const GpsShortenBattery = () => {
  return (
    <div>
      <p>
        Since hereIam needs access to GPS, your phone may consume more battery
        life while you are actively using the map and features.
      </p>
      <br />
      <p>
        This often happens with apps that depend on these phone settings. If you
        think that our app consumes too much battery life, we recommend you to
        check the phone's battery settings and adjust them to the usage with the
        app.
      </p>
      <br />
      <p>We try to make our app as resource efficient as possible.</p>
    </div>
  );
};

const HowToInstall = () => {
  return (
    <div>
      <p>
        It is not necessary to install the app. You can access and use the app
        in any modern browser using the familiar URL.
      </p>
      <br />
      <p>
        It is designed as a PWA. Therefore, your browser offers you the local
        installation additionally. You can then launch the app locally from your
        screen.
      </p>
    </div>
  );
};

const WhyLoadSlowly = () => {
  return (
    <div>
      <p>
        Please note that this is a project in an early stage of development.
        Therefore, there may be frequent updates and downtimes.
      </p>
      <p>First, make sure you have a stable internet connection.</p>
      <br />
      <p>
        If you have done that, but still have problems with the app's speed, we
        recommend you to check the following items in the phone's settings:
      </p>
      <ul>
        <li>
          check if the permissions to access the location are enabled while you
          are using the app (in the browser and in the operating system)
        </li>
        <li>use the automatic time zone for the cell phone</li>
        <li>
          make sure that the phone is not in power saving mode. If necessary,
          deselect battery optimization and do not use the app when the phone is
          charging from an empty state.
        </li>
      </ul>
    </div>
  );
};

const Icon = RiCustomerService2Fill;

const Support = () => {
  return (
    <StyledSupport>
      <Icon size={65} />
      <p>
        If the problem persists, please contact the support team and let us know
        the details so that we can help you better.
      </p>
      <p>
        Please note that this is a project in an early stage of development.
        Therefore, there may be frequent updates and downtimes.
      </p>
    </StyledSupport>
  );
};

const StyledSupport = styled.div`
margin-top: 2rem;
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

`;

const StyledFaq = styled.div`
  margin-top: 3rem;
  width: 90vw;

  font-size: 0.8rem;
  font-weight: 200;
`;

const SectionHeadline = styled.div`
  width: 90vw;

  font-size: 1.2rem;
  font-weight: 600;

  padding: ${(props) => props.theme.sectionHeadlinePadding};

  color: ${(props) => props.theme.buttonFontColor};
  background-color: ${(props) => props.theme.buttonColor};

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: ${(props) => props.theme.buttonBorderRadius}
    ${(props) => props.theme.buttonBorderRadius} 0 0;
`;

export default Faq;
