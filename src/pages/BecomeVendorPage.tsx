import { API_BASE_URL, useGetMyUser } from "@/api/MyUserApi";
import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const BecomeVendor = () => {
	const { getAccessTokenSilently } = useAuth0();
	const { currentUser, isLoading: isGetUserLoading } = useGetMyUser();
	const [isLoading, setIsLoading] = useState(false);
	const [termsAgreed, setTermsAgreed] = useState({
		terms: false,
		privacyPolicy: false,
	});
	const navigate = useNavigate();

	const handleUpdate = async () => {
		if (!termsAgreed.terms || !termsAgreed.privacyPolicy) {
			toast.error(
				"Please agree to both the Terms and Conditions and Privacy Policy.",
			);
			return;
		}
		try {
			setIsLoading(true);
			const accessToken = await getAccessTokenSilently();
			await fetch(`${API_BASE_URL}/api/my/user/make-vendor`, {
				method: "POST",
				headers: {
					Authorization: `Bearer ${accessToken}`,
					"Content-Type": "application/json",
				},
			});
			navigate("/manage-restaurant");
			toast.success("Congratulations! You are now a vendor.");
		} catch (error) {
			console.error(error);
			toast.error("An error occurred. Please try again later.");
		} finally {
			setIsLoading(false);
		}
	};

	if (isGetUserLoading) {
		return <></>;
	}

	return (
		<div className='max-w-screen-lg p-10 space-y-4 rounded-md shadow-md '>
			<p className='text-xl font-bold'>Become A Vendor</p>
			<p className='opacity-50'>
				At Ecofoodbag, we're thrilled to extend a warm invitation to join our
				community as a vendor. Our platform is not just another food delivery
				service; it's a movement towards sustainability, health, and
				environmental responsibility. By embracing eco-friendly practices, we
				aim to revolutionize the way food is sourced, prepared, and delivered,
				all while fostering a sense of community among environmentally-conscious
				individuals like you.
			</p>
			<p className='opacity-50'>
				Our mission is simple yet profound: to provide a platform where vendors
				can showcase their eco-friendly products and consumers can access
				nutritious, sustainable food options conveniently. We envision a world
				where every meal contributes to environmental preservation and human
				well-being.
			</p>
			<p className='opacity-50'>
				At the core of our service lies a deep commitment to sustainability. We
				prioritize environmentally-friendly practices at every stage of our
				operations, from sourcing ingredients to packaging and delivery. By
				minimizing our carbon footprint and supporting local, eco-conscious
				vendors, we strive to make a positive impact on the planet.
			</p>
			<p className='opacity-50'>
				Joining Our Eco-Food Delivery Service offers a myriad of benefits for
				vendors seeking to promote their eco-friendly products.
			</p>
			<p className='opacity-50'>
				By partnering with us, you gain access to a targeted audience of
				environmentally-conscious consumers actively seeking sustainable food
				options. Our platform serves as a gateway to connect your products with
				individuals who share your values and are eager to support eco-friendly
				businesses.
			</p>
			<p className='opacity-50'>
				As a vendor on our platform, you're not just selling products; you're
				part of a larger movement towards sustainability. Your participation
				amplifies the collective impact of our community, contributing to a
				greener, healthier future for generations to come.
			</p>
			<p className='opacity-50'>
				We understand the importance of effective marketing and promotion in
				today's competitive landscape. That's why we provide robust marketing
				support to our vendors, including featured listings, social media
				promotion, and targeted advertising campaigns. We're committed to
				helping you maximize your visibility and reach your target audience
				effectively.
			</p>
			<p className='pb-10 opacity-50'>
				Integrating your products into our platform is seamless and hassle-free.
				Our user-friendly interface and dedicated support team ensure a smooth
				onboarding process, allowing you to focus on what you do best: creating
				exceptional eco-friendly products.
			</p>
			<div className='space-y-2'>
				<div className='flex items-center space-x-2'>
					<input
						type='checkbox'
						id='terms'
						checked={termsAgreed.terms}
						onChange={() =>
							setTermsAgreed({ ...termsAgreed, terms: !termsAgreed.terms })
						}
					/>
					<label htmlFor='terms'>
						<p className='font-bold select-none'>Terms and Conditions</p>
					</label>
				</div>
				<div className='flex items-center space-x-2'>
					<input
						type='checkbox'
						id='privacyPolicy'
						checked={termsAgreed.privacyPolicy}
						onChange={() =>
							setTermsAgreed({
								...termsAgreed,
								privacyPolicy: !termsAgreed.privacyPolicy,
							})
						}
					/>
					<label htmlFor='privacyPolicy'>
						<p className='font-bold select-none'>Privacy Policy</p>
					</label>
				</div>
			</div>
			<Button
				onClick={handleUpdate}
				disabled={!termsAgreed.terms || !termsAgreed.privacyPolicy}>
				{isLoading ? "Please wait" : "Become A Vendor"}
			</Button>
			{currentUser?.isVendor && (
				<div className='grid space-y-2'>
					<p> You are already a vendor</p>
					<Link to='/manage-restaurant'>
						<Button>Manage My Restaurant</Button>
					</Link>
				</div>
			)}
		</div>
	);
};

export default BecomeVendor;
