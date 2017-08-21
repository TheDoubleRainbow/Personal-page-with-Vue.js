Vue.component('info', {
	template: `
		<div>
			<div id="top-info">
				<img id="top-pic" :src="info.pic"/><br />
				<span v-show="info.name" id="top-greeting">Hello, my name is <span id="top-name">{{info.name}}</span></span><br />
				<span id="top-iam">i'm web developer</span>
			</div>
		</div>
	`,
	props: ["info"]
})