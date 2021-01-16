import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Tab from 'components/Tabs/Tab';

const Tabs = ({ selected, tabs, actionPanel, className }) => {
  const [selectedTab, setSelectedTab] = useState(selected || 0);

  return (
    <div className={`tabs-container d-flex flex-column ${className}`}>
      <div className="tabs-header d-flex flex-row align-items-center justify-content-between pr-3">
        <div className="tabs d-flex">
          {_.map(tabs, (tab, index) => (
            <Tab
              key={index}
              index={index}
              selected={selectedTab === index}
              options={tab.options}
              onClick={() => {
                setSelectedTab(index);
                if (tab.onClick) tab.onClick();
              }}
            >
              {tab.label}
            </Tab>
          ))}
        </div>
        <div className="tabs-action-panel d-flex">
          {_.map(actionPanel, (button, index) => button)}
        </div>
      </div>
    </div>
  );
};

Tabs.propTypes = {
  selected: PropTypes.bool,
  tabs: PropTypes.arrayOf(PropTypes.object),
  actionPanel: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string,
};

Tabs.defaultProps = {
  selected: false,
  tabs: [],
  actionPanel: [],
  className: '',
};

export default Tabs;
