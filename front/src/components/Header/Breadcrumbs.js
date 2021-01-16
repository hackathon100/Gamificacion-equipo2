import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const getDisplayString = (sub) => {
  const arr = sub.split('-');
  if (arr.length > 1) {
    return `${arr[0].charAt(0).toUpperCase() + arr[0].slice(1)} ${arr[1]
      .charAt(0)
      .toUpperCase()}${arr[1].slice(1)}`;
  }
  return sub.charAt(0).toUpperCase() + sub.slice(1);
};

const getUrlString = (path, sub, index) => {
  if (index === 0) {
    return '/';
    // return '#/';
  }

  return `/${path.split(sub)[0]}${sub}`;
  // return `#/${path.split(sub)[0]}${sub}`;
};

const Breadcrumbs = ({ pathname }) => {
  const path = pathname.substr(1);
  const subPath = path.split('/');
  subPath.forEach((item, index) => {
    if (item.match(/^:.*$/)) {
      subPath.splice(index, 1);
    }
  });
  return (
    <div className="page-heading d-sm-flex flex-column">
      <Breadcrumb className="mb-0 d-flex" tag="nav">
        {subPath.map((sub, index) => (
          <BreadcrumbItem
            active={subPath.length === index + 1}
            tag="span"
            key={index}
            href={getUrlString(path, sub, index)}
          >
            {getDisplayString(sub)}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </div>
  );
};

Breadcrumbs.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Breadcrumbs;
