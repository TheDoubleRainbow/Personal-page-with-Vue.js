Vue.component('skills', {
	template: `
		<div id="skills">
			<div id="skills-label">Skills:</div>
			<div class="skill" v-for="skill in skills.list">
				<div class="col-md-4 col-md-offset-2 col-lg-4 col-lg-offset-2 col-sm-5 col-sm-offset-1 col-xs-6">{{skill.name}}</div><div class="col-md-4 col-lg-4 col-sm-5 col-xs-6" v-html="getRating(skill.level)"></div>
			</div>
		</div>
	`,
	props: ["skills"],
	methods: {
		getRating(level){
			let code = "<div>";
			for(let i= 0; i < level; i++){
				code += "<div class='marked'><div></div></div>"
			}
			if(5-level>0){
				for(let i = 0; i < 5-level; i++){
					code += "<div class='unmarked'><div></div></div>"
				}
			}
			code += '</div>'
			return code
		}
	}
})