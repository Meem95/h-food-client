const MyRequestlist = ({list}) => {
    
    return (
      <tr key={list._id}>
        <th></th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={list.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{list.name}</div>
            </div>
          </div>
        </td>
        <td>{list.location}</td>
        <td>{list.date}</td>
        <td>
          {list.status === "requested" && (
            <span className="px-3 py-1 font-semibold rounded-md bg-[#84CC16] text-gray-50">
              {list.status}
            </span>
          )}
        </td>
      </tr>
    );
  };
  
  export default MyRequestlist;
  