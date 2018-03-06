import React from 'react';
import { connect } from 'dva';
import IndexPageComponent from '../components/IndexPageComponent';

function IndexPage() {
  return (
    <IndexPageComponent />
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
