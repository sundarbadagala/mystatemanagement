import { useRecoilValue } from "recoil"
import { useNavigate } from "react-router-dom"
import { usersTwoSelector } from "../state/usersTwoState"

export default function Users() {
    const navigate = useNavigate()
    const users = useRecoilValue(usersTwoSelector)
    const handleNavigate = (id: any) => {
        navigate(`/users/${id}`)
    }
    const handleDetails=(e:any)=>{
        e.stopPropagation()
        console.log('details');
    }
    return (
        <div style={{ display: 'flex' }}>
            <div>
                {
                    users && users.length > 0 &&
                    users.map((user: any) =>
                        <div
                            key={user.id}
                            onClick={() => handleNavigate(user.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            {user.name} <button onClick={(e)=>handleDetails(e)}>more</button>
                        </div>
                    )
                }
            </div>
            <div>
                hello
            </div>
        </div>
    )
}