Vue.component('projects', {
	template: `
		<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12" id="projects">
			<div id="projects-label">Projects:</div>
			<div id="projects-list">
				<div v-for="project in projects.list" class="project">
					<div>
						<img class="project-image" :src="project.img" />
						<span class="project.name">{{project.name}}</span>
					</div>
					<div class="project-links">
						<a v-show="project.github" :href="project.github"><div><img class="project-git" src="/images/icons/github-t.png"></div></a>
						<a v-show="project.link" :href="project.link"><div><img class="project-git" src="/images/icons/web.png"></div></a>
					</div>
				</div>
			</div>
		</div>
	`,
	props:['projects']
})