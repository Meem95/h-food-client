import { TbEdit } from "react-icons/tb";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Mylist = ({ listData, item, list, index }) => {
    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b9a11-food-server.vercel.app/food/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Location has been deleted.',
                                'success'
                            )
                            const remaining = item.filter(loc => loc._id !== _id);
                            listData(remaining);
                        }
                    })
            }
        })
    }

    // Check if the food status is "available" before rendering the table row
    if (list.status === "available") {
        return (
            <tr key={list._id}>
                <th>{index}</th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={list.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{list.food_name}</div>
                        </div>
                    </div>
                </td>
                <td>{list.quantity}</td>
                <td>{list.location}</td>
                <td>{list.date}</td>
                <td>
                    <span className="px-3 py-1 font-semibold rounded-md bg-[#84CC16] text-gray-50">
                        <span>{list.status}</span>
                    </span>
                </td>
                <td className="text-xl">
                    <Link to={`/update-my-list/${list._id}`} className="text-2xl text-[#84CC16]"><TbEdit /></Link>
                    <MdDeleteSweep className="text-2xl text-[#84CC16]" onClick={() => handleDelete(list._id)} />
                </td>
            </tr>
        );
    } else {
        return null; 
    }
};

export default Mylist;
