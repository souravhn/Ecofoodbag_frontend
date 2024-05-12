const PrivacyPolicy = () => {
	return (
		<div className='flex items-center justify-center min-h-screen px-4 py-12 bg-gray-100 sm:px-6 lg:px-8'>
			<div className='max-w-3xl p-8 bg-white rounded-lg shadow-lg'>
				<h1 className='mb-6 text-2xl font-semibold'>Privacy Policy</h1>

				<div className='prose'>
					<h2 className='pt-12 font-bold'>Information We Collect</h2>
					<p>
						At Ecofoodbag, we collect various types of information to enhance
						your experience on our website. This information may include:
					</p>
					<ul className='flex flex-col gap-4 py-4'>
						<li>- Name</li>
						<li>- Email address</li>
						<li>- Phone number</li>
						<li>- Address</li>
						<li>- Payment information</li>
					</ul>
					<br />

					<h2 className='pt-12 font-bold'>
						We collect this information through various means, including:
					</h2>
					<ul className='flex flex-col gap-4 py-4'>
						<li>- User registration forms</li>
						<li>- Order checkout process</li>
						<li>- Cookies (for analytics and tracking purposes)</li>
						<li>- Address</li>
						<li>- Payment information</li>
					</ul>
					<br />
					<h2 className='pt-12 font-bold'>How We Use Your Information</h2>
					<p>We use the information collected for the following purposes:</p>
					<ul className='flex flex-col gap-4 py-4'>
						<li>- To process orders and deliver food bags to customers</li>
						<li>
							- To personalize user experience and provide tailored
							recommendations
						</li>
						<li>
							- To communicate with users about their orders and account-related
							information
						</li>
						<li>
							- To improve our website and services based on user feedback and
							usage patterns
						</li>
					</ul>
					<br />
					<h2 className='pt-12 font-bold'>Data Security</h2>
					<p>
						We take the security of user data seriously and implement various
						measures to protect it, including:
					</p>
					<ul className='flex flex-col gap-4 py-4'>
						<li>- Encryption of sensitive information during transmission</li>
						<li>- Secure servers with restricted access</li>
						<li>
							- Regular security audits and updates to ensure compliance with
							industry standards
						</li>
					</ul>
					<br />
					<h2 className='pt-12 font-bold'>Your Rights</h2>
					<p>
						As a user of Ecofoodbag, you have certain rights regarding your
						personal data, including:
					</p>
					<ul className='flex flex-col gap-4 py-4'>
						<li>- The right to access the information we hold about you</li>
						<li>- The right to correct any inaccuracies in your information</li>
						<li>
							- The right to request deletion of your information from our
							records
						</li>
					</ul>
					<br />
					<p>
						If you have any questions or concerns about your data privacy
						rights, please contact us through the provided channels
					</p>
					<br />
					<h2 className='pt-12 font-bold'>Changes to this Policy</h2>
					<p>
						We reserve the right to update or modify this privacy policy at any
						time. Any changes will be effective immediately upon posting on our
						website. We encourage you to review this policy regularly to stay
						informed about how we collect, use, and protect your information.
					</p>
				</div>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
