import { useContext } from 'react';
import background1 from '../assets/10.png';
import { authContext } from '../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const { user } = useContext(authContext)

    const data = useLoaderData()
    // console.log(data);
    const { type, title, image, description, amount, deadline, _id } = data



    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const image = formData.get('image');
        const title = formData.get('title');
        const type = formData.get('type');
        const description = formData.get('description');
        const amount = formData.get('amount');
        const deadline = formData.get('deadline');
        const email = formData.get('email');
        const userName = formData.get('userName');


        const data = { image, title, type, description, amount, deadline, email, userName }

        fetch(`https://a10-fund-spring-server.vercel.app/campaign/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Done',
                        confirmButtonColor: '#28A745',
                    })
                }
            })
    }


    return (
        <div className="py-12" style={{ backgroundImage: `url(${background1})` }}>
            <div className="max-w-lg mx-auto p-6 bg-transparent shadow-2xl border-y-4 border-y-[#28a7469d] rounded-lg py-12">
                <h2 className="text-3xl text-[#FD7E14] pb-2 rounded-2xl border-b-2 border-b-[#fd7d146f] font-bold mb-6 text-center">Update Your Campaign</h2>
                <form onSubmit={handleUpdate} className="space-y-4">
                    <div>
                        <label className="block font-medium mb-1">Image/Thumbnail (URL)</label>
                        <input
                            type="text"
                            name='image'
                            defaultValue={image}
                            placeholder="Enter image URL"
                            className="input input-bordered w-full"
                        />
                    </div>


                    <div>
                        <label className="block font-medium mb-1">Campaign Title</label>
                        <input
                            type="text"
                            name='title'
                            defaultValue={title}
                            placeholder="Enter campaign title"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Campaign Type</label>
                        <select
                            name='type'
                            defaultValue={type}
                            className="select select-bordered w-full">
                            <option value="personal">Personal Issue</option>
                            <option value="startup">Startup</option>
                            <option value="business">Business</option>
                            <option value="creative">Creative Ideas</option>
                        </select>
                    </div>


                    <div>
                        <label className="block font-medium mb-1">Description</label>
                        <textarea
                            name='description'
                            defaultValue={description}
                            placeholder="Enter a brief description"
                            className="textarea textarea-bordered w-full"
                        ></textarea>
                    </div>


                    <div>
                        <label className="block font-medium mb-1">Minimum Donation Amount <span className='text-gray-500'>(USD$)</span></label>
                        <input
                            type="number"
                            name='amount'
                            defaultValue={amount}
                            placeholder="Enter amount"
                            className="input input-bordered w-full"

                        />
                    </div>


                    <div>
                        <label className="block font-medium mb-1">Deadline</label>
                        <input
                            type="date"
                            name='deadline'
                            defaultValue={deadline}
                            className="input input-bordered w-full" r

                        />
                    </div>


                    <div>
                        <label className="block font-medium mb-1">User Email</label>
                        <input
                            type="email"
                            name='email'
                            value={user?.email}
                            readOnly
                            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                        />
                    </div>


                    <div>
                        <label className="block font-medium mb-1">User Name</label>
                        <input
                            type="text"
                            name='userName'
                            value={user?.displayName}
                            readOnly
                            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                        />
                    </div>


                    <div className="flex justify-center pt-2">
                        <input type="submit" value="Update Campaign" className="btn bg-[#28A745] text-white text-lg hover:bg-[#28A745] flex items-center gap-2 w-full" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;