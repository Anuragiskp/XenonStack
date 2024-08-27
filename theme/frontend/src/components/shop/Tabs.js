import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function itemDetailsTabs({details}) {
  return (
    <Tabs
      defaultActiveKey="home"
      id="item-details-tabs"
      className="mb-3"
      fill
    > 
      <Tab eventKey="home" title="Details" >
        <li id='item-details-list'>Condition: {details.condition}</li>
        <li className='item-details-list'>ISBN-13: {details.isbn}</li>
        <li className='item-details-list'>Publication: {details.publication}</li>
        <li className='item-details-list'>Author: {details.author}</li>
      </Tab>
      <Tab eventKey="profile" title="Features">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Table of Contents">
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default itemDetailsTabs;