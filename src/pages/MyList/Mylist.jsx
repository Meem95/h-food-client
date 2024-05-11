import { TbEdit } from "react-icons/tb";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Mylist = ({listData, item, list, index }) => {
    //console.log(list._id)
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
                fetch(`https://b9a10-tour-server.vercel.app/location/${_id}`, {
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
                        <div className="font-bold">{list.tourists_spot_name}</div>
                    </div>
                </div>
            </td>
            <td>{list.country_Name}</td>
            <td>$ {list.average_cost}</td>
            <td>{list.seasonality}</td>
            <td className="text-xl">
            <Link to={`/update-my-list/${list._id}`} className="text-2xl text-[#ff8900]"><TbEdit /></Link>
                <Link className="text-2xl text-[#ff8900]"><MdDeleteSweep onClick={() => handleDelete(list._id)} /></Link>
            </td>
        </tr>
    );
};

export default Mylist;
