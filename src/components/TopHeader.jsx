import React from 'react';
import styles from './TopHeader.less';

function TopHeader() {
  return (
    <div className={styles.header_cont}>

    	<div className={styles.header_content}>

    		<div className={styles.logo_cont}>
    			<img src="//img.ishanshan.com/gimg/img/269bb9d73df88e2ca3e4576c73e7e7a7" className={styles.logo_img} />
    		</div>

    	</div>

    </div>
  );
}

export default TopHeader;
