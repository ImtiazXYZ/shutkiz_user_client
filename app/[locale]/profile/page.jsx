import ProtectedProfile from "../../_components/Profile/ProtectedProfile"
function page() {
  return (
    <div>
      <div className="py-10">
        <ProtectedProfile/>
      </div>
    </div>
  )
}

export default page
