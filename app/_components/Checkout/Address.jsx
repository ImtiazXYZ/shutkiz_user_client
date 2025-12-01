"use client"
import { use, useEffect, useState } from "react";
import { Select, Modal, Input, Skeleton } from 'antd';
import getAllDivisions from "../../_lib/address/getAllDivisions"
import getCities from "../../_lib/address/getCities";
import addAddress from "../../_lib/address/addAddress";
import getAddress from "../../_lib/address/getAddresses";
import addAddressToCart from "../../_lib/address/addAddressToCart";
import getCartAddress from "../../_lib/address/getCartAddress";
import toast from "react-hot-toast";
function Address({handleSelection}) {
    const [isChangeAddressModalOpen, setIsChangeAddressModalOpen] = useState(false);
    const [isNewAddressModalOpen, setIsNewAddressModalOpen] = useState(false);
    const { TextArea } = Input;
    const [divisions,setDivisions] = useState([]);
    const [cities,setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);
    const [division,setDivision] = useState(null);
    const [city,setCity] = useState(null);
    const [postalCode,setPostalCode] = useState();
    const [address,setAddress] = useState();
    const [allAddress,setAllAddress] = useState();
    const [isCreate,setIsCreate] = useState(false);
    const [selectedAddress,setSelectedAddress] = useState(null);
    const [cartAddress,setCartAddress] = useState(null);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        fetchCartAddress();
        fetchAddress();
        fetchDivisions();
    },[isCreate]);

    const showChangeAddressModal = () => {
        setIsChangeAddressModalOpen(true);
    };
    const showNewAddressModal = () => {
        setIsNewAddressModalOpen(true);
    };

    const fetchCartAddress = async () => {
        setIsLoading(true);  
        try {
            const result = await getCartAddress();
            if (result.success) {
                if (result.data) {
                    setCartAddress(result.data);
                    handleSelection(result.data.division_id); 
                }
            }
        } catch (error) {
            console.error('Error fetching cart address:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleChangeAddressOk = async() => {
        setIsCreate(false);
        if(selectedAddress!=null){
            const result = await addAddressToCart({address_id:selectedAddress});
            if(result.success){
                setIsCreate(true);
                toast.success('Address Added',2000);
            }
            setIsChangeAddressModalOpen(false);
        }
    };
    const handleNewAddressOk = () => {
        setIsCreate(false);
        addAddress({division_id:division,city_id:city,postal_code:postalCode,address:address});
        setIsCreate(true);
        setDivision(null);
        setSelectedCity(null);
        setPostalCode("");
        setAddress("");
        toast.success('Address Added Successfully',2000);
        setIsNewAddressModalOpen(false);
    };


    const handleChangeAddressCancel = () => {
        setIsChangeAddressModalOpen(false);
    };
    const handleNewAddressCancel = () => {
        setIsNewAddressModalOpen(false);
    };

    const openNewAddressModal=()=>{
        setIsChangeAddressModalOpen(false);
        setIsNewAddressModalOpen(true);
    }

    //Fetch Address 
    const fetchAddress = async () => {
        try {
            const result = await getAddress();
            if (result && result.data) {
                setAllAddress(result.data.addresses);
                
            } else {
                console.error('No data returned from getAllDivisions');
            }
        } catch (error) {
            console.error('Error fetching divisions:', error);
        }
    };
    //Division select 
    const fetchDivisions = async () => {
        try {
            const result = await getAllDivisions();
            if (result && result.data) {
                setDivisions(result.data);
            } else {
                console.error('No data returned from getAllDivisions');
            }
        } catch (error) {
            console.error('Error fetching divisions:', error);
        }
    };

    const handleDivisionChange = (value) => {
        setDivision(value);
        setSelectedCity(undefined);
        fetchCity(value);
    }


    //City select
    const fetchCity=async(value)=>{
        const result = await getCities(value);
        setCities(result.data.cities);
        if (result && result.data && result.data.cities) {
            setCities(result.data.cities);
            if (result.data.cities.length > 0) {
                setSelectedCity(result.data.cities[0].id);
            }
        }
    }

    const onSearch = (value) => {
        
    };
    const onChange = (value) => {
        setSelectedCity(value);
        setCity(value);
        
    };

    const selecteAddress=(id)=>{
        setSelectedAddress(id);
    }


  return (
    <main className='py-5'>
      <p className="font-semibold pb-4 ">Address</p>
      <div className='border p-3 rounded-lg shadow-md'>
      <div>
      {
    isLoading ? (
        <div>
            <Skeleton paragraph={{ rows: 1 }} active />
        </div>
    ) : cartAddress && cartAddress.division && cartAddress.city ? (
        <div>
            <p><span className='font-semibold'>Division</span> : {cartAddress.division.name}</p>
            <p><span className='font-semibold'>City</span> : {cartAddress.city.name}</p>
            <p><span className='font-semibold'>Address</span> : {cartAddress.address}</p>
        </div>
    ) : (
        <div className="p-2">No Address Added</div>
    )
}
        </div>

        <p className='pt-4 text-sm font-semibold cursor-pointer text-red-500' onClick={showChangeAddressModal}>Change</p>
      </div>
      <div className="modals">
        <div id="changeAddressModal">
            <Modal title="Select Address" open={isChangeAddressModalOpen} onOk={handleChangeAddressOk} onCancel={handleChangeAddressCancel}>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
                    {
                        allAddress&&allAddress.map((address,index)=>(
                            <div key={index} onClick={() => selecteAddress(address.id)} className="">
                                <div className={`border p-3 rounded-lg shadow-md text-sm cursor-pointer ${selectedAddress == address.id ? 'border-1.5 border-green-500 shadow-xl' : ''}`}>
                                <p className='font-semibold pb-1'>Address {index+1}</p>
                                <p><span className='font-semibold'>Division</span> : {address.division.name}</p>
                                <p><span className='font-semibold'>Ciry</span> : {address.city.name}</p>
                                <p><span className='font-semibold'>Address</span> : {address.address}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="pt-5">
                <h2 className="cursor-pointer" onClick={openNewAddressModal}>Add New</h2>
                </div>
            </Modal>
        </div>
        <div id="newAddressModal">
            <Modal title="Add New Address" open={isNewAddressModalOpen} onOk={handleNewAddressOk} onCancel={handleNewAddressCancel} okText="Create">
                <div className=" flex justify-center my-4">
                    <form action="" className="flex flex-col gap-y-4">
                    <Select
                        placeholder="Select Division"
                        style={{ width: 300 }}
                        value={division|| undefined}
                        onChange={handleDivisionChange}
                        options={divisions.map(division => ({
                            value: division.id,
                            label: division.name
                        }))}
                    />
                    <Select
                        style={{ width: 300 }}
                        showSearch
                        placeholder="Select City"
                        optionFilterProp="label"
                        onChange={onChange}
                        onSearch={onSearch}
                        value={selectedCity || undefined}
                        options={cities.map(city => ({
                            value: city.id,
                            label: city.name
                        }))}
                    />
                    <Input placeholder="Postal/Zip Code (Optional)" value={postalCode} onChange={(e)=>setPostalCode(e.target.value)}/>
                    <TextArea rows={4} placeholder="Street, area, upazila address" value={address} onChange={(e)=>setAddress(e.target.value)} />
                    </form>
                </div>
            </Modal>
        </div>
      </div>
    </main>
  )
}

export default Address
