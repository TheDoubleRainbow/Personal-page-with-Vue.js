Vue.component('info', {
	template: `
		<div id="top">
			<div id="top-info">
				<img v-show="info.pic" id="top-pic" :src="info.pic"/><br />
				<span v-show="info.name" id="top-greeting">Hello, my name is <span id="top-name">{{info.name}}</span></span>
				<span id="top-iam">i'm web developer</span>
			</div>
			<div id="top-social">
				<div id="mail">
					{{info.links.mail}}
				</div
				<a :href="info.links.git"><img id="git" class="icon" src="/images/icons/github.png" /></a>
				<a :href="info.links.linkedin"><img class="icon margin-icon" src="/images/icons/linkedin.png" /></a>
				<a :href="info.links.facebook"><img class="icon margin-icon" src="/images/icons/facebook.jpg" /></a>
				<a :href="info.links.twitter"><img class="icon" src="/images/icons/twitter.jpg" /></a>
			</div>
		</div>
	`,
	props: ["info"]
})