<template>
	<div>
		<Row>
			<Col span="8">
				<Menu :theme="theme2" :open-names="['1']" accordion>
					<Submenu name="1">
						<template slot="title">
							<Icon type="ios-paper" />
							个人信息
						</template>
						<MenuItem name="1-1" to="/root/profile/BasicInfo">基本信息</MenuItem>
						<MenuItem name="1-2">~~~~~</MenuItem>
						<MenuItem name="1-3">~~~~~</MenuItem>
					</Submenu>
					<Submenu name="2">
						<template slot="title">
							<Icon type="ios-people" />
							用户账单    <!-- 余额 -->
						</template>
						<MenuItem name="2-1" to="/root/profile/billing">消费</MenuItem>
						<MenuItem name="2-2" to="/root/profile/service">服务</MenuItem>
					</Submenu>
					<Submenu name="3">
						<template slot="title">
							<Icon type="ios-stats" />
							邮箱
						</template>
							<MenuItem name="3-1">写邮件</MenuItem>
							<MenuItem name="3-2">收件箱</MenuItem>
							<MenuItem name="3-3">发件箱</MenuItem>
					</Submenu>
				</Menu>
			</Col>
		</Row>
	</div>
</template>
<script>
    export default {
        data () {
            return {
                theme2: 'dark'
            }
        },
				
    }
</script>
