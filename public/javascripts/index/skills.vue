Vue.component('skills', {
	template: `
		<div id="skills">
			<div class="skill" v-for="skill in skills.list">
				<div>{{skill.name}}</div><div>{{getRating(skill.level)}}</div>
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
		}
	}
})