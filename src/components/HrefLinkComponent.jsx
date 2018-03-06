import React from 'react';
import styles from './HrefLinkComponent.less';

function HrefLinkComponent() {

	let href_link_arr = [
		{
			title: '行情资讯',
			intro: '基础行情数据和资讯',
			link_arr: [
				{
					label: 'mytoken',
					link: 'http://app.mytoken.io/',
				},
				{
					label: '非小号',
					link: 'https://www.feixiaohao.com/',
				},
			]
		},

		{
			title: '数字资产走势',
			intro: '数字资产大盘行情和量价信息',
			link_arr: [
				{
					label: '数链指数',
					link: 'http://www.gongxiangcj.com/sli',
				},
				{
					label: 'Coinmarketcap',
					link: 'https://coinmarketcap.com/zh/',
				},
			]
		},

		{
			title: '项目库',
			intro: '主流项目介绍和项目进展',
			link_arr: [
				{
					label: '链向财经',
					link: 'https://www.chainfor.com/project/list.html',
				},
				{
					label: '共享财经',
					link: 'http://www.gongxiangcj.com/comments',
				},
			]
		},

		{
			title: '项目活跃度',
			intro: '项目开发者指数，搜索指数，社区活跃度综合评价',
			link_arr: [
				{
					label: '币虎',
					link: 'https://www.coingecko.com/en',
				},
			]
		},

		{
			title: 'ICO评级',
			intro: '独立第三方ICO项目评级',
			link_arr: [
				{
					label: 'icoPod',
					link: 'http://www.icopod.com/',
				},
				{
					label: '链调查',
					link: 'http://www.chaindc.com/index.php/Home/Index/index.html#',
				},
			]
		},
	];

  return (
    <div className={styles.block_cont}>

    	<div className={styles.block_content}>

    		{href_link_arr && href_link_arr.length > 0 && href_link_arr.map(function(item, index) {

    			return (
    				<div className={styles.line_cont} key={'line_cont_' + index}>

							<div className={styles.line_title_cont}>
								<div className={styles.line_title_text}>{item.title}</div>
							</div>

							{item.link_arr && item.link_arr.map(function(litem, lindex) {

			    				return (
			    					<div className={styles.line_item_cont} key={'line_item_cont_' + lindex}>
			    						<a className={styles.line_item_text} href={litem.link}>{litem.label}</a>
			    					</div>
			    				)

			    			})}

						</div>
    			)
    		})}

    	</div>

    </div>
  );
}

export default HrefLinkComponent;
