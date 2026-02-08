// export default function FetchPublic() {
//     const APIURL = process.env.NEXT_PUBLIC_BASE_URL + "/api/public";

//     const fetchPublic = async (endpoint = {}) => {
//         const response = await fetch(`${APIURL}${endpoint}`, {
//             cache : "no-store"
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         return response.json();
//     };

//     return {
//         fetchPublic
//     };
// }

export default function FetchPublic() {
  const APIURL = process.env.NEXT_PUBLIC_BASE_URL + "/api/public";

  const fetchPublic = async (endpoint = "") => {
    const response = await fetch(`${APIURL}${endpoint}`, {
      cache: "no-store",
    });

    let data = null;
    try {
      data = await response.json();
    } catch {
      data = null;
    }

    // Case 1: Proper 404 from backend
    if (response.status === 404) {
      return null;
    }

    // Case 2: Backend returns 200 but no data
    if (response.ok && (!data || data?.success === false)) {
      return null;
    }

    // Real server error
    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }

    return data;
  };

  return { fetchPublic };
}
