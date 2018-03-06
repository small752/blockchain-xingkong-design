import React from 'react';
import styles from './FootPageComponent.less';

function FootPageComponent() {
  return (
    <div className={styles.foot_cont}>

    	<div className={styles.foot_content}>

    		<div className={styles.related_href_cont}>

    				<span className={styles.related_href_title}>友情链接</span>
    				<a className={styles.related_href_label} href='http://www.gongxiangcj.com/comments'>共享财经</a>
    				<a className={styles.related_href_label} href='https://www.5186.net/'>比特币全球导航</a>

    		</div>

    	</div>

    </div>
  );
}

export default FootPageComponent;
