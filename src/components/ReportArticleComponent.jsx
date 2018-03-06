import React from 'react';
import styles from './ReportArticleComponent.less';

function ReportArticleComponent() {

	let href_link_arr = [
		{
			title: '项目报告',
			more_link: 'http://app.mytoken.io/',
			link_arr: [
				{
					title: '矿场关停是解决资源浪费?',
					link: 'http://app.mytoken.io/',
				},
				{
					title: '矿场关停是解决资源浪费?',
					link: 'http://app.mytoken.io/',
				},
				{
					title: '矿场关停是解决资源浪费?',
					link: 'http://app.mytoken.io/',
				},
				{
					title: '矿场关停是解决资源浪费?',
					link: 'http://app.mytoken.io/',
				},
				{
					title: '矿场关停是解决资源浪费?',
					link: 'http://app.mytoken.io/',
				},
				{
					title: '矿场关停是解决资源浪费?',
					link: 'http://app.mytoken.io/',
				},
				{
					title: '矿场关停是解决资源浪费?',
					link: 'http://app.mytoken.io/',
				},
				{
					title: '矿场关停是解决资源浪费?',
					link: 'http://app.mytoken.io/',
				},
			]
		},

		{
			title: '干货技巧',
			more_link: 'http://app.mytoken.io/',
			link_arr: [
				{
					title: '矿场关停是解决资源浪费?',
					link: 'http://app.mytoken.io/',
				},
				{
					title: '矿场关停是解决资源浪费?',
					link: 'http://app.mytoken.io/',
				},
				{
					title: '矿场关停是解决资源浪费?',
					link: 'http://app.mytoken.io/',
				},

			]
		},

		{
			title: '项目攻略',
			more_link: 'http://app.mytoken.io/',
			link_arr: [
				{
					title: '矿场关停是解决资源浪费?',
					link: 'http://app.mytoken.io/',
				},
				{
					title: '矿场关停是解决资源浪费?',
					link: 'http://app.mytoken.io/',
				},
				{
					title: '矿场关停是解决资源浪费?',
					link: 'http://app.mytoken.io/',
				},
				{
					title: '矿场关停是解决资源浪费?',
					link: 'http://app.mytoken.io/',
				},
				{
					title: '矿场关停是解决资源浪费?',
					link: 'http://app.mytoken.io/',
				},

			]
		},
	];


  return (
    <div className={styles.block_cont}>

    	<div className={styles.block_content}>

    		{href_link_arr && href_link_arr.length > 0 && href_link_arr.map(function(item, index) {

    			return (
    				<div className={styles.report_type_cont} key={'report_type_cont_' + index}>
    					<div className={styles.report_type_content}>

    						<div className={styles.report_type_head_cont}>
    							<div className={styles.report_type_head_text}>{item.title}</div>
    							{!!(item.more_link && item.more_link.length > 0) && <a className={styles.report_type_head_href} href={item.more_link}>更多></a>}
    						</div>

    						<div className={styles.report_list_cont}>

    							{item.link_arr && item.link_arr.length > 0 && item.link_arr.map(function(report_item, report_index) {

    								return (
    									<div className={styles.report_item_cont} key={'report_item_cont_' + report_index}>

    										<div className={styles.report_item_index} style={report_index < 3 ? {backgroundColor: '#e54747'} : {}}>{(report_index + 1)}</div>
    										<div className={styles.report_item_title}>{report_item.title}</div>

    									</div>
    								)
    							})}
    						</div>

    					</div>
    				</div>
    			)
    		})}

    	</div>

    </div>
  );
}

export default ReportArticleComponent;
