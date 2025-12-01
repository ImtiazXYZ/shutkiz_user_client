import FetchPublic from "../FetchPublic"

export default async function getHomepageTestimonials(){
    const {fetchPublic} = FetchPublic();
    const response = await fetchPublic('/testimonials');
    return response;
}