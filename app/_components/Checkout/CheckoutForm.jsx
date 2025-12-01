function CheckoutForm({ formData, onFormChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormChange(name, value);
  };
  return (
    <div>
      <div class="flex items-center justify-center">
        <div class="bg-white shadow-lg rounded-lg max-w-md w-full p-6">
          <h1 class="text-2xl font-bold text-gray-800 text-center mb-6">
            Checkout
          </h1>
          <form class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={handleChange}
                id="name"
                name="name"
                placeholder="Your full name"
                class="mt-1 block w-full px-4 py-2 text-gray-800 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={handleChange}
                id="email"
                name="email"
                placeholder="you@example.com"
                class="mt-1 block w-full px-4 py-2 text-gray-800 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label
                for="mobile"
                class="block text-sm font-medium text-gray-700"
              >
                Mobile <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                id="mobile"
                name="mobile"
                placeholder="123-456-7890"
                class="mt-1 block w-full px-4 py-2 text-gray-800 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label
                for="division"
                class="block text-sm font-medium text-gray-700"
              >
                Division <span className="text-red-500">*</span>
              </label>
              <select
                id="division"
                name="division"
                value={formData.division}
                onChange={handleChange}
                class="mt-1 block w-full px-4 py-2 text-gray-800 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="" disabled selected>
                  Select your division
                </option>
                <option value="1">Dhaka</option>
                <option value="2">Chittagong</option>
                <option value="4">Rajshahi</option>
                <option value="7">Rangpur</option>
                <option value="3">Khulna</option>
                <option value="5">Barishal</option>
                <option value="6">Sylhet</option>
                <option value="8">Mymensingh</option>
              </select>
            </div>

            <div>
              <label
                for="address"
                class="block text-sm font-medium text-gray-700"
              >
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                id="address"
                value={formData.address}
                onChange={handleChange}
                name="address"
                rows="3"
                placeholder="Your full address"
                class="mt-1 block w-full px-4 py-2 text-gray-800 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                required
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
