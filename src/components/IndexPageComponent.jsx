import React from 'react';
import styles from './IndexPageComponent.less';

import TopHeader from './TopHeader';
import HrefLinkComponent from './HrefLinkComponent';
import ReportArticleComponent from './ReportArticleComponent';
import FootPageComponent from './FootPageComponent';

function IndexPageComponent() {
  return (
    <div className={styles.main_page}>

    	<TopHeader />

    	<div className={styles.page_content}>

    		<div className={styles.page_title_cont}>
    			<img src="//img.ishanshan.com/gimg/img/d6d1672176f2da7772815f05814ab1ce" className={styles.page_title_img} />
    		</div>

    		<div className={styles.split_line}></div>

    		<HrefLinkComponent />

    		<div className={styles.split_line}></div>

    		<ReportArticleComponent />

    		<FootPageComponent />

    	</div>



    </div>
  );
}

export default IndexPageComponent;
