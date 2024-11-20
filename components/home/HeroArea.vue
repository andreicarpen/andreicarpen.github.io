<template>
	<div class="loader"></div>
	<section class="about-area">
		<div class="container">
			<div class="row">
				<div class="col-lg-7 mb-2 mb-lg-0 p-lg-1" data-aos="fade-up" data-aos-duration="800"
					data-aos-easing="ease-in-out-sine">
					<div class="about-me-box shadow-box h-full">

						<NuxtImg src="bg1.png" alt="BG" class="bg-img" />
						<div class="img-box">
							<NuxtImg src="me2.jpg" alt="About Me" width="500" placeholder="/square-placeholder.jpg" />
						</div>
						<div class="avatar-placeholder">
							<div class="image-inner">
								<NuxtImg src="me2.jpg" alt="About Me" />
							</div>
						</div>

						<div class="infos">
							<h4>PRODUCT/UX/UI DESIGNER</h4>
							<h1 class="mb-0">Andrei Carpen</h1>
							<p>
								I have 9 years of experience in B2C & B2B products across industries like AI, entertainment
								and healthcare.
							</p>

						</div>
					</div>
				</div>
				<div class="col-lg-5 p-lg-1">
					<div class="about-credentials-wrap">
						<div data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine">
							<div class="banner shadow-box">
								<div class="marquee">
									<div>
										<span>
											CURRENTLY IN
											<b>JOHOR BAHRU</b>
											<NuxtImg src="star1.svg" alt="Star" /> LOOKING FOR

											<b>ON SITE JOB IN SINGAPORE</b>
											<NuxtImg src="star1.svg" alt="Star" />
											CURRENTLY IN
											<b>JOHOR BAHRU</b>
											<NuxtImg src="star1.svg" alt="Star" /> LOOKING FOR

											<b>ON SITE JOB IN SINGAPORE</b>
											<NuxtImg src="star1.svg" alt="Star" />
											CURRENTLY IN
											<b>JOHOR BAHRU</b>
											<NuxtImg src="star1.svg" alt="Star" /> LOOKING FOR

											<b>ON SITE JOB IN SINGAPORE</b>
											<NuxtImg src="star1.svg" alt="Star" />
											CURRENTL
										</span>
									</div>
								</div>
							</div>
						</div>
						<div class="col-12">
							<div data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine">
								<div class="about-services-box info-box shadow-box h-full">
									<NuxtLink class="overlay-link" to="/resume"></NuxtLink>
									<NuxtImg src="bg1.png" alt="BG" class="bg-img" />
									<NuxtImg class="mb-0" src="resume-logos.png" :placeholder="[400, 30, 50]"
										alt="Sign" />
									<div class="d-flex align-items-center justify-content-between">
										<div class="infos">
											<h4>Resume</h4>
											<h1>Discover My Career Journey</h1>
										</div>
										<NuxtLink to="/resume" class="about-btn">
											<NuxtImg src="icon.svg" style="width:48px" alt="Button" />
										</NuxtLink>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
				<section class="projects-area pt-2 p-lg-1" style="padding-bottom:0!important;">

					
						<div class="col-12">
							<div class="project-item shadow-box hover-zoom" data-aos="fade-up" data-aos-duration="800"
								data-aos-easing="ease-in-out-sine">
								<NuxtLink class="overlay-link" to="/ezugi"></NuxtLink>
								<NuxtImg src="bg1.png" alt="BG" class="bg-img" />
								<div class="row pro d-flex flex-row">
									<div class="project-info col-lg-4 col-md-12  align-self-center p-4">
										<h6 style="font-size:0.8rem">EZUGI • PRODUCT DESIGN</h6>
										<h1 class="mb-3">
											How my complete product redesign led to an $18 million acquisition
										</h1>
										<h6>
											I designed their new immersive casino experiences & laid the
											foundations of the design system.
										</h6>
										<div class="d-flex align-items-center justify-content-between mt-24">
											<h5 style="color:var(--white)">View Case Study</h5>
											<NuxtLink to="/ezugi" class="project-btn">
												<NuxtImg src="icon.svg" style="width:48px" alt="Button" />
											</NuxtLink>
										</div>
									</div>
									<div class="project-img col-lg-8 col-md-12 order-first order-lg-2">
										<NuxtImg src="ezugi-thumbnail.jpg" placeholder="/case-placeholder.jpg"
											class="w-100" alt="Project" />
									</div>
								</div>
							</div>
							<div class="project-item shadow-box hover-zoom" data-aos="fade-up" data-aos-duration="800"
								data-aos-easing="ease-in-out-sine">
								<NuxtLink class="overlay-link" to="/readyflytalent"></NuxtLink>
								<NuxtImg src="bg1.png" alt="BG" class="bg-img" />
								<div class="row pro d-flex flex-row">
									<div class="project-info col-lg-4 col-md-12  align-self-center p-4">
										<h6 style="font-size:0.8rem">READYFLY • BRANDING & PRODUCT DESIGN</h6>
										<h1 class="mb-3">
											How I designed an AI platform to revolutionize the Job Hiring process
										</h1>
										<h6>
											I designed the branding, optimized the user experience, and established
											workflows for the team to maximize speed and efficiency.
										</h6>
										<div class="d-flex align-items-center justify-content-between mt-24">
											<h5 style="color:var(--white)">Read Case Study</h5>
											<NuxtLink to="/readyflytalent" class="project-btn">
												<NuxtImg src="icon.svg" style="width:48px" alt="Button" />
											</NuxtLink>
										</div>
									</div>
									<div class="project-img col-lg-8 col-md-12 order-first order-lg-2">
										<NuxtImg src="readyfly-thumbnail.jpg" placeholder="/case-placeholder.jpg"
											class="w-100" alt="Project" />
									</div>
								</div>
							</div>
							<div class="project-item shadow-box hover-zoom" data-aos="fade-up" data-aos-duration="800"
								data-aos-easing="ease-in-out-sine">
								<NuxtLink class="overlay-link" to="/lifedrops"></NuxtLink>
								<NuxtImg src="bg1.png" alt="BG" class="bg-img" />
								<div class="row pro d-flex flex-row">
									<div class="project-info col-lg-4 col-md-12  align-self-center p-4">
										<h6 style="font-size:0.8rem">LIFEDROPS • BRANDING & PRODUCT DESIGN</h6>
										<h1 class="mb-3">
											How designing my first B2C iOS app ignited my passion for product design
										</h1>
										<h6>
											I designed a B2C end-to-end app to help users create, store and
											share video memories.
										</h6>

										<div class="d-flex align-items-center justify-content-between mt-24">
											<h5 style="color:var(--white)">View Case Study</h5>
											<NuxtLink to="/lifedrops" class="project-btn">
												<NuxtImg src="icon.svg" style="width:48px" alt="Button" />
											</NuxtLink>
										</div>
									</div>
									<div class="project-img col-lg-8 col-md-12 order-first order-lg-2">
										<NuxtImg src="lifedrops-thumbnail.jpg" placeholder="/case-placeholder.jpg"
											class="w-100" alt="Project" />
									</div>
								</div>
							</div>
						</div>
					

				</section>
				<div class="col-12 col-md-8 p-lg-1" style="padding-top:0!important;" data-aos="fade-up" data-aos-duration="800"
					data-aos-easing="ease-in-out-sine">
					<div class="about-client-box info-box shadow-box h-full" style=" display: grid;
  place-items: center;">
						<NuxtImg src="bg1.png" alt="BG" class="bg-img" />
						<NuxtImg class="d-none d-md-block" style="margin:0; width:100%;" src="expertise.png"
							:placeholder="[400, 30, 50]" alt="My Works" />
						<NuxtImg class="d-md-none d-sm-block" style="margin:0; width:100%;" src="expertise-mobile.png"
							:placeholder="[400, 30, 50]" alt="My Works" />
					</div>
				</div>
				<div data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine"
					class="col-12 col-md-4 mt-2 mt-md-0 p-lg-1" style="padding-top:0!important;">
					<div class="about-contact-box info-box shadow-box h-full">
						<NuxtLink class="overlay-link" to="/contact"></NuxtLink>
						<NuxtImg src="bg1.png" alt="BG" class="bg-img" />
						<NuxtImg src="icon2.png" alt="Icon" class="star-icon" />
						<h1>Let's
							<br />work
							<span>together.</span>
						</h1>
						<a href="/contact" class="about-btn">
							<NuxtImg src="icon.svg" style="width:48px" alt="Button" />
						</a>
					</div>
				</div>




			</div>
		</div>
	</section>
</template>
