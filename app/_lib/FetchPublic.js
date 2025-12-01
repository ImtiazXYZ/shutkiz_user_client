export default function FetchPublic() {
    const APIURL = process.env.NEXT_PUBLIC_BASE_URL + "/api/public";

    const fetchPublic = async (endpoint = {}) => {
        const response = await fetch(`${APIURL}${endpoint}`, {
            cache : "no-store"
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    };

    return {
        fetchPublic
    };
}
